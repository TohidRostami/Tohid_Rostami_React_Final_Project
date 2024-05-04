import React, { useContext, useState } from "react";
import { ShopContext } from "../shop/shop-context";
import Product from "../Models/Product";

const CartItems: React.FC<{}> = () => {
  const { products, eachItemCount } = useContext(ShopContext);

  const [itemsWithCound, setItemsWithCound] = useState(eachItemCount);

  function handleIncreaseItem(prod: Product) {
    products.push(prod);
  }
  function handleDecreaseItem(prod: Product) {
    const index = products.indexOf(prod);
    if (index !== -1) {
      products.splice(index, 1);
    }
  }

  function deleteWholeItem(chosenProd:Product){
    products.forEach((prod)=>{
      if(prod.id===chosenProd.id){
        // products.
      }
    })
  }

  return (
    <>
      <h1>itemsssss</h1>
      {itemsWithCound.map((prod) => {
        return (
          <h1 key={Date.now.length}>
            {prod.item.title}
            {prod.count}
            <br />
          </h1>
        );
      })}
      {products.length}
    </>
  );
};

export default CartItems;
