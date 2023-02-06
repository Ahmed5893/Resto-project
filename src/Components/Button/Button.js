import classes from "./button.module.css";

const Button = (props) => {
	return (
		<div className={classes.buttonContainer}>
			<button
				onClick={props.onClick}
				className={`${classes.button} ${props.className}`}
			>
				{props.text}
			</button>
		</div>
	);
};

export default Button;