import React, { useContext } from "react";
import { Stack } from "react-bootstrap";
import { CartContext } from "../data/CartContext";
import classes from "./cart.module.css";
import { CgTrashEmpty } from "react-icons/cg";
const CartItem = ({ image, title, price, qty, id }) => {
	const { dispatch } = useContext(CartContext);

	return (
		<>
			<Stack direction="vertical" gap={2}>
				<div className={classes.header}>
					<img
						src={image}
						alt={title}
						style={{
							width: "30px",
							height: "30px",
							borderRadius: "30px",
							// perspective: "1000px",
							// marginLeft: "-1rem",
						}}
					/>

					<div className={classes["title-qty-stack"]}>
						<span className={classes.title}>{title}</span>
						<span className={classes.qty}></span>

						<div className={`text-muted ${classes["single-item-price"]}`}>
							${price.toFixed(2)}{" "}
						</div>
					</div>
					<input
						type="number"
						as="select"
						className={classes["qty-input"]}
						min={1}
						max={5}
						value={qty}
						onChange={(e) =>
							dispatch({
								type: "CHANGE_CART_QTY",
								payload: {
									id: id,
									qty: e.target.value,
								},
							})
						}
					/>
					<div className={classes["single-item-total"]}>
						${+(price * qty).toFixed(2)}{" "}
					</div>
				</div>
			</Stack>
			<Stack>
				<div className={classes.el}>
					<div
						className={classes["delete-icon"]}
						onClick={() =>
							dispatch({
								type: "REMOVE_FROM_CART",
								payload: {
									id: id,
								},
							})
						}
					>
						<CgTrashEmpty />
					</div>
					<input type="text" placeholder="Order Note..." />
				</div>
			</Stack>
		</>
	);
};

export default CartItem;
