import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProductsList, { loader as productsLoader } from "./pages/ProductsList";
import CartItems from "./components/CartItems";
import RootLayout from "./components/Root";
import UserDetail, { loader as userLoader } from "./pages/UserDetail";
import ErrorPage from "./components/Errors/ErrorPage";
import ShopContextProvider from "./shop/shop-context";

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
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
