import classes from "./Payment.module.css";
import Button from "../Button/Button";
import CardPayment from "./CardPayment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Paypal from "./Paypal";
import { useContext, useState } from "react";
import Swish from "./Swish";
import { CartContext } from "../data/CartContext";

const Payment = ({ order, onClose }) => {
	const [paypal, setPaypal] = useState(false);
	const [card, setCard] = useState(true);
	const [swish, setSwish] = useState(false);
	const {
		setPurchase,
		state: { cart },
		dispatch,
	} = useContext(CartContext);
	const handlePurchase = () => {
		setPurchase(true);
		onClose();
		setTimeout(() => setPurchase(false), 3000);
		dispatch({ type: "CHECKOUT" });
	};

	const initialOptions = {
		"client-id":
			"Af0QwfUqmL3hvX3fqHzuLmgosgdniaERFLA2x3buANKu1MNf78EnzhXGr5fHnbnrz6Hcd8HqAm0h3lWF",
		currency: "USD",
		intent: "capture",
	};
	return (
		<div className={classes.wrapper}>
			<div className={classes["options-buttons__wrapper"]}>
				<h2 className={classes.h2}>Payment</h2>
				<div className={`text-muted ${classes.subheading}`}>
					3 payment method available
				</div>
			</div>

			<div className={classes.orders}>
				<h3 className={classes["cart-details-titles__1"]}>Payment Method</h3>
				<div className={classes["button-header-container"]}>
					<Button
						text="Card"
						className="button__checkout_options"
						onClick={() => {
							setPaypal(false);
							setSwish(false);
							setCard(true);
						}}
					/>
					<Button
						text="Paypal"
						className="button__checkout_options"
						onClick={() => {
							setPaypal(true);
							setCard(false);
							setSwish(false);
						}}
					/>
					<Button
						text="Swish"
						className="button__checkout_options"
						onClick={() => {
							setPaypal(false);
							setCard(false);
							setSwish(true);
						}}
					/>
				</div>

				{card && <CardPayment />}
				{paypal && (
					<PayPalScriptProvider options={initialOptions}>
						<Paypal />
					</PayPalScriptProvider>
				)}
				{swish && <Swish />}
			</div>

			<div
				className={`${classes["order-bottom"]} ${classes["dining-options"]}`}
			>
				<div>
					<label>Order Type</label>
					<select>
						<option value={order}> {order}</option>
					</select>
				</div>
				<div>
					{order === "Dine In" && (
						<>
							<label style={{ marginRight: "20px" }}>Table no.</label>
							<input type="number" placeholder="table number" />
						</>
					)}
					{order === "To Go" && (
						<>
							{" "}
							<label>Choose Time</label>
							<input type="time" />
						</>
					)}
					{order === "Delivery" && (
						<>
							{" "}
							<label>Adress & Phone</label>
							<input type="text" placeholder="Enter Your Adress" />
						</>
					)}
				</div>
			</div>
			<div className={classes["bottom__wrapper"]}>
				<Button text="Cancel" className="button__secondary" onClick={onClose} />
				<Button
					text="Confirm Payment"
					className="button__main"
					onClick={handlePurchase}
				/>
			</div>
		</div>
	);
};

export default Payment;
