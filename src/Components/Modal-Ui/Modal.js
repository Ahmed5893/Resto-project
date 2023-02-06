import React, { useContext } from 'react'
import  ReactDOM  from 'react-dom'
import { CartContext } from '../data/CartContext'
import MenuItem from '../Menu/MenuItem'
import classes from './Modal.module.css'

 export const BackDrop=({onClose})=>{


  return (
    <div className={classes.backdrop} onClick={onClose}></div>
    )
}

function Overlay({item,onClose}) {
  const {state:{cart},dispatch}=useContext(CartContext)
  return (
    <div className={classes.modal}>
      {item.title}
      <div className={classes.image}>
        <img src={item.image} alt={item.title} />
      </div>
      <p className={classes.description}>{item.description}</p>
      <span className={classes.price}>$ {item.price}</span>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button
          className={classes.button}
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: item,
            });
            onClose();
          }}
          disabled={!item.availability}
        >
          {" "}
          {!item.availability ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

const Modal = ({ item, onClose }) => {
  const Portal = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={onClose} />, Portal)}
      {ReactDOM.createPortal(<Overlay item={item} onClose={onClose} />, Portal)}
    </>
  );
};

export default Modal;
