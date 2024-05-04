import { Link } from "react-router-dom";
import logo from "../images/825.jpg";
import React, { useContext, useState } from "react";
import { ShopContext } from "../shop/shop-context";
import Product from "../Models/Product";

const Mainheader: React.FC<{ products: Product[] }> = (props) => {
  // const { products } = useContext(ShopContext);
  console.log(props.products);
  const[x, setX] = useState(props.products);

  return (
    <header>
      <div className="user-profile">
        <div className="user-profile-picture">
          {/* <img src={logo} alt="profile-picture" /> */}
        </div>
        <div className="user-profile-name">
          <Link to="/userDetails">Hi, James</Link>
        </div>
      </div>
      <div className="logo">
        <p>LOGO</p>
      </div>
      <div className="products-basket">
        <div className="products-basket-disc">
          <Link to="/cartItems">Cart{x.length}</Link>
          <span id="numberOfProducts">{props.products.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Mainheader;
