import React from 'react';
import { useCart } from '../context/CartContext'; // Path dhyan se dekhna
import { Link } from 'react-router-dom';

const CartModal = ({ setOpen }) => {
  const { cart, updateQty, removeItem, totalPrice } = useCart();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex justify-end">
      {/* Side Panel */}
      <div className="w-full md:w-[400px] bg-white h-full shadow-2xl p-6 overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
          <button 
            onClick={() => setOpen(false)} 
            className="text-gray-500 hover:text-red-500 text-3xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Cart Items List */}
        {cart.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-gray-400 text-lg italic">Cart is Empty!</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img src={item.image} alt={item.title} className="h-20 w-20 object-contain rounded" />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-gray-800 line-clamp-1">{item.title}</h3>
                    <p className="text-purple-600 font-bold mt-1">₹{item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Logic */}
                      <div className="flex items-center border rounded-lg bg-gray-50">
                        <button 
                          onClick={() => updateQty(item.id, 'minus')} 
                          className="px-3 py-1 hover:bg-gray-200 font-bold"
                        >-</button>
                        <span className="px-3 font-medium">{item.qty}</span>
                        <button 
                          onClick={() => updateQty(item.id, 'plus')} 
                          className="px-3 py-1 hover:bg-gray-200 font-bold"
                        >+</button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)} 
                        className="text-red-500 text-xs font-medium hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Section */}
            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between text-xl font-bold text-gray-800">
                <span>Grand Total:</span>
                <span className="text-green-600">₹{totalPrice}</span>
              </div>
              
              <Link 
  to="/checkout" 
  onClick={() => setOpen(false)} // Modal band karke bhej do
  className="block text-center w-full bg-purple-600 text-white py-4 rounded-xl mt-6 font-bold"
>
  Proceed to Checkout
</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;