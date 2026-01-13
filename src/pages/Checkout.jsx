import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, totalPrice, setCart } = useCart();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("🎉 Order Successful! Thank you for shopping, Mukesh.");
    setCart([]); // Order hone ke baad cart khali kar do
    localStorage.removeItem("myCart"); // Memory bhi saaf kar do
    window.location.href = "/"; // Wapis home page par bhej do
  };

  if (cart.length === 0) return <h1 className="text-center mt-20">Aapka cart khali hai!</h1>;

  return (
    <div className="max-w-4xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Form Section */}
      <div className="bg-white p-6 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <form onSubmit={handlePlaceOrder} className="space-y-4">
          <input type="text" placeholder="Full Name" required className="w-full p-2 border rounded" />
          <input type="text" placeholder="Address" required className="w-full p-2 border rounded" />
          <input type="tel" placeholder="Phone Number" required className="w-full p-2 border rounded" />
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold">Confirm Order</button>
        </form>
      </div>

      {/* Summary Section */}
      <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-purple-300">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cart.map(item => (
          <div key={item.id} className="flex justify-between py-2">
            <span>{item.title} (x{item.qty})</span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}
        <div className="border-t mt-4 pt-4 flex justify-between font-bold text-xl">
          <span>Total:</span>
          <span className="text-green-600">₹{totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;