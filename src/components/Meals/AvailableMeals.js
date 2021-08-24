import React, { useEffect, useState } from 'react';
import { Card } from '../UI/';
import classes from './AvailableMeals.module.css';
import MealsItem from './MealsItem/MealsItem';

const AvailableMeals = () => {
	const [ meals, setMeals ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ hasError, setHasError ] = useState(null);

	useEffect(() => {
		const fetchMeals = async () => {
			const res = await fetch('https://react-http-992d0-default-rtdb.firebaseio.com/meals.json');

			if (!res.ok) {
				throw Error('Filed to fetch data. Something Wrong!');
			}

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
		fetchMeals().catch((err) => {
			setIsLoading(false);
			setHasError(err.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (hasError) {
		return (
			<section className={classes.MealsError}>
				<p>{hasError}</p>
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
