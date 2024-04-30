import { createContext, useState, ReactNode } from "react";
import Product from "../Models/Product";
interface shopContextType {
  products: Product[];
}
interface Props {
  children?: ReactNode;
}
export const ShopContext = createContext<shopContextType>({
  products: [],
});

export default function ShopContextProvider({ children }: Props) {
  const [productsItem, setProducts] = useState<Product[]>([]);

  const ctxValue = {
    products: productsItem,
  };

  return (
    <ShopContext.Provider value={ctxValue}>{children}</ShopContext.Provider>
  );
}
