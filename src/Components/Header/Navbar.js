import React, { useState, useContext } from "react";
import classes from "./Navbar.module.css";
import { MenuContext } from "../data/MenuContext";
import Data from "../data/Data";

const Navbar = () => {
	const [menu, setMenu] = useContext(MenuContext);
	const [data] = useState(Data);

  const allCategories = ["All", ...new Set(data.map((item) => item.category))];

  const menuFilterHandler = (category) => {
    if (category === "All") {
      setMenu(data);
      return;
    }
    const newItem = data.filter((newVal) => {
      return newVal.category === category;
    });
    setMenu(newItem);
  };
  return (
    <nav className={classes.navbar}>
      <ul className={classes.options}>
        {allCategories.map((category, index) => (
          <li key={index} onClick={() => menuFilterHandler(category)}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};



export default Navbar;
