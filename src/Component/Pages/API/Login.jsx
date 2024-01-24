import React from 'react'
// import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <head>
            <title>OYO ! Login</title>
        </head>
        <div className='container flex h-screen justify-center items-center relative bg-no-repeat bg-cover opacity-85'>
            <div className='absolute w-full top-10 px-20 flex items-center text-white'>
                <h2 className='text-5xl font-bold mr-5'>OYO</h2>
                <p className='font-bold text-2xl '>Hotels and homes across 800 cities, 24+ countries</p>
            </div>
            <div className='flex justify-center items-center w-9/12'>
                <div className='text-white'>
                    <p className='font-bold text-4xl text-justify'>There’s a smarter way to OYO around</p>
                    <p className='text-2xl mt-5 text-justify'>Sign up with your phone number and get exclusive access to discounts and
                         savings on OYO stays and with our many travel partners.</p>
                </div>
                <div className=' pb-40 w-9/12 ml-20 border bg-slate-50'>
                    <p className='h-10 px-10 text-lg font-bold text-white flex items-center
                     bg-gradient-to-r from-red-400 to bg-red-600'>Sign up & Get ₹500 OYO Money</p>
                     <div className="px-10">
                        <h3 className='text-5xl font-bold my-5'>Login / Signup</h3>
                        <p className='font-bold text-lg mb-1'>Please enter your phone number to continue</p>
                        <input type="email" placeholder='Enter your email..' className='outline-none border-black px-3 py-1 w-96 h-10' />
                        <button className='w-96 h-14 text-lg font-bold bg-red-500 hover:cursor pointer hover:bg-red-600
                         text-white my-5' type='submit'>Varify Email</button>
                         <p className="my-1 text-xl">
                            <span>
                                Don’t have an account?
                            </span>
                            <span className='ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer text-red-200'>
                                Login
                            </span>
                          
                         </p>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;
