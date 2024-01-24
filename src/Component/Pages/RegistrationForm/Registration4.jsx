import React from 'react'
import { Link } from "react-router-dom";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Registration4 = () => {
  return (
    <>
    <div>
      <div className="mx-20 px-4 py-8">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-600 font-bold tracking-wide">
              ADD NEW LISTING
            </p>
            <h1 className="text-4xl font-bold mb-4">Photos</h1>
          </div>
          <div className="mt-8 text-gray-600">
            <h1 className="text-3xl font-bold mb-4">Step 4</h1>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between"></div>
            <div className='flex justify-between w-full mt-12 mb-12'>
                <div>
                    <h1 className='text-gray-600 text-xl font-bold'>Photos</h1>
                    <div style={{ width: '100%', maxWidth: '400px', textAlign: 'left' }}>
                    <p className="line-clamp-5 text-gray-600 leading-normal pt-4">
                    His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.
                    </p>
                </div>
                </div>
                <div className='w-full ml-20'>
                    <div class="h-50 flex items-center justify-center">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> 
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
              <Link to="/Registration3">
                <button
                  type="submit"
                  className=" focus:ring-4 focus:ring-gray-200 dark:bg-gray-200 dark:hover:bg-gray-200 focus:outline-none dark:focus:ring-gray-200"
                >
                  Back
                </button>
              </Link>
            </div>

            <div className=" flex items-center pl-5 w-32 h-12 bg-indigo-500 text-white font-bold rounded-md shadow-md hover:bg-indigo-600 focus:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-2">
              <button
                type="submit"
                className=" text-white font-bold rounded-md  focus:outline-none focus:ring-indigo-500 focus:ring-0"
              >
                Submit
              </button>
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

export default Registration4