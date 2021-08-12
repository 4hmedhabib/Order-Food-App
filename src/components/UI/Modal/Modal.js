import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Modal = (props) => {
	const BackDrop = ({ onShowCart }) => {
		return <div className={classes.backdrop} onClick={onShowCart} />;
	};

	const ModalOverlay = (props) => {
		return (
			<div className={classes.modal}>
				<div className={classes.content}>{props.children}</div>
			</div>
		);
	};
	return (
		<Fragment>
			{ReactDOM.createPortal(<BackDrop onShowCart={props.onShowCart} />, document.getElementById('overlays'))}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
		</Fragment>
	);
};

export default Modal;
