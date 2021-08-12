import React, { Fragment } from 'react';
import MealsInputForm from '../MealsInputForm';
import classes from './MealsItem.module.css';

const MealsItem = ({ meal }) => {
	const price = `$${meal.price.toFixed(2)}`;
	return (
		<Fragment>
			<li className={classes.meal}>
				<div>
					<div className={classes.name}>{meal.name}</div>
					<div className={classes.description}>{meal.description}</div>
					<div className={classes.price}>{price}</div>
				</div>
				<div>
					<MealsInputForm id={meal.id} />
				</div>
			</li>
		</Fragment>
	);
};

export default MealsItem;
