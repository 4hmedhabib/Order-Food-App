import React, { useContext } from 'react';
import CartContext from '../../store/context-store';
import { Modal } from '../UI/';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onShowCart }) => {
	const cartCtx = useContext(CartContext);

	const removeItemHandler = (id) => {};
	const addItemHandler = (item) => {};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					onRemove={removeItemHandler.bind(null, item.id)}
					onAdd={addItemHandler.bind(null, item)}
				/>
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
