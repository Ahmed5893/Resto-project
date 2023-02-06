import React, { useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./menuContainer.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge, Button } from "react-bootstrap";
import { CartContext } from "../data/CartContext";
import DropdownItem from "./dropdownItem";
import { redirect } from "react-router";
// import Button from "../Button/Button";

const CartMenu = () => {
	const {
		state: { cart },
		dispatch,
		setShow,
	} = useContext(CartContext);

	const handleShow = () => setShow(true);

	return (
		<Dropdown className="d-inline mx-2 my-3 dropdown">
			<Dropdown.Toggle id="dropdown-autoclose-true" variant="secondary">
				<AiOutlineShoppingCart />
				<Badge bg="secondary">{cart.length}</Badge>
			</Dropdown.Toggle>
			<Dropdown.Menu
				style={{
					minWidth: 100,
					textAlign: "center",
					backgroundColor: "#393c49",
					maxHeight: "400px",
					overflowY: "scroll",
					overflowX: "hidden",
				}}
				className="dropdown-menu"
			>
				{cart.length > 0 ? (
					<>
						{cart.map((item) => (
							<DropdownItem key={item.id} item={item} variant="secondary" />
						))}
						<Dropdown.Item style={{ backgroundColor: "#393c49" }}>
							<Button
								style={{
									width: "95%",
									marginTop: "10px",
									fontFamily: "Barlow-SemiBold",
									// marginBottom: "-15px",
									backgroundColor: "#ea7c69",
									borderColor: "#ea7c69",
								}}
								onClick={handleShow}
								id="dropdown-button"
							>
								Go To Cart
							</Button>
						</Dropdown.Item>
					</>
				) : (
					<span
						style={{
							padding: 10,
							color: "#fafafa",
							fontSize: "12px",
							fontFamily: "Barlow-Regular",
						}}
					>
						Cart Is Empty
					</span>
				)}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default CartMenu;
