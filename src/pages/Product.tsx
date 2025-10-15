import  { useContext } from "react";
import type { ProductType } from "../api/products";
import {ShopContext} from "../context/shop-context";
interface ProductProps {
  data: ProductType;
}

const Product: React.FC<ProductProps> = ({ data }) => {
  const {id, productName, price, productImage } = data;
const {addToCart , cartItems} = useContext(ShopContext)
const cartItemAmount = cartItems[id];
  return (
    <div

      className="
        bg-white rounded-2xl shadow-sm hover:shadow-lg 
        transition-shadow duration-200 overflow-hidden 
        flex flex-col h-full
      "
    >
      {/* Image */}
      <div className="w-full aspect-square bg-neutral-100 overflow-hidden">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product name & price */}
        <div className="flex-grow">
          <p className="text-sm md:text-base font-semibold leading-tight text-neutral-900 line-clamp-2">
            {productName}
          </p>
          <p className="text-sm md:text-base font-medium text-neutral-600 mt-1">
            ${price}
          </p>
        </div>

        <button
          type="button"
          className="
            mt-3 inline-flex items-center justify-center w-full gap-2 
            py-2 px-3 bg-blue-600 text-white text-sm font-medium rounded-lg 
            hover:bg-blue-700 active:scale-95 transition transform cursor-pointer
          "
          aria-label={`Add ${productName} to cart`}
          onClick={() => addToCart(id)}
        >
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  );
};

export default Product;
