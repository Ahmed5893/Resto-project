import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import classes from "./Payment.module.css";

const Paypal = () => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const onCreateOrder = (data,actions) => {
        return actions.order.create({
            purchase_units: [
                {title: "Spicy seasoned seafood noodles",
                    amount: {
                        value: "2.29",
                    },
                },
            ],
        });
    };
    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }
  return (
    <div className={classes.paypal}> {isPending ? <p>LOADING...</p> : (
        <>
           
            <PayPalButtons className={classes.buttons}
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => onCreateOrder(data, actions)}
                onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
        </>
    )}</div>
  )
}

export default Paypal