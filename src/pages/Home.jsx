import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center bg-linear-to-r from-purple-600 to-pink-500 text-center p-5'>

      <h1 className='font-extrabold text-5xl pb-5'>Welcome to MukeshStore</h1>
<p className="text-xl mb-8 max-w-lg">Get the best tech products at the most affordable prices. Fast delivery guaranteed!</p>
<Link to="/products" className='bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg'>Shop Now</Link>
    </div>
  )
}

export default Home