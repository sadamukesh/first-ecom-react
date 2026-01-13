import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-10 '>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6'>
<div>
          <h3 className="text-xl font-bold mb-4">MukeshStore</h3>
          <p className="text-gray-400 text-sm">Providing high-quality electronics since 2024. Your satisfaction is our priority.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="flex">
            <input type="text" className="p-2 rounded-l-lg w-full text-black" placeholder="Email" />
            <button className="bg-purple-600 px-4 rounded-r-lg">Join</button>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-700 mt-10 pt-5 text-gray-500 text-sm">
        © 2026 MukeshStore. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer