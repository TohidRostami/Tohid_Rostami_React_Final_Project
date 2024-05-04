import { createContext, useState, ReactNode, ReactElement } from "react";
import Product from "../Models/Product";
import Mainheader from "../components/Mainheader";

interface shopContextType {
  products: Product[];
  mainHeader: ReactElement;
  eachItemCount: () => { item: Product; count: number }[];
}
interface Props {
  children?: ReactNode;
}
export const ShopContext = createContext<shopContextType>({
  products: [],
  eachItemCount: () => [],
  mainHeader: <Mainheader products={[]} />,
});

export default function ShopContextProvider({ children }: Props) {
  const [productsItem, setProducts] = useState<Product[]>([]);

  function countEachItem(): { item: Product; count: number }[] {
    const itemCounts: { item: Product; count: number }[] = [];
    productsItem.forEach((item) => {
      const existingItem = itemCounts.find((obj) => obj.item === item);
      if (existingItem) {
        existingItem.count++;
      } else {
        itemCounts.push({ item, count: 1 });
      }
    });
    return itemCounts;
  }

  const ctxValue = {
    products: productsItem,
    eachItemCount: countEachItem,
    mainHeader: <Mainheader products={productsItem} />,
  };

  return (
    <ShopContext.Provider value={ctxValue}>{children}</ShopContext.Provider>
  );
}
