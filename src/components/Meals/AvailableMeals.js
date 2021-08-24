import React, { useEffect, useState } from 'react';
import { Card } from '../UI/';
import classes from './AvailableMeals.module.css';
import MealsItem from './MealsItem/MealsItem';

const AvailableMeals = () => {
	const [ meals, setMeals ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		const fetchMeals = async () => {
			const res = await fetch('https://react-http-992d0-default-rtdb.firebaseo.com/meals.json');
			const resJson = await res.json();
			const data = [];

			for (let key in resJson) {
				data.push({
					id: key,
					name: resJson[key].name,
					description: resJson[key].description,
					price: resJson[key].price
				});
			}
			setMeals(data);
			setIsLoading(false);
		};
		fetchMeals();
	}, []);

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	const mealsData = meals.map((meal) => <MealsItem key={meal.id} meal={meal} />);
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsData}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
