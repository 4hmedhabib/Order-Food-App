import { useInput } from '../../hooks/';
import classes from './Checkout.module.css';

const Checkout = (props) => {
	const isEmpty = (value) => value.trim().length !== 0;
	const isFivechars = (value) => value.trim().length === 5;

	const {
		value: enteredName,
		isValid: nameIsValid,
		hasError: nameHasError,
		inputChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: nameReset
	} = useInput(isEmpty);

	const {
		value: enteredStreet,
		isValid: streetIsValid,
		hasError: streetHasError,
		inputChangeHandler: streetChangeHandler,
		inputBlurHandler: streetBlurHandler,
		reset: streetReset
	} = useInput(isEmpty);

	const {
		value: enteredPostalCode,
		isValid: postalCodeIsValid,
		hasError: postalCodeHasError,
		inputChangeHandler: postalCodeChangeHandler,
		inputBlurHandler: postalCodeBlurHandler,
		reset: postalCodeReset
	} = useInput(isFivechars);

	const {
		value: enteredCity,
		isValid: cityIsValid,
		hasError: cityHasError,
		inputChangeHandler: cityChangeHandler,
		inputBlurHandler: cityBlurHandler,
		reset: cityReset
	} = useInput(isEmpty);

	let formIsValid = false;

	if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
		formIsValid = true;
	}

	const confirmHandler = (event) => {
		event.preventDefault();

		if (cityHasError && streetHasError && postalCodeHasError && nameHasError) {
			return;
		}

		props.onConfirm({
			name: enteredName,
			street: enteredStreet,
			postalCode: enteredPostalCode,
			city: enteredCity
		});

		nameReset();
		streetReset();
		postalCodeReset();
		cityReset();
	};

	const nameControlClass = `${classes.control} ${nameHasError ? classes.invalid : ''}`;
	const streetControlClass = `${classes.control} ${streetHasError ? classes.invalid : ''}`;
	const postalCodeControlClass = `${classes.control} ${postalCodeHasError ? classes.invalid : ''}`;
	const cityControlClass = `${classes.control} ${cityHasError ? classes.invalid : ''}`;

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={nameControlClass}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					value={enteredName}
					onBlur={nameBlurHandler}
					onChange={nameChangeHandler}
				/>
				{nameHasError && <p>Please enter your Name!</p>}
			</div>
			<div className={streetControlClass}>
				<label htmlFor="street">Street</label>
				<input
					type="text"
					id="street"
					value={enteredStreet}
					onBlur={streetBlurHandler}
					onChange={streetChangeHandler}
				/>
				{streetHasError && <p>Please enter valid Street!</p>}
			</div>
			<div className={postalCodeControlClass}>
				<label htmlFor="postal">Postal Code</label>
				<input
					type="text"
					id="postal"
					value={enteredPostalCode}
					onBlur={postalCodeBlurHandler}
					onChange={postalCodeChangeHandler}
				/>
				{postalCodeHasError && <p>Please enter valid Postal Code (at least 5 chars)!</p>}
			</div>
			<div className={cityControlClass}>
				<label htmlFor="city">City</label>
				<input
					type="text"
					id="city"
					value={enteredCity}
					onBlur={cityBlurHandler}
					onChange={cityChangeHandler}
				/>
				{cityHasError && <p>Please enter your valid city!</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>

				<button disabled={!formIsValid} className={formIsValid ? classes.submit : ''}>
					Confirm
				</button>
			</div>
		</form>
	);
};

export default Checkout;
