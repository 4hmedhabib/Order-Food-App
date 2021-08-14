import React, { useContext } from 'react';
import CartContext from '../../store/context-store';
import { Modal } from '../UI/';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onShowCart }) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasInCart = cartCtx.items.length > 0;

	const removeItemHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const addItemHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					amount={item.amount}
					price={item.price}
					name={item.price}
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
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onShowCart}>
					Close
				</button>
				{hasInCart && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
