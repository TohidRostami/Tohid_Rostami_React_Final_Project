import React, { useEffect, useState } from "react";
import Product from "./Models/Product";
import ProductObject from "./Product";

const ProductsList: React.FC<{ onAddCart: (id: number) => void }> = (props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }
      const products = await response.json();
      // console.log(products);
      setProducts(products);
    }
    fetchProducts();
  }, []);
  // console.log(products);

  return (
    <>
      <div className="search">
        <div className="search-text-box">
          <div className="search-text">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="search" id="search" />
          </div>
        </div>
        <div className="category-search-box">
          <div className="category-search">
            <select name="category" id="category">
              <option className="category-option" disabled selected>
                Category
              </option>
            </select>
          </div>
        </div>
      </div>
      <ul>
        {!products.length ? (
          <p>loading</p>
        ) : (
          products.map((prod) => {
            return <ProductObject key={prod.title} item={prod} onAddCart={props.onAddCart}/>;
          })
        )}
      </ul>
    </>
  );
};

export default ProductsList;
