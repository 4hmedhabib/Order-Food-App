import React, { Fragment, useContext, useState, useEffect } from 'react';
import CartContext from '../../../store/context-store';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onShowCart }) => {
	const cartCtx = useContext(CartContext);
	const [ isHighlited, setIsHighlited ] = useState(false);

	const { items } = cartCtx;

	const numberOfCartItems = items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClass = `${classes.button} ${isHighlited ? classes.bump : ''}`;

	useEffect(
		() => {
			if (items.length === 0) {
				return;
			}
			setIsHighlited(true);
			const timer = setTimeout(() => {
				setIsHighlited(false);
			}, 100);

			return () => {
				clearTimeout(timer);
			};
		},
		[ items ]
	);

	return (
		<Fragment>
			<button className={btnClass} onClick={onShowCart}>
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
