import { useReducer } from 'react';

const stateReducer = (state, action) => {
	if (action.type === 'INPUT') {
		return { value: action.value, isTouched: state.isTouched };
	}
	if (action.type === 'BLUR') {
		console.log('RUNNING BLUR Reducer');
		return { value: state.value, isTouched: true };
	}
	if (action.type === 'RESET') {
		return defaultState;
	}
	return defaultState;
};

const defaultState = {
	value: '',
	isTouched: false
};

const UserInput = (validateValue) => {
	const [ inputState, dispatch ] = useReducer(stateReducer, defaultState);

	const inputChangeHandler = (e) => {
		console.log('Running...', e.target.value);
		dispatch({ type: 'INPUT', value: e.target.value });
	};

	const inputBlurHandler = () => {
		dispatch({ type: 'BLUR' });
	};

	const reset = () => {
		dispatch({ type: 'RESET' });
	};

	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	console.log(hasError);

	return { value: inputState.value, inputChangeHandler, inputBlurHandler, reset, isValid: valueIsValid, hasError };
};

export default UserInput;
