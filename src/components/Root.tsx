import { Link, Outlet } from "react-router-dom";
import Mainheader from "./Mainheader";
import ProductsList from "../pages/ProductsList";

function RootLayout() {
  return (
    <>
      <Mainheader />
      <Outlet />
    </>
  );
}

export default RootLayout;
