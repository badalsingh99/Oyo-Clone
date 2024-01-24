import React from 'react';
import Logo from '../images/logo.png'
const Footer = () => {
  return (
    <footer className="footer relative pt-8 pb-6">
    <div className="mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4 py-8">
          <h4 className="text-3xl fonat-semibold text-white hover:text-bluegray-600">Let's keep in touch!</h4>
          <h5 className="text-lg mt-0 mb-2 text-white hover:text-bluegray-600">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6 ">
            <button className="bg-white hover:bg-blue-500 text-white-200 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-twitter"></i></button><button className="bg-white hover:bg-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-facebook-square"></i></button><button className="bg-white hover:bg-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-dribbble"></i></button><button className="bg-white hover:bg-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-row ml-40 border-gray-100 px-10">
            <img src={Logo} alt=" logo" width={200} height={200} className='w-50 h-50' />
         </div>
      </div>
    
      <div
      className=" ml-2 mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-6 md:grid-cols-4 lg:grid-cols-6"
    >
     
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-white">About Us</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-white transition hover:text-blue-300" href="/">
              Company History
            </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-700/75" href="/"> Meet the Team </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-300" href="/">
              Employee Handbook
            </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-300" href="/"> Careers </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-white">Our Services</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-white transition hover:text-blue-300" href="/">
              Web Development
            </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-300" href="/"> Web Design </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-300" href="/"> Marketing </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-300" href="/"> Google Ads </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-white">Resources</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-white transition hover:text-blue-300" href="/"> Online Guides </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-300" href="/">
              Conference Notes
            </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-300" href="/"> Forum </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-300" href="/"> Downloads </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-300" href="/">
              Upcoming Events
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-white">Helpful Links</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-white transition hover:text-blue-300" href="/"> FAQs </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-300" href="/"> Support </a>
          </li>

          <li>
            <a
              className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
              href="/"
            >
              <span className="text-white transition group-hover:text-blue-300"> Live Chat </span>

              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                ></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
        <p className="text-lg font-medium text-white">Stay in Touch</p>

        <div className="mx-auto mt-8 max-w-md sm:ms-0">
          <p className="text-center leading-relaxed text-white ltr:sm:text-left rtl:sm:text-right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id, iure consectetur et
            error hic!
          </p>

          <form className="mt-4">
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
              <label htmlFor="email" className="sr-only">Email</label>

              <input
                className="w-full rounded-full border-gray-200 px-6 py-3 shadow-sm"
                type="email"
                placeholder="Enter your email"
              />

              <button
                className="block rounded-full bg-blue-400 px-8 py-3 font-medium text-white transition hover:bg-blue-500"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
       </div>
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-white font-semibold py-1">
          <p className="mb-2">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
          <p>Designed and developed by me.</p>
          </div>
        </div>
      </div>
    </div>
   
  </footer>
  );
}

export default Footer;
