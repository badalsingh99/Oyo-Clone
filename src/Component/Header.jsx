import Block from './Block';
import Logo from '../images/logo.png';
import {  Link } from "react-router-dom";
// import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { BsBriefcase, BsList, BsTelephone, BsGlobe2  } from "react-icons/bs";
// import { PiCaretDownFill } from "react-icons/pi";


const Header = () => {
  return (
    <div className='flex justify-between font-semibold border-b-2 border-gray-300 items-center h-20 px-10'>
        
        <Link to='/'>
        <img src={Logo} alt="logo" width={200} height={200} className= "fill-black w-28 h-28 ml-5"/>
         </Link>
        <div className='h-full flex ml-4'>

          <div className='border-l border-gray-300 flex items-center px-3 w-35'>
          <BsBriefcase className='w-8 h-9 rounded-full mr-4  text-gray-600'/>
          <Block title={'OYO for business'} para={"Trusted by 5000 corporates"}/>
          </div>
          
         
          <div className='flex items-center px-3 w-35' >
          <Link to='/Registration1'>
          <BsList className='w-8 h-9 rounded-full mr-4  text-gray-600'/>
          </Link>
          <Block title={'List your property'} para={"Start earing in 30 min"}/>
          </div>

         <div className='flex items-center px-3 w-35'>
         <BsTelephone className='w-8 h-9 rounded-full mr-4  text-gray-600'/>
         <Block title={'0894343564'} para={"Call us to book now"}  />
         </div>

         <div className=' flex items-center px-3 w-35'>
          <BsGlobe2 className='w-8 h-9 rounded-full  text-gray-600'/>
          <Block title={'English'} />
          </div>
        
         
         <div className='flex items-center'>
         <FaUserCircle  className='w-8 h-9 rounded-full mr-4 text-gray-500' />
         <Link to='/login'>
          <h3 className='font-bold' >Login/SignUp</h3> 
         </Link>
         </div> 

        </div>
    </div>
  )
}

export default Header;

