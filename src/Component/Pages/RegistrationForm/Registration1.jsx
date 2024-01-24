import React from "react";
import {  Link } from "react-router-dom";

const Registration1 = () => {
  return (
    <div>
      <div className="mx-20 px-4 py-8">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-600 font-bold tracking-wide">ADD NEW LISTING</p>
            <h1 className="text-4xl font-bold mb-4">Basic information</h1>
          </div>
          <div className="mt-8 text-gray-600">
            <h1 className="text-3xl font-bold mb-4">Step 1</h1>
          </div>
        </div>

        <div className="mt-2 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-between w-full">
            <div className="pr-15">
              <span className="flex justify-start items-center">
                <h1 className="text-2xl font-bold mr-1 mb-1 ">Basic</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
              </span>
                <div style={{ width: '100%', maxWidth: '400px', textAlign: 'left' }}>
                  <p className="line-clamp-5 text-gray-600 leading-normal pt-4">
                  His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.
                  </p>
                </div>
               
            </div>
            <div className="ml-10 mt-8 w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="w-full">
                  <label htmlFor="property_name" className="block mb-2">
                    PROPERTY NAME
                  </label>
                  <input
                    id="property_name"
                    type="text"
                    className="w-60 h-12 border-gray-300 text-justify rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="home_type" className="block mb-2">
                    HOME TYPE
                  </label>
                  <select
                    id="home_type"
                    className="w-60 h-12 border-gray-300 text-justify pl-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="Entire Place">Entire Place</option>
                    <option value="Private Room">Private Room</option>
                    <option value="Shared Room">Shared Room</option>
                  </select>
                </div>
              </div>
            </div>    
          </div>
        </div>
        <div className="space-y-2 mt-10">
          <p className="text-gray-500 font-semibold text-sm tracking-wide">IS YOUR PROPERTY SET AS A DEDICATED GUEST SPACE?</p>
            <div className="flex items-center">
              <input
                id="is_dedicated_quest_space_yes"
                name="is_dedicated_quest_space"
                type="radio"
                className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label for="is_dedicated_quest_space_yes" className="block ml-2">
                Yes, it's primarily set up for guests
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="is_dedicated_quest_space_no"
                name="is_dedicated_quest_space"
                type="radio"
                className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label for="is_dedicated_quest_space_no" className="block ml-2">
                No, I keep my personal belongings there
              </label>
            </div>
          </div>
        <div  className="mt-10 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <div className="mb-10">
             <span className="flex justify-start items-center">
                <h1 className="text-2xl font-bold mr-1 mb-1 ">Location</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

              </span>
            <p className="text-gray-600 pt-2 line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, incidunt.</p>
          </div>
        </div>
        
        <form className="space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="country" className="block mb-2">
                COUNTRY / REGION
              </label>
              <input
                id="country"
                type="text"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label for="street_address" className="block mb-2">
                STREET ADDRESS
              </label>
              <input
                id="street_address"
                type="text"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="city" className="block mb-2">
                CITY
              </label>
              <input
                id="city"
                type="text"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label for="zip_code" className="block mb-2">
                ZIP CODE
              </label>
              <input
                id="zip_code"
                type="text"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        
          <div className="space-y-2">
            <label for="description" className="block mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
        </form>
        

        <div className="mt-10 mb-5 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-end w-full">
            <div className=" flex items-center pl-5 w-32 h-12 bg-indigo-500 text-white font-bold rounded-md shadow-md hover:bg-indigo-600 focus:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-2">
           <Link to='/Registration2'>
            <button type="submit" className=" text-white font-bold rounded-md  focus:outline-none focus:ring-indigo-500 focus:ring-0"> Next Step </button>
           </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration1;
