import React from 'react';
import Fire from "../images/fire.jpg"


const Header4 = () => {
  return (
    <div className="flex w-full h-28 justify-between items-center my-14 border rounded-lg border-gray-300 px-5">
        <div className="flex items-center m">
            <img src={Fire} alt="Fire" width={200} height={200} className="w-12 h-12 border-2 rounded-full border-gray-200 mr-5" />
            <div className='text-sm mr-10'>
                 <p className='font-bold text-2xl'>Get access to exclusive deals</p>
                 <p className='font-lg text-gray-600 text-lg'>Only the best deals reach your inbox</p>
            </div>
        </div>
        <div className='flex px-3'>
            <input type="email" label="email" className='px-5 py-3 mr-3 w-80 h-14  rounded-lg outline-none border border-gray-300' placeholder='e.g. xyz@gmail.com' />
            <button type='submit' className='w-48 h-14 bg-red-500 rounded-lg font-bold  text-1xl text-white cursor-pointer'>Notify Me</button>
        </div>
       
    </div>
  )
}

export default Header4;