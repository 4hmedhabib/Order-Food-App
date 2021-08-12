import React from 'react';
import { Input } from '../UI/';
import classes from './MealsInputForm.module.css';

const MealsInputForm = (props) => {
	return (
		<form className={classes.form}>
			<Input
				label="Amount"
				input={{
					id: 'amount__' + props.id,
					type: 'number',
					step: 1,
					min: 1,
					max: 5
				}}
			/>
			<button>+ Add</button>
		</form>
	);
};

export default MealsInputForm;
