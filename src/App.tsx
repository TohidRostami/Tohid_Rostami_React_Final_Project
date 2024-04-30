import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProductsList, { loader as productsLoader } from "./pages/ProductsList";
import CartItems from "./components/CartItems";
import RootLayout from "./components/Root";
import UserDetail, { loader as userLoader } from "./pages/UserDetail";
import ErrorPage from "./components/Errors/ErrorPage";
import Product from "./Models/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsList />,
        loader: productsLoader,
      },
      { path: "/cartItems", element: <CartItems /> },
      { path: "/userDetails", element: <UserDetail />, loader: userLoader },
    ],
  },
]);

function App() {
  // const [cart, setCart] = useState<CartItems[]>([]);
  // const onAddCart = (id: number) => {
  //   const existingItem = cart.find((cart) => cart.id === id);
  //   if (!existingItem) {
  //     cart.push({ id, quantity: 1 });
  //   } else {
  //     existingItem.quantity++;
  //   }
  //   console.log(cart);
  // };

  return (
    // <div className="App">
    //   <Mainheader />
    //   <ProductsList onAddCart={onAddCart} />
    // </div>

    <RouterProvider router={router} />
  );
}

export default App;
