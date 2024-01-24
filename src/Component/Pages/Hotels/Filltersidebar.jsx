import React from "react";
import Hotels from "./Hotels";

const Filltersidebar = () => {
  return (
    <>
      <div className="flex">
        <div className="relative flex flex-col bg-white text-gray-700 h-100vh max-h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-y-auto">
          <div className="mb-2 p-4">
            <h5 className="block antialiased tracking-normal font-sans text-3xl font-bold leading-snug text-gray-500">
              Filters
            </h5>
            <p className="text-1xl font-bold text-gray-600">
              Popular locations in Bangalore
            </p>
            <br />
            <input
              type="text"
              placeholder="Search..."
              className="h-10 outline-none px-3 text-gray-400 text-lg border border-gray-200 col-span-1"
            />
          </div>
          <div className="mt-1 ml-2 p-3 border-t border-gray-100">
            <p className="sm:flex sm:items-start sm:justify-start text-lg font-bold text-gray-600">
              Price
            </p>
            <div className="mb-5 mt-2 ">
              <h1 className="font-bold text-gray-500 text-lg line-clamp-1">
                4500'Rs - 12500'Rs
              </h1>
              <div className="mt-2">
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="100"
                  className="w-52"
                />
                &nbsp;
              </div>
              <h1 className="font-bold text-gray-400 text-sm">Min to Max </h1>
            </div>
          </div>

          <div className="mt-2 ml-2 p-3 border-t border-gray-100">
            <p className="sm:flex mt-2 pb-2 sm:items-start sm:justify-start text-lg font-bold text-gray-600">
              Collections
            </p>
            <div className="text-gray-500 text-xl font-bold">
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600  
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm font-bold text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="mt-10 ml-2 p-3 border-t border-gray-100">
            <p className="sm:flex mt-2 pb-2 sm:items-start sm:justify-start text-lg font-bold text-gray-600">
              Categories
            </p>
            <div className="text-gray-500 text-xl font-bold">
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600  
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm font-bold text-gray-500 dark:text-gray-300"
                >
                  OYO Room
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet.
                  </p>
                </label>
              </div>
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                >
                  Premium
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet.
                  </p>
                </label>
              </div>
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                >
                  TownHouse
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet.
                  </p>
                </label>
              </div>
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                >
                  Flagship
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet.
                  </p>
                </label>
              </div>
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                >
                  Home
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet.
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-5 ml-2 p-3 border-t border-gray-100">
              <p className="sm:flex sm:items-start sm:justify-start text-lg mt-2 mb-3 font-bold text-gray-600">
                Hotel facilities
              </p>
              <div className="text-gray-500 font-bold text-lg">
                <div className="flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                  >
                    TV
                  </label>
                </div>
                <div className="flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                  >
                    Hair Dryer
                  </label>
                </div>
                <div className="flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                  >
                    AC
                  </label>
                </div>
                <div className="flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                    focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    className="ms-2 text-sm Font-bold text-gray-500 dark:text-gray-300"
                  >
                    Seating area
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-3 mb-5 my-5">
          <div className="flex items-center justify-between mt-5 ml-5">
            <div>
              <a href="" className="font-xl text-blue-600">
                India
              </a>
              <span className="overflow-hidden text-gray-600"> / Banglore</span>
              <br />
              <h1 className="text-xl font-bold text-gray-600">
                Hotels in Banglore
              </h1>
            </div>
            <div>
              <div className="inline-flex items-center">
                <label
                  htmlFor="desc"
                  className="mt-px mb-0 ml-3 font-light text-gray-700 cursor-pointer select-none"
                >
                  <div>
                    <p className="block font-sans text-1xl antialiased font-bold leading-relaxed text-gray-500">
                      Map View
                    </p>
                  </div>
                </label>
                <div className=" border-2 rounded-full border-blue-600 py-2 ml-2 px-2">
                  <div className="relative inline-block w-10 h-4 mt-1 ml-5 rounded-full cursor-pointer">
                    <input
                      type="checkbox"
                      id="desc"
                      className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                    />
                    <label
                      htmlFor="desc"
                      className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                    >
                      <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <p className="font-semibold text-gray-600 mr-2 px-2">short by :</p>
              <div className="w-60 mr-10 font-semibold text-gray-600">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Popularity</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="m-8 mt-10 p-3 border-t border-gray-100"></div>
          <div className="mb-10">
            <Hotels />
          </div>
          <div className="m-8 mt-5 p-3 border-t border-gray-100"></div>
          <div className="mb-10">
            <Hotels />
          </div>
          <div className="m-8 mt-5 p-3 border-t border-gray-100"></div>
          <div className="mb-10">
            <Hotels />
          </div>
          <div className="m-8 mt-5 p-3 border-t border-gray-100"></div>
          <div className="mb-10">
            <Hotels />
          </div>
          <div className="m-8 mt-5 p-3 border-t border-gray-100"></div>
          <div className="mb-10">
            <Hotels />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filltersidebar;
