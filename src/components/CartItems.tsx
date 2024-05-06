import React, { useContext, useState } from "react";
import { ShopContext } from "../shop/shop-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="flex flex-col justify-center mt-10">
        <div className="flex justify-around items-center h-12 bg-gray-400 border-black border-2">
          <p>number</p>
          <p>Title</p>
          <p>description</p>
          <p>Quantity</p>
          <p>price</p>
          <p>Total Price</p>
        </div>

        {!products.length ? (
          <div className="text-center mt-10">
            <h1 className="text-2xl font-bold">No products selected!</h1>
          </div>
        ) : (
          eachItemCount().map((prod) => {
            return (
              <div
                className="grid grid-cols-6 gap-7 items-center h-12 border-b-2 border-x-2 border-black w-full"
                key={prod.item.id}
              >
                <div className="text-center">
                  <p>
                    {eachItemCount().findIndex(
                      (obj) => obj.item.id === prod.item.id
                    ) + 1}
                  </p>
                </div>
                <p className="truncate ">{prod.item.title}</p>
                <p className="truncate">{prod.item.description}</p>

                <div className="flex justify-center items-center text-center">
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    onClick={() => handleDecreaseItem(prod.item)}
                    className="text-red-500 hover:cursor-pointer hover:text-red-900"
                  />
                  <p className="mx-2">{prod.count}</p>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    onClick={() => handleIncreaseItem(prod.item)}
                    className="text-blue-500 hover:cursor-pointer hover:text-blue-900"
                  />
                </div>

                <div className="text-center">{prod.item.price}$</div>

                <div className="flex text-center justify-center ">
                  {parseInt(prod.item.price) * prod.count}$
                  <div className="ml-2 bg-red-500 rounded-full px-1.5 py-0.5 text-sm text-white hover:cursor-pointer hover:bg-red-900">
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      onClick={() => handeDeleteWholeItem(prod.item)}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}

        <div>
          {products.length ? (
            <div className="flex justify-between items-center px-20 h-12 border-b-2 border-x-2 border-black w-full">
              <p>Total</p>
              <p>{sumTotalPrice()} $</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default CartItems;
