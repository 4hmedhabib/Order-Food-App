import React, { Fragment, useContext } from 'react';
import CartContext from '../../../store/context-store';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onShowCart }) => {
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	return (
		<Fragment>
			<button className={classes.button} onClick={onShowCart}>
				<span className={classes.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>{numberOfCartItems}</span>
			</button>
		</Fragment>
	);
};

export default HeaderCartButton;
