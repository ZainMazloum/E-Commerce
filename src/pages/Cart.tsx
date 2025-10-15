import  { useContext } from "react";
import { PRODUCTS } from "../api/products";
import CartItem from "./Cart-Item";
import { ShopContext } from "../context/shop-context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount(cartItems);
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-8 text-center">
        Your Cart Items
      </h1>

      {/* Cart items list */}
      <div className="flex flex-col gap-6 mb-10">
        {PRODUCTS.map((product) =>
          cartItems[product.id] !== 0 ? (
            <CartItem key={product.id} data={product} />
          ) : null
        )}
      </div>

      {/* Checkout section */}
      {totalAmount > 0 ? (
        <div className="flex flex-col items-center gap-4 border-t border-neutral-200 pt-8">
          <p className="text-lg font-medium text-neutral-800">
            Subtotal:{" "}
            <span className="font-semibold text-blue-600">
              ${totalAmount.toFixed(2)}
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="
                px-5 py-2 rounded-lg border border-neutral-300
                text-neutral-700 text-sm font-medium
                hover:bg-neutral-100 active:scale-95 transition cursor-pointer
              "
            >
              Continue Shopping
            </button>

            <button
              className="
                px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium
                hover:bg-blue-700 active:scale-95 transition cursor-pointer
              "
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h2 className="text-center text-neutral-500 text-lg font-medium mt-10">
          Your cart is empty 😔
        </h2>
      )}
    </div>
  );
};

export default Cart;
