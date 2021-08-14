import React, { Fragment, useContext } from 'react';
import CartContext from '../../../store/context-store';
import MealsInputForm from '../MealsInputForm';
import classes from './MealsItem.module.css';

const MealsItem = ({ meal }) => {
	const cartCtx = useContext(CartContext);
	const price = `$${meal.price.toFixed(2)}`;

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: meal.id,
			name: meal.name,
			amount: amount,
			price: meal.price
		});
	};

	return (
		<Fragment>
			<li className={classes.meal}>
				<div>
					<div className={classes.name}>{meal.name}</div>
					<div className={classes.description}>{meal.description}</div>
					<div className={classes.price}>{price}</div>
				</div>
				<div>
					<MealsInputForm onAddToCart={addToCartHandler} id={meal.id} />
				</div>
			</li>
		</Fragment>
	);
};

export default MealsItem;
