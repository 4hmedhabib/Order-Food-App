import React from 'react';
import { Modal } from '../UI/';
import classes from './Cart.module.css';

const Cart = ({ onShowCart }) => {
	const cartItems = (
		<ul className={classes['cart-items']}>
			{[ { id: 'c1', name: 'Canjeero Xabashi', price: 1.5, description: 'Delicious Food' } ].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
		<Modal onShowCart={onShowCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onShowCart}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
