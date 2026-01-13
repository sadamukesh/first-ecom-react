import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartModal from "./CartModal";
const Navbar = () => {
  const { cart } = useCart();
  const[sideBarNav, setSideBarNav] = useState(false)

  const[isOpen, setIsOpen] = useState(false);
  return (
    <nav className='bg-white shadow-2xl sticky top-0 z-50'>
<div className='max-w-6xl mx-auto p-4 flex justify-between items-center '>
  <Link to="/" className='text-2xl font-bold text-purple-600'>MukeshStore</Link>

  <div className='hidden md:flex gap-8 font-medium'>
    <Link to="/" className='hover:text-purple-600 transition'>Home</Link>
    <Link to="/products" className='hover:text-purple-600 transition'>Products</Link>
    <Link to="/contact" className='hover:text-purple-600 transition'>Contact</Link>
  </div>
 <button onClick={() => setIsOpen(true)} className="relative p-2 bg-purple-100 rounded-full">
          🛒 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">{cart.length}</span>
        </button>
</div>
{isOpen && <CartModal setOpen={setIsOpen} />}
 <div className= {`fixed top-0 right-0 
  ${!sideBarNav? 'h-0 w-0 overflow-hidden':'h-screen w-60 bg-black/70 transition duration-1000'} text-white  
  flex flex-col gap-8 p-6
  z-50 
  md:hidden`}>
  <button className='bg-purple-600 rounded-full px-2 text-white fixed top-5 right-5 md:hidden' onClick={()=>setSideBarNav(!sideBarNav)}>{!sideBarNav? 'open': 'X'}</button>
  <Link to="/" className='hover:text-purple-400'>Home</Link>
  <Link to="/products" className='hover:text-purple-400'>Products</Link>
  <Link to="/contact" className='hover:text-purple-400'>Contact</Link>
</div>
    </nav>
    
  )
}

export default Navbar