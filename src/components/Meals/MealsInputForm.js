import React, { useRef, useState } from 'react';
import { Input } from '../UI/';
import classes from './MealsInputForm.module.css';

const MealsInputForm = (props) => {
	const [ amountIsValid, setAmountIsValid ] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (e) => {
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;
		console.log(enteredAmount, '==', enteredAmountNumber);

		e.preventDefault();

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			console.log('Running Error');
			setAmountIsValid(false);
			return;
		}
		console.log('Running Success');
		props.onAddToCart(enteredAmountNumber);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: 'amount__' + props.id,
					type: 'number',
					min: 1,
					max: 5,
					step: 1,
					defaultValue: '1'
				}}
			/>
			<button type="submit">+ Add</button>
			{!amountIsValid && <p className="text-danger">Please Enter Valid Amount 1 - 5.</p>}
		</form>
	);
};

export default MealsInputForm;
