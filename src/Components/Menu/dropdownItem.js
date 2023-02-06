import React from "react";
import "./cartStyle.css";

const DropdownItem = ({ item }) => (
	<div className="cart-item">
		<img src={item.image} alt="item" />
		<div className="item-details">
			<span className="name">{item.title}</span>
			<span className="price">
				{" "}
				{item.price.toFixed(2)} * {item.qty} qty
			</span>
		</div>
	</div>
);

export default DropdownItem;
