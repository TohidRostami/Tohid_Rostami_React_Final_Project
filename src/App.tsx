import { useState } from "react";
import "./App.css";
import Mainheader from "./components/Mainheader";
import ProductsList from "./components/ProductsList";
import CartItems from "./components/Models/CartItems";
function App() {
  const [cart, setCart] = useState<CartItems[]>([]);

  const onAddCart = (id: number) => {
    const existingItem = cart.find((cart) => cart.id === id);
    if (!existingItem) {
      cart.push({ id, quantity: 1 });
    } else {
      existingItem.quantity++;
    }
    console.log(cart);
  };
  
  return (
    <div className="App">
      <Mainheader />
      <ProductsList onAddCart={onAddCart} />
    </div>
  );
}

export default App;
