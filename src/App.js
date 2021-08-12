import { useState } from 'react';
import { Header, Meals } from './components/';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
	const [ isShow, setIsShow ] = useState(false);

	const showCardHandler = () => {
		setIsShow(!isShow);
	};

	return (
		<CartProvider>
			{isShow && <Cart onShowCart={showCardHandler} />}
			<Header onShowCart={showCardHandler} />
			<Meals />
		</CartProvider>
	);
}

export default App;
