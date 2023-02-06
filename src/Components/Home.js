import React, { useContext, useState } from "react";
import Cart from "./Cart/Cart";
import { CartContext } from "./data/CartContext";
import { MenuProvider } from "./data/MenuContext";
import Header from "./Header/Header";
import MenuContainer from "./Menu/MenuContainer";
import Modal from "./Modal-Ui/Modal";
import PurchaseAlert from "./Payment-page/PurchaseAlert";

const Home = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [item,setItem] = useState();
	const {purchase}=useContext(CartContext);
	const showModal=(item)=>{
setItem(item)
		setModalIsOpen(true);
		}
const closeModal=()=>{

setModalIsOpen(false);


}

	return (
		<MenuProvider>
			 {purchase && <PurchaseAlert />}
			<Header />
			<MenuContainer onClick={showModal} />
			{modalIsOpen && <Modal item={item} onClose={closeModal}/>}
			 <Cart/> 
		</MenuProvider>
	);
};

export default Home;
