import { useCart } from "../context/CartContext";
import Navbar1 from "./Navbar1";
const Cart = () => {
  const {
    cartItems,
    addToCart,
    decreaseQty,
    removeItem,
    totalPrice,
  } = useCart();

    const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar1/>
      <div className="h-[70vh] flex flex-col items-center justify-center m-40">
        <h1 className="text-2xl font-bold text-gray-700">Your cart is empty</h1>
        <p className="text-gray-500">You can go to home page to view more restaurants</p>
        <div className="w-[400px] h-[40px] bg-[#ff5200] m-4">
          <p className="text-white text-lg font-semibold p-1 text-center">See restaurants near you</p>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
    <Navbar1/>
    <div className="max-w-[1000px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {/* CART ITEMS */}
      <div className="bg-white shadow rounded-lg p-4">
        {cartItems.map((item) => (

           
         
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex justify-center items-center ">
              <img
                      src={item.image}
                      alt={item.name}
                      className="w-[150px] h-[130px]
                                 object-cover rounded-lg"
                    />

            {/* LEFT */}
            <div className="pl-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <div className="flex border rounded">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 font-bold"
                >
                  −
                </button>
                <span className="px-3 py-1">{item.qty}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 font-bold"
                >
                  +
                </button>
              </div>

              <p className="font-semibold">
                ₹{item.price * item.qty}
              </p>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-sm"
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BILL */}
      <div className="mt-6 bg-white shadow rounded-lg p-4">
        <h2 className="font-bold mb-2">Bill Details</h2>

        <div className="flex justify-between">
          <span>Item Total</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>Delivery Fee</span>
          <span>₹40</span>
        </div>

        <div className="flex justify-between font-bold text-lg mt-2">
          <span>To Pay</span>
          <span>₹{totalPrice + 40}</span>
        </div>

        <button className="mt-4 w-full bg-[#60b246] text-white py-2 rounded-lg font-semibold">
          PROCEED TO PAY
        </button>
      </div>
    </div>
    </>
  );
};

export default Cart;
