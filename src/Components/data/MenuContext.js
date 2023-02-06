import seafoodNoodles from "./assets/seafood-noodles.png";
import mushroomNoodles from "./assets/mushroom-pasta.png";
import beefDumpling from "./assets/beef-dumpling.png";
import healthyNoodle from "./assets/healthy-peanut-noodle.png";
import omeletteRice from "./assets/fried-rice-omelette.png";
import spicyNoodle from "./assets/spicy-noodle-omelette.png";
import chickenNoodle from "./assets/spicy-chicken-noodle.png";
import shrimpSoup from "./assets/shrimp-soup.png";
import { useState, createContext } from "react";
import data from "./Data";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
  const [menu, setMenu] = useState(data);

  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {props.children}
    </MenuContext.Provider>
  );
};
