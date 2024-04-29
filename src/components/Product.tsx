import React from "react";
import Product from "./Models/Product";

const ProductObject: React.FC<{ item: Product,onAddCart:(id:number)=>void }> = (props) => {
  return (
    <div className="cart col-md-4">
      <div className="cart-picture">
        <img src={props.item.image} alt="product-picture" />
      </div>
      <div className="cart-decs-body">
        <div className="cart-desc">
          <h3>{props.item.title}</h3>
          <p>{props.item.description}</p>
          <p id="product-category">{props.item.category}</p>
        </div>
        <div className="cart-pricing">
          <div className="cart-parice">price {props.item.price}$</div>
          <div className="add-product">
            <button type="button" id="button" onClick={()=>props.onAddCart(props.item.id)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductObject;
