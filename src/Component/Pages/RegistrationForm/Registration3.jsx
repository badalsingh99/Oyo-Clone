import React from 'react';
import { Link } from "react-router-dom";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Registration3 = () => {
  return (
    <>
    <div>
      <div className="mx-20 px-4 py-8">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-600 font-bold tracking-wide">
              ADD NEW LISTING
            </p>
            <h1 className="text-4xl font-bold mb-4">Disposition and Amenities</h1>
          </div>
          <div className="mt-8 text-gray-600">
            <h1 className="text-3xl font-bold mb-4">Step 3</h1>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between"></div>
            <div className='flex justify-between w-full mt-5 mb-8'>
                <div>
                    <h1 className='text-gray-600 text-xl font-bold'>Rooms and beds</h1>
                    <div style={{ width: '100%', maxWidth: '400px', textAlign: 'left' }}>
                    <p className="line-clamp-5 text-gray-600 leading-normal pt-4">
                    The number and types of beds you have determines how many guests can stay comfortably
                    </p>
                </div>
                </div>
                <div className='grid text-center'>
                    <p className='font-bold text-sm text-gray-500'>Bed</p>
                    <span className='flex flex-row'>
                    <CiCirclePlus  className='w-5 h-6'   />
                    <h1 className='mx-2 text-lg'>1</h1>
                    <CiCircleMinus  className='w-5 h-6'   />
                    </span>
                </div>
                <div className='grid'>
                    <p className='font-bold text-sm text-gray-500'>Bedrooms</p>
                    <span className='flex flex-row'>
                    <CiCirclePlus className='w-5 h-6' />
                    <h1 className='mx-2 text-lg'>1</h1>
                    <CiCircleMinus className='w-5 h-6'  />
                    </span>
                </div>
                <div className='grid'>
                    <p className='font-bold text-sm mr-10 text-gray-500'>Bathrooms</p>
                    <span className='flex flex-row'>
                    <CiCirclePlus  className='w-5 h-6'   />
                    <h1 className='mx-2 text-lg'>1</h1>
                    <CiCircleMinus  className='w-5 h-6'   />
                    </span>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between"></div>
            <div className='flex justify-between w-full'>
                 <div>
                    <h1 className='text-gray-600 text-xl font-bold'>Amenities</h1>
                    <div style={{ width: '100%', maxWidth: '400px', textAlign: 'left' }}>
                    <p className="line-clamp-4 text-gray-600 leading-normal pt-4">
                     His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.
                    </p>
                </div>
                </div>
                <div className='grid text-center mr-60'>
                    <p className='font-bold text-sm mr-10 text-gray-500'>AVAILABLE AMENITIES</p>
                    <span className='flex justify-between w-full ml-32 gap-3 text-sm text-gray-500 mb-10 p-2'>
                    <span >
                    <input type="checkbox" id='kitchen'/>
                    <label htmlFor="kitchen" className='ml-2'>kitchen</label>
                    </span>
                    <span>
                    <input type="checkbox" id='kitchen'/>
                    <label htmlFor="kitchen" className='ml-2'>Shampoo</label>
                    </span>
                    <span>
                    <input type="checkbox" id='kitchen'/>
                    <label htmlFor="kitchen" className='ml-2'>Iron</label>
                    </span>
                    <span>
                    <input type="checkbox" id='kitchen'/>
                    <label htmlFor="kitchen" className='ml-2'>Hairdryer</label>
                    </span>
                    <span>
                    <input type="checkbox" id='kitchen'/>
                    <label htmlFor="kitchen" className='ml-2'>food</label>
                    </span>                    
                    <span>
                    <input type="checkbox" id='kitchen'/>
                    <label htmlFor="kitchen" className='ml-2'>Wifi</label>
                    </span>                    
                    </span>
                </div>
            </div>

        <div className="mt-10 mb-5 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-between w-full">
            <div className="flex items-center cursor-pointer pl-5 w-32 h-12 text-gray-600 font-bold border rounded-lg shadow-sm hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-indigo-500 focus:ring-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              <Link to="/Registration2">
                <button
                  type="submit"
                  className=" focus:ring-4 focus:ring-gray-200 dark:bg-gray-200 dark:hover:bg-gray-200 focus:outline-none dark:focus:ring-gray-200"
                >
                  Back
                </button>
              </Link>
            </div>

            <div className=" flex items-center pl-5 w-32 h-12 bg-indigo-500 text-white font-bold rounded-md shadow-md hover:bg-indigo-600 focus:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-2">
              <Link to='/Registration4'>
              <button
                type="submit"
                className=" text-white font-bold rounded-md  focus:outline-none focus:ring-indigo-500 focus:ring-0"
              >
                Next Step
              </button>
              </Link>
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Registration3;