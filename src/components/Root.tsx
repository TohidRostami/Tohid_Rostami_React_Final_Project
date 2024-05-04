import { Outlet } from "react-router-dom";
// import Mainheader from "./Mainheader";
import { useContext } from "react";
import { ShopContext } from "../shop/shop-context";

function RootLayout() {
  const { mainHeader } = useContext(ShopContext);
  return (
    <>
      {mainHeader}
      <Outlet />
    </>
  );
}

export default RootLayout;
