import { useContext, useState } from "react";
import classes from "./menuContainer.module.css";
import { MenuContext } from "../data/MenuContext";
import MenuItem from "./MenuItem";
import { CartContext } from "../data/CartContext";
import CartMenu from "./CartMenu";

const MenuContainer = ({ onClick }) => {
	const [menu] = useContext(MenuContext);
	// const {
	//   state: { cart },
	//   state: { items },
	//   dispatch,
	// } = useContext(CartContext);

	return (
		<div className={classes["menu-wrapper"]}>
			<div className={classes.container}>
				<h2 className={classes.h2}>Choose Dishes</h2>
				<CartMenu className={classes.dropdown} />
			</div>
			<div className={classes["menu-items-wrapper"]}>
				{menu.map((item) => (
					<MenuItem
						onClick={() => onClick(item)}
						key={item.id}
						imgSrc={item.image}
						title={item.title}
						price={item.price}
						availability={item.availability}
					/>
				))}
			</div>
		</div>
	);
};

export default MenuContainer;
