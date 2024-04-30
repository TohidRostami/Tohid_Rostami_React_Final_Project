import { useLoaderData } from "react-router-dom";

function ProductObject({products}) {
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
      <div>
        {products.map((prod) => {
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
                    <button type="button" id="button">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductObject;
