import Home from "./Components/Home";
import { CartProvider } from "./Components/data/CartContext";
import Cart from "./Components/Cart/Cart";

function App() {
	return (
		<CartProvider>
			<Home />
			<Cart />
		</CartProvider>
	);
}

export default App;
