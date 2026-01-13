import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const Products = () => {
  const { addToCart } = useCart();

  const[product, setProduct] = useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=> setProduct(res.data));
  },[])
  return (
    <div className='bg-linear-to-r from-purple-600 to-pink-500 '>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
        {product.map((item,index)=>(
          <div key={item} className='bg-white border-2 border-purple-600 rounded-3xl p-4 text-center shadow hover:shadow-gray-500'>
<img src={item.image} className="h-40 mx-auto mb-4" alt="" />
          <h2 className="font-bold truncate">{item.title}</h2>
          <p className="text-purple-600 font-bold">₹{Math.round(item.price * 80)}</p>
          <button 
            onClick={() => addToCart({...item, price: Math.round(item.price * 80)})}
            className="bg-white text-purple-600 border-2 px-5 border-purple-600 py-1 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Add to Cart
          </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products