import { useContext, useState, useMemo, useCallback } from "react";
import Product from "../Models/Product";
import { ShopContext } from "../shop/shop-context";

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
      console.log(cat);
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
      <div className="search">
        <div className="search-text-box">
          <div className="search-text">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg> */}
            {/* <button onClick={handleSearch}>Search</button> */}
            <input
              type="text"
              name="search"
              id="search"
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <div className="category-search-box">
          <div className="category-search">
            <select
              name="category"
              id="category"
              onChange={handleSelectCategory}
            >
              <option className="category-option" disabled selected>
                Category
              </option>
              {categories.map((cat) => {
                return (
                  <option key={cat} className="category-option">
                    {cat}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div>
        {props.productsItem.map((prod) => {
          if (selectedCategory === undefined && searchQuery === undefined) {
            return (
              <div className="cart col-md-4" key={prod.title}>
                <div className="cart-picture">
                  <img src={prod.image} alt="product-picture" />
                </div>
                <div className="cart-decs-body">
                  <div className="cart-desc">
                    <h3>{prod.title}</h3>
                    <p>{prod.description}</p>
                    <p id="product-category">{prod.category}</p>
                  </div>
                  <div className="cart-pricing">
                    <div className="cart-parice">price {prod.price}$</div>
                    <div className="add-product">
                      <button
                        type="button"
                        id="button"
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
              <div className="cart col-md-4" key={prod.title}>
                <div className="cart-picture">
                  <img src={prod.image} alt="product-picture" />
                </div>
                <div className="cart-decs-body">
                  <div className="cart-desc">
                    <h3>{prod.title}</h3>
                    <p>{prod.description}</p>
                    <p id="product-category">{prod.category}</p>
                  </div>
                  <div className="cart-pricing">
                    <div className="cart-parice">price {prod.price}$</div>
                    <div className="add-product">
                      <button
                        type="button"
                        id="button"
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
