import React from 'react';
const Header3 = () => {
  return (
    <div className='header-3 h-60'>
        <div className='px-5 py-10'>
            <h2 className='text-4xl text-center text-white font-bold'>
                Over 157,000+ hotels and homes across 35+ countries
            </h2>
            <div className="grid grid-cols-5 my-5 mx-20 divide-x">
                <input type="text" placeholder='Search by city,hotel or neighborhoo..'  className=' h-16 rounded-l-sm outline-none px-3 text-lg text-gray-800 border-r-0 border-gray-200 col-span-2'/>
                <input type="date" placeholder='Search...' className='h-16 outline-none px-3 text-gray-400 text-lg  border-r-0 border-gray-200 col-span-1'/>
                <input type="text" placeholder='1 Room ,1 Guest' className='h-16 outline-none text-gray-800 px-3 text-lg  border-r-0 border-gray-200 col-span-1'/>
                <button type="submit" className='h-16 px-3 py-2 col-span-1 border-l-0 border-gray-200 bg-green-400 hover:cursor-pointer
                hover:bg-green-600 text-white text-xl rounded-r-sm'>Search</button>
            </div>
           
        </div>
    </div>
  )
}

export default Header3;