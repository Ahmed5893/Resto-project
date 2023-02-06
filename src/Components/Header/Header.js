import classes from "./Header.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import Navbar from "./Navbar";
import { MenuContext } from "../data/MenuContext";
import { useState, useContext } from "react";
import Data from "../data/Data";
import searchIcon from "../data/assets/search-icon.png";

const Header = () => {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useContext(MenuContext);
  const [data, setData] = useState(Data);
  const d = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = d.toLocaleDateString("se-SE", options);

  const handleSearch = (e) => {
    e.preventDefault();

    if (search) {
      setMenu(
        data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    setSearch("");
  };

  return (
    <div className={classes.header}>
      <div className={classes["title-el"]}>
        <div className={classes.title}>
          Jaegar Resto
          <span className={classes.date}>
            {days[d.getDay()]}, {date}
          </span>
        </div>

        <form className={classes.form} onSubmit={handleSearch}>
          <img
            src={searchIcon}
            className={classes.icon}
            onClick={handleSearch}
          />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for food, coffee, etc.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <Navbar />
      {!menu.length && (
        <h1 className={classes["no-result"]}>No Results Found</h1>
      )}
    </div>
  );
};

export default Header;
