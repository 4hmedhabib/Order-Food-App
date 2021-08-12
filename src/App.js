import { Fragment } from 'react';
import { Header, Meals } from './components/';
import Cart from './components/Cart/Cart';

function App() {
	return (
		<Fragment>
			<Cart />
			<Header />
			<Meals />
		</Fragment>
	);
}

export default App;
