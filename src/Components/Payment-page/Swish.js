import classes from "./Payment.module.css";
import SwishGif from '../../assets/Swish.gif'

const Swish = () => {
  return (
    <div >
 <div className={classes['swish-container']} >
    <img src={SwishGif} alt='Swish gif' className={classes.swish} />
 </div>

    </div>
  )
}

export default Swish