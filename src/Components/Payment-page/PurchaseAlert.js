import Alert from 'react-bootstrap/Alert';
import classes from "./Payment.module.css";

const PurchaseAlert = () => {
  return (
<Alert variant="success" className={classes.alert}>
      <Alert.Heading> Thank For Your Purchase</Alert.Heading>
      <p>
      We’ve received your order,  We’ll send you an email when it ships.
      </p>
      <hr />
      <p className="mb-0">
      Enjoy 10% off your next purchase with this coupon code: <strong>THANKYOU10</strong>
      </p>
    </Alert>  )
}

export default PurchaseAlert