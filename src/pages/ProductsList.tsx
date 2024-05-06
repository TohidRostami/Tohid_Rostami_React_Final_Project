import React, { useMemo } from "react";
import Product from "../Models/Product";
import ProductObject from "../components/Product";
import { useLoaderData } from "react-router-dom";

const ProductsList: React.FC<{}> = () => {
  const products = useLoaderData() as Product[];
  const memorizedProductObject= useMemo(()=><ProductObject productsItem={products} />,[products]);
  return memorizedProductObject;
};

export default React.memo(ProductsList);

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ messahe: "Could not fetch products!" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
