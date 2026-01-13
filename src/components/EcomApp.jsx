import React, { useState } from 'react';

const EcomApp = () => {
    // 1. Unique IDs zaroori hain
    const [products] = useState([
        { id: 1, name: "Iphone 15", price: 49999 },
        { id: 2, name: "Samsung S25", price: 79999 },
        { id: 3, name: "Oneplus Nord", price: 39999 }
    ]);

    const [cart, setCart] = useState([]);

    // 2. Quantity Logic (Professional Way)
    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            // Agar pehle se hai, toh quantity badhao
            setCart(cart.map((item) => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // Agar naya hai, toh quantity: 1 ke saath add karo
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeToCart = (id) => {
        // Index ke bajaye ID se delete karna zyada safe hota hai
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className='max-w-6xl mx-auto p-5'>
            <h1 className='font-bold text-3xl text-purple-600 mb-8 text-center'>Our Products</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
                {/* Product List Section */}
                <div className='md:col-span-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {products.map((item) => (
                            <div key={item.id} className='bg-white p-5 flex flex-col items-center rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl transition'>
                                <h2 className='font-bold text-xl mb-2'>{item.name}</h2>
                                <p className='text-purple-600 font-bold mb-4'>₹{item.price}</p>
                                <button 
                                    onClick={() => addToCart(item)} 
                                    className='w-full text-white py-2 bg-purple-600 hover:bg-purple-700 transition duration-300 rounded-lg shadow-md'
                                >
                                    Add to cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cart Section */}
                <div className='md:col-span-4 bg-gray-50 p-6 shadow-xl rounded-xl border-t-8 border-purple-600 h-fit'>
                    <h2 className='text-xl font-bold mb-4'>Your Cart ({cart.length})</h2>
                    {cart.length === 0 ? (
                        <p className='text-gray-500'>Cart is empty</p>
                    ) : (
                        <div>
                            {cart.map((item) => (
                                <div key={item.id} className='flex justify-between items-center border-b py-3 text-sm'>
                                    <div>
                                        <p className='font-semibold'>{item.name}</p>
                                        <p className='text-xs text-gray-500'>Qty: {item.quantity}</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <span className='font-bold'>₹{item.price * item.quantity}</span>
                                        <button 
                                            onClick={() => removeToCart(item.id)} 
                                            className='text-red-500 hover:bg-red-50 p-1 rounded transition'
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-6 pt-4 border-t-2 border-gray-200 font-bold text-lg flex justify-between items-center">
                                <span>Total Amount:</span>
                                <span className="text-green-600 text-xl">₹{totalPrice}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EcomApp;