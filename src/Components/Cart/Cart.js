import React, { useContext, useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import { CartContext } from "../data/CartContext";
import CartItem from "./CartItem";
import classes from "./cart.module.css";
import Button from "../Button/Button";
import { FaRegWindowClose } from "react-icons/fa";
import Payment from "../Payment-page/Payment";
import { BackDrop } from "../Modal-Ui/Modal";
import Slide from "react-reveal/Slide";

const Cart = () => {
	const [checkout, setCheckout] = useState(false);
	const [orderType, setOrderType] = useState("");

	const checkoutHandler = () => {
		setCheckout(true);
	};
	const {
		state: { cart },
		dispatch,
		show,
		setShow,
	} = useContext(CartContext);
	const [total, setTotal] = useState(0);
	useEffect(() => {
		setTotal(cart.reduce((acc, curr) => acc + +(curr.price * curr.qty), 0));
	}, [cart]);
	const handleClose = () => {
		setShow(false);
		setCheckout(false);
		setSlide(true);
	};
	const [slide, setSlide] = useState(false);
	// const handleClose = () => setShow(false);

	//intially show is undefined so we don't apply any animations when we first render the page

	/* <div className={`${classes.wrapper} ${wrapperClasses}`}> */
	//

	const wrapperClasses =
		show === undefined ? "" : show ? classes.show : classes.hide;

	return (
		<>
			<Slide right when={show} collapse>
				<div className={!checkout ? classes.wrapper : classes.slide}>
					<FaRegWindowClose
						className={classes["close-icon"]}
						onClick={handleClose}
					/>
					<h2 className={classes.h2}>Order</h2>
					<div className={classes["options-buttons__wrapper"]}>
						<Button
							className="button__secondary_options"
							text="Dine In"
							onClick={() => setOrderType("Dine In")}
						/>
						<Button
							className="button__secondary_options"
							text="To Go"
							onClick={() => setOrderType("To Go")}
						/>
						<Button
							className="button__secondary_options"
							text="Delivery"
							onClick={() => setOrderType("Delivery")}
						/>
					</div>
					<div className={classes["cart-details-titles__wrapper"]}>
						<h3 className={classes["cart-details-titles__1"]}>Item</h3>
						<h3 className={classes["cart-details-titles__2"]}>Qty</h3>
						<h3 className={classes["cart-details-titles__3"]}>Price</h3>
					</div>
					<div className={classes.orders}>
						<Stack gap={3}>
							{cart.map((item) => (
								<CartItem key={item.id} {...item} dispatch={dispatch} />
							))}
						</Stack>
					</div>
					<div className={classes.bottom__wrapper}>
						<p className={classes.left}>Discount</p>
						<h2 className={classes.right}>$0.00</h2>
					</div>
					<div className={classes.bottom__wrapper}>
						<p className={classes.left}>Total</p>
						<h2 className={classes.right}>${total.toFixed(2)}</h2>
					</div>
					<Button
						text="Continue to payment"
						className="button__main"
						onClick={checkoutHandler}
					/>
				</div>
			</Slide>
			{checkout && (
				<>
					<BackDrop onClose={handleClose} />
					<Payment order={orderType} onClose={handleClose} />
				</>
			)}
		</>
	);
};

export default Cart;
