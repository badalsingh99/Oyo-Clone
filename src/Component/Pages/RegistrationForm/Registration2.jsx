import React from "react";
import { Link } from "react-router-dom";

const Registration2 = () => {
  return (
    <>
      <div>
        <div className="mx-20 px-4 py-8">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600 font-bold tracking-wide">
                ADD NEW LISTING
              </p>
              <h1 className="text-4xl font-bold mb-4">Texts</h1>
            </div>
            <div className="mt-8 text-gray-600">
              <h1 className="text-3xl font-bold mb-4">Step 2</h1>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between"></div>
          <div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block captalize tracking-wide text-gray-700 text-2xl font-bold mb-2"
                  for="description"
                >
                  Description
                </label>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    textAlign: "left",
                  }}
                >
                  <p className="line-clamp-5 text-gray-600 leading-normal tracking-wide">
                    His room, a proper human room although a little too small,
                    lay peacefully between its four familiar walls. A collection
                    of textile samples lay spread out on the table.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <div className="mb-4">
                  <label
                    className="mb-3 block uppercase tracking-wide text-gray-500 text-xs font-semibold mt-2"
                    for="description"
                  >
                    DESCRIBE YOUR PLACE TO GUESTS
                  </label>
                  <textarea
                    className="appearance-none block w-full h-40 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="description"
                    rows="4"
                    placeholder="Enter a description here..."
                  ></textarea>
                  <p className=" text-gray-600 leading-normal tracking-wide">
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                    with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me?" he thought. It wasn't a
                    dream.
                  </p>

                  <label
                    className="mb-3 mt-10 block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    for="input"
                  >
                    YOUR AVAILABILITY
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="description"
                    rows="4"
                    placeholder="Enter a description here..."
                  ></textarea>
                  <p className=" text-gray-600 leading-normal tracking-wide">
                    His room, a proper human room although a little too small,
                    lay peacefully between its four familiar walls. A collection
                    of textile samples lay spread out on the table.
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    className="mb-3 mt-10 block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    for="input"
                  >
                    YOUR NEIGHBOURHOOD
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="description"
                    rows="4"
                    placeholder="Enter a description here..."
                  ></textarea>
                  <p className=" text-gray-600 leading-normal tracking-wide">
                    Samsa was a travelling salesman - and above it there hung a
                    picture that he had recently cut out of an illustrated
                    magazine and housed in a nice, gilded frame.
                  </p>
                </div>
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
                <Link to="/Registration1">
                  <button
                    type="submit"
                    className=" focus:ring-4 focus:ring-gray-200 dark:bg-gray-200 dark:hover:bg-gray-200 focus:outline-none dark:focus:ring-gray-200"
                  >
                    Back
                  </button>
                </Link>
              </div>

              <div className=" flex items-center pl-5 w-32 h-12 bg-indigo-500 text-white font-bold rounded-md shadow-md hover:bg-indigo-600 focus:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-2">
                <Link to='/Registration3'>
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
  );
};

export default Registration2;
