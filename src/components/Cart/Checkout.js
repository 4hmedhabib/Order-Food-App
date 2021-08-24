import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalCodeInputRef = useRef();
	const cityInputRef = useRef();

	const [ formInputsValidity, setFormInputsValidity ] = useState({
		name: true,
		street: true,
		city: true,
		postalCode: true
	});

	const isEmpty = (value) => value.trim().length === 0;
	const isNotFivechars = (value) => value.trim().length === 5;

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredPostalCode = postalCodeInputRef.current.value;
		const enteredCity = cityInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredCityIsValid = !isEmpty(enteredCity);
		const enteredPostalCodeIsValid = isNotFivechars(enteredPostalCode);

		const formIsValid =
			enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid;

		setFormInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			postalCode: enteredPostalCodeIsValid,
			city: enteredCityIsValid
		});

		console.log(formInputsValidity);

		if (!formIsValid) {
			return;
		}

		props.onConfirm({
			name: enteredCity,
			street: enteredStreet,
			postalCode: enteredPostalCode,
			city: enteredCity
		});
	};

	const nameControlClass = `${classes.control} ${!formInputsValidity.name ? classes.invalid : ''}`;
	const streetControlClass = `${classes.control} ${!formInputsValidity.street ? classes.invalid : ''}`;
	const postalCodeControlClass = `${classes.control} ${!formInputsValidity.postalCode ? classes.invalid : ''}`;
	const cityControlClass = `${classes.control} ${!formInputsValidity.city ? classes.invalid : ''}`;

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={nameControlClass}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formInputsValidity.name && <p>Please enter your Name!</p>}
			</div>
			<div className={streetControlClass}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
				{!formInputsValidity.street && <p>Please enter valid Street!</p>}
			</div>
			<div className={postalCodeControlClass}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalCodeInputRef} />
				{!formInputsValidity.postalCode && <p>Please enter valid Postal Code (at least 5 chars)!</p>}
			</div>
			<div className={cityControlClass}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formInputsValidity.city && <p>Please enter your valid city!</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
