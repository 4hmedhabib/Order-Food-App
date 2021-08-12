import React, { Fragment } from 'react';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onShowCart }) => {
	return (
		<Fragment>
			<button className={classes.button} onClick={onShowCart}>
				<span className={classes.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>3</span>
			</button>
		</Fragment>
	);
};

export default HeaderCartButton;
