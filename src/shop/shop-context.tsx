import { createContext, useState,useReducer, ReactNode, ReactElement } from "react";
import Product from "../Models/Product";
import Mainheader from "../components/Mainheader";

interface shopContextType {
  products: Product[];
  mainHeader: ReactElement;
  eachItemCount: () => { item: Product; count: number }[];
  handleIncreaseItem: (prod:Product)=>void,
  handleDecreaseItem: (prod:Product)=>void,
  handeDeleteWholeItem:(prod:Product)=>void,
  sumTotalPrice: ()=>number
}
interface Props {
  children?: ReactNode;
}
export const ShopContext = createContext<shopContextType>({
  products: [],
  eachItemCount: () => [],
  handleIncreaseItem: (prod:Product)=>{},
  handleDecreaseItem: (prod:Product)=>{},
  handeDeleteWholeItem:(prod:Product)=>{},
  sumTotalPrice: ()=>{return 0},
  mainHeader: <Mainheader />,
});

function productsItemReducer(state: Product[], action: { type: string; payload: Product }) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'DELETE_PRODUCT':
      const index = state.findIndex(product => product === action.payload); 
      if (index !== -1) {
        const newState = [...state];
        newState.splice(index, 1); 
        return newState;
      }
      return state; 
    case 'DELETE_WHOLE_ITEM':
      return state.filter(product => product.id !== action.payload.id);
    // case 'SUM_PRICES':
    //  const totalPrice = state.reduce((sum, product) => sum + parseInt product.price, 0);
    //   return totalPrice;
    default:
      return state; 
  }
}

export default function ShopContextProvider({ children }: Props) {
  const [productsItems,productsItemDispatch] = useReducer(productsItemReducer,[]);

  function countEachItem(): { item: Product; count: number }[] {
    const itemCounts: { item: Product; count: number }[] = [];
    productsItems.forEach((item) => {
      const existingItem = itemCounts.find((obj) => obj.item === item);
      if (existingItem) {
        existingItem.count++;
      } else {
        itemCounts.push({ item, count: 1 });
      }
    });
    return itemCounts;
  }

  function totalPrice(){
    return productsItems.reduce((sum, product) => sum + parseInt(product.price), 0);
  }

  function increaseItem(prod: Product) {
    productsItemDispatch({
      type:'ADD_PRODUCT',
      payload:prod
    })
  }

  function decreaseItem(prod: Product) {
    productsItemDispatch({
      type:'DELETE_PRODUCT',
      payload:prod
    })
    }

    function deleteWholeItem(chosenProd:Product){
      productsItemDispatch({
        type:'DELETE_WHOLE_ITEM',
        payload:chosenProd
      })
    }

    const ctxValue = {
      products: productsItems,
      eachItemCount: countEachItem,
      handleIncreaseItem: increaseItem,
      handleDecreaseItem: decreaseItem,
      handeDeleteWholeItem: deleteWholeItem,
      sumTotalPrice: totalPrice,
      mainHeader: <Mainheader/>,
    };
  
    return (
      <ShopContext.Provider value={ctxValue}>{children}</ShopContext.Provider>
    );
  }

