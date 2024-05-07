import { Link } from "react-router-dom";
import logo from "../assets/images/825.jpg";
import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const Mainheader: React.FC<{}> = () => {
  const { products } = useContext(ShopContext);

  return (
    <header className="flex justify-between min-h-16 bg-zinc-300">
      <div className="flex w-1/3 content-center items-center">
        <div className="m-0 p-0 ml-6">
          <img className="h-10 rounded-full" src={logo} alt="profile-picture" />
        </div>
        <div className="user-profile-name ml-1">
          <Link to="/userDetails" className="hover:text-slate-200">
            Hi, James
          </Link>
        </div>
      </div>

      <div className="flex w-1/3 content-center items-center justify-center text-center">
        <p className=" bg-white w-4/5">LOGO</p>
      </div>

      <div className="flex w-1/3 justify-end items-center ">
        <div className="mr-6">
          <Link to="/cartItems" className="mr-1 hover:text-slate-200">
            Cart
          </Link>
          <span
            id="numberOfProducts"
            className="bg-red-500 rounded-full px-2 py-0.5"
          >
            {products.length}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Mainheader;
