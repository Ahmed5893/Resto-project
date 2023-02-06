import classes from "./menuItem.module.css";

const MenuItem = (props) => {
	return (
		<div className={classes["item-container"]} onClick={props.onClick}>
			<img
				className={classes["food-icon"]}
				src={props.imgSrc}
				alt={props.description}
			/>
			<div className={classes["text-wrapper"]}>
				<p className={classes["food-title"]}>{props.title}</p>
				<div className={classes["food-price-availability-wrapper"]}>
					<p className={classes["food-price"]}>$ {props.price}</p>
					{/* <p className={classes["food-availability"]}>
						{!props.availability
							? "Out of Stock"
							: `${props.availability} bowls available`}
					</p> */}
				</div>
			</div>
		</div>
	);
};
export default MenuItem;
