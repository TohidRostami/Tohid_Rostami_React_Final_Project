import {Outlet } from "react-router-dom";
import Mainheader from "./Mainheader";

function RootLayout() {
  return (
    <>
      <Mainheader />
      <Outlet />
    </>
  );
}

export default RootLayout;
