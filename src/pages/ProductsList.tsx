import ProductObject from "../components/Product";
import { useLoaderData } from "react-router-dom";

const ProductsList: React.FC<{}> = () => {
  const products = useLoaderData();

  // console.log(products);

  // const productsCategory = () => {
  //   let arr: string[] = [];
  //   products.map((prod) => {
  //     arr.push(prod.category);
  //   });
  //   return arr.filter((value, index) => arr.indexOf(value) === index);
  // };

  return <ProductObject products={products} />;
};

export default ProductsList;

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
