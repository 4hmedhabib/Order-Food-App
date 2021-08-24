import React, { useContext, useState } from 'react';
import CartContext from '../../store/context-store';
import { Modal } from '../UI/';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
	const [ isCheckout, setIsCheckout ] = useState(false);

	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasInCart = cartCtx.items.length > 0;

	const removeItemHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const addItemHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const checkoutHandler = () => {
		setIsCheckout(true);
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					amount={item.amount}
					price={item.price}
					name={item.name}
					onRemove={removeItemHandler.bind(null, item.id)}
					onAdd={addItemHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={props.onClose}>
				Close
			</button>
			{hasInCart && (
				<button onClick={checkoutHandler} className={classes.button}>
					Order
				</button>
			)}
		</div>
	);

	return (
		<Modal onShowCart={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onCancel={props.onClose} />}
			{!isCheckout && modalActions}
		</Modal>
	);
};

export default Cart;
