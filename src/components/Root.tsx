import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

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
