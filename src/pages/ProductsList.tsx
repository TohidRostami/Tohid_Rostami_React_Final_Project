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
  const apiUrl = "https://fakestoreapi.com/products";
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch products!" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
