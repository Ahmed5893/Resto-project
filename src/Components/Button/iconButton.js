import classes from "./icon-button.module.css";

const ButtonIcon = (props) => {
	return (
		<div className={`${classes.iconbutton__wrapper} ${props.className}`}>
			<img className={classes.icon} src={props.iconSrc} alt={props.iconAlt} />
		</div>
	);
};

export default ButtonIcon;
