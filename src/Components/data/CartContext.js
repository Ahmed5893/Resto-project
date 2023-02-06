import {
	useState,
	createContext,
	useReducer,
	useContext,
	useEffect,
} from "react";
import { MenuContext } from "./MenuContext";
import Data from "./Data";
export const CartContext = createContext();

export const CartProvider = (props) => {
	const [show, setShow] = useState(false);

	const cartReducer = (state, action) => {
		switch (action.type) {
			case "ADD_TO_CART":
				const exist = state.cart.find((x) => x.id === action.payload.id);

				if (exist) {
					return {
						...state,
						cart: state.cart.map((item) =>
							item.id === action.payload.id
								? { ...exist, qty: exist.qty + 1 }
								: item
						),
					};
				}

				return {
					...state,
					cart: [...state.cart, { ...action.payload, qty: 1 }],
				};

			case "REMOVE_FROM_CART":
				return {
					...state,
					cart: state.cart.filter((item) => item.id !== action.payload.id),
				};

			case "CHANGE_CART_QTY":
				return {
					...state,
					cart: state.cart.filter((item) =>
						item.id === action.payload.id
							? (item.qty = action.payload.qty)
							: item.qty
					),
				};

			case "CHECKOUT":
				return {
					...state,
					cart: [],
				};
			default:
				return state;
		}
	};
	const localData = localStorage.getItem("items");
	const [state, dispatch] = useReducer(cartReducer, {
		cart: localData ? JSON.parse(localData) : [],
		items: Data,
	});
	const [purchase, setPurchase] = useState(false);

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(state.cart));
	}, [state.cart]);
	return (
		<CartContext.Provider
			value={{ state, dispatch, show, setShow, purchase, setPurchase }}
		>
			{props.children}
		</CartContext.Provider>
	);
};
