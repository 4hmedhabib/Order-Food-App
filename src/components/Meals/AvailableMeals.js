import React, { useEffect, useState } from 'react';
import { useHttp } from '../../hooks';
import { Card } from '../UI/';
import classes from './AvailableMeals.module.css';
import MealsItem from './MealsItem/MealsItem';

const AvailableMeals = () => {
	const [ meals, setMeals ] = useState([]);

	const fetchMeals = async (resJson) => {
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
	};

	const { isLoading, hasError, func: sendRequest } = useHttp();

	useEffect(
		() => {
			sendRequest({ url: 'https://react-http-992d0-default-rtdb.firebaseio.com/meals.json' }, fetchMeals);
		},
		[ sendRequest ]
	);

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
