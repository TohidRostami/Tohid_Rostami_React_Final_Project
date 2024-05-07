import { useContext, useState, useMemo, useCallback } from "react";
import Product from "../Models/Product";
import { ShopContext } from "../context/shop-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ProductObject: React.FC<{ productsItem: Product[] }> = (props) => {
  const { handleIncreaseItem } = useContext(ShopContext);

  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [searchQuery, setSearchQuery] = useState<string>();

  const categories = useMemo(() => {
    let arr: string[] = [];
    props.productsItem.forEach((product) => {
      arr.push(product.category);
    });
    return arr.filter((value, index) => arr.indexOf(value) === index);
  }, [props.productsItem]);

  const handleSelectCategory = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      let cat = event.target.value;
      setSelectedCategory(cat);
    },
    []
  );

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    []
  );

  return (
    <>
      <div className="flex flex-row h-16 items-center my-4">
        <div className="w-1/3 h-full content-center ml-6">
          <div className=" flex w-4/5 relative items-center text-gray-500 focus-within:text-gray-600">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-3 h-3 absolute ml-2 pointer-events-none"
            />
            <input
              type="text"
              name="search"
              id="search"
              className="pl-6 py-0.5 ring-2 ring-gray-400 rounded-full w-full"
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <div className="w-1/3 h-full content-center ">
          <div>
            <select
              name="category"
              id="category"
              className="border-gray-400 border-b-2 pb-1 w-4/5"
              onChange={handleSelectCategory}
            >
              <option disabled selected>
                Category
              </option>
              {categories.map((cat) => {
                return <option key={cat}>{cat}</option>;
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 mx-9 mb-10">
        {props.productsItem.map((prod) => {
          if (selectedCategory === undefined && searchQuery === undefined) {
            return (
              <div key={prod.title}>
                <div className="h-52">
                  <img
                    src={prod.image}
                    alt="product-picture"
                    className="h-full w-full"
                  />
                </div>
                <div className="shadow-md rounded-sm pb-4">
                  <div className="mt-6 mx-4">
                    <h3 className="font-bold mb-2 truncate">{prod.title}</h3>
                    <p className="text-xs	truncate mb-2">{prod.description}</p>
                    <p className="mb-4 text-sm">{prod.category}</p>
                  </div>
                  <div className="flex justify-between items-center mx-4">
                    <div className="text-sm">price {prod.price}$</div>
                    <div>
                      <button
                        type="button"
                        id="button"
                        className="bg-blue-500 px-2 py-1 text-center text-sm text-white"
                        onClick={() => handleIncreaseItem(prod)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (
            prod.category === selectedCategory ||
            prod.title.toLowerCase().includes(searchQuery as string)
          ) {
            return (
              <div key={prod.title}>
                <div className="h-52">
                  <img
                    src={prod.image}
                    alt="product-picture"
                    className="h-full w-full"
                  />
                </div>
                <div className="shadow-md rounded-sm pb-4">
                  <div className="mt-6 mx-4">
                    <h3 className="font-bold mb-2 truncate">{prod.title}</h3>
                    <p className="text-xs	truncate mb-2">{prod.description}</p>
                    <p className="mb-4 text-sm">{prod.category}</p>
                  </div>
                  <div className="flex justify-between items-center mx-4">
                    <div className="text-sm">price {prod.price}$</div>
                    <div>
                      <button
                        type="button"
                        id="button"
                        className="bg-blue-500 px-2 py-1 text-center text-sm text-white"
                        onClick={() => handleIncreaseItem(prod)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default ProductObject;
