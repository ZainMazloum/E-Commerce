import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartItem = (props: {
  data: { id: number; productName: string; price: number; productImage: string };
}) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div
      className="
        w-full flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm
        border border-neutral-200 hover:shadow-md transition-shadow duration-200
      "
    >
      {/* Image */}
      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-neutral-100">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Description */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-900 truncate">
          {productName}
        </p>
        <p className="text-sm text-neutral-600 mt-1">${price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => removeFromCart(id)}
          className="
            w-8 h-8 flex items-center justify-center text-lg font-semibold
            bg-neutral-200 hover:bg-neutral-300 text-neutral-700 rounded-md
            transition-colors duration-150 cursor-pointer
          "
        >
          -
        </button>

        <input
          className="
            w-12 text-center border border-neutral-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(e.target.value, id)}
        />

        <button
          onClick={() => addToCart(id)}
          className="
            w-8 h-8 flex items-center justify-center text-lg font-semibold
            bg-neutral-200 hover:bg-neutral-300 text-neutral-700 rounded-md
            transition-colors duration-150 cursor-pointer
          "
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
