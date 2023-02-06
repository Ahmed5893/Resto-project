import classes from "./Payment.module.css";

const CardPayment = () => {
  return (
    <div className={classes["form-control"]}>
      <div>
        <label>Cardholder Name</label>
        <input type="text" placeholder="Levi Ackerman" />
      </div>
      <div>
        <label>Card Number</label>
        <input type="number" placeholder="2564 1421 0897 1244" />
      </div>
      <div className={classes['order-bottom']} >
        <div>
        <label className={classes.label}>Expiration Date</label>
        <input type="number" placeholder="02/2022" />
        </div>
        <div >
        <label >CVV</label>
        <input type="password" placeholder="123" />
        </div>
      </div>
     
    </div>
  );
};

export default CardPayment;
