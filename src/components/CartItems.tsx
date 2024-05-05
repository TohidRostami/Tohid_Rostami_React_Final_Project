import React, { useContext, useState } from "react";
import { ShopContext } from "../shop/shop-context";

const CartItems: React.FC<{}> = () => {
  const {
    products,
    eachItemCount,
    handleIncreaseItem,
    handleDecreaseItem,
    handeDeleteWholeItem,
    sumTotalPrice,
  } = useContext(ShopContext);

  return (
    <>
      {!products.length ? (
        <h1>No products selected</h1>
      ) : (
        eachItemCount().map((prod) => {
          return (
            <div key={prod.item.id}>
              <h1>{prod.item.title}</h1>
              <img src={prod.item.image} alt="product-picture" />
              <button onClick={() => handleIncreaseItem(prod.item)}>
                Increase
              </button>
              <button onClick={() => handleDecreaseItem(prod.item)}>
                Decrease
              </button>
              <button onClick={() => handeDeleteWholeItem(prod.item)}>
                Delete whole item
              </button>
            </div>
          );
        })
      )}
      <h1>Total Price: {sumTotalPrice()}$</h1>
      {products.length}
      {console.log(products)}
      {console.log(eachItemCount())}
      {console.log("Total Price:", sumTotalPrice())}
    </>
  );
};

export default CartItems;
