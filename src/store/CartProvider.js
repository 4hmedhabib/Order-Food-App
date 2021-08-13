import React from 'react';
import CartContext from './context-store';

const CartProvider = (props) => {
	const addItemHandler = (item) => {};

	const removeItemHandler = (id) => {};

	const cartContext = {
		items: [
			{
				id: 'm1',
				name: 'Sushi',
				description: 'Finest fish and veggies',
				price: 22.99,
				amount: 1
			}
		],
		totalAmount: 0,
		addItem: addItemHandler,
		removeItem: removeItemHandler
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
