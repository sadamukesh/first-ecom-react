import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen bg-linear-to-r from-purple-600 to-pink-500 '>
      <div className='max-w-6xl mx-auto grid grid-cols-12 gap-6'>
        <div className='col-span-12 md:col-end-6 p-4'> 
          <h2 className='text-white text-3xl font-bold'>Contact Us</h2>
          <p className='text-white text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius doloribus dolores laborum harum reprehenderit odit eligendi molestias culpa officiis provident, maxime eum dolorem accusantium necessitatibus veniam, consequatur amet architecto ea possimus optio. Blanditiis autem obcaecati labore, perferendis pariatur laborum quod ea odio, ipsam similique quibusdam. Autem ad cupiditate necessitatibus minus veniam ullam qui, quasi hic beatae soluta, neque repudiandae iste explicabo possimus aperiam quisquam blanditiis officia, alias maxime fugiat consequuntur illum consequatur suscipit? Explicabo consectetur tenetur, enim iste, vel corporis inventore placeat itaque nostrum repudiandae possimus autem reprehenderit voluptatem fuga non officia expedita? Iusto enim rem, cupiditate quisquam possimus distinctio.</p>
          
        </div>
        <div className='col-span-12 md:col-span-6 p-4'>
          <form className="space-y-4 bg-white p-8 shadow-xl rounded-2xl border border-gray-100">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg outline-none focus:border-purple-500" />
        <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg outline-none focus:border-purple-500" />
        <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded-lg outline-none focus:border-purple-500"></textarea>
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">Send Message</button>
      </form>
        </div>
      </div>
    </div>
  )
}

export default Contact