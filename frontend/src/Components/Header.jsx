import React, { useState } from 'react';

// import logo from '../assets/Images/logo.png';
import { IoIosSearch } from 'react-icons/io';
import { MdClose } from "react-icons/md";
import { FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from './../assets/Images/logo2.png';
import { NavLink, useLocation } from 'react-router-dom';
const userIcon = "https://i1.sndcdn.com/avatars-XVWpsyMy1ygP6eOp-7aNsDA-t500x500.jpg"
const cartItems = 0;
function Header() {
  const location = useLocation();

  const [isHidden, setIsHidden] = useState(true);
  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  };
  const isActiveLink = (path) => {
    return location.pathname === path ? 'bg-l-black text-white' : '';
  };

  const hide = () => {
    if (isHidden) {
      return 'hidden'
    }
  }


  return (
    <>
      <div className="fixed z-10 top-0 left-0 right-0 h-[90px] font-poppins bg-eee border-b border-off-white border-2 border-solid  justify-between lg:justify-around xl:pr-14 flex  2xl:space-x-32 items-center px-3 py-4 md:pl-7 xl:pl-14 shadow-md ">
        <div className="flex  sm:space-x-3  xl:space-x-6">
          <img src={logo} alt="logo" className="w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] " />
        </div>
        <ul className=' hidden lg:flex items-center   sm:space-x-5 md:space-x-9 lg:space-x-12 xl:space-x-20 2xl:space-x-28 '>
          <NavLink exact="true" to="/">
            <li className={` 2xl:p-2 2xl:px-5 lg:p-1 lg:px-2  rounded-full  cursor-pointer hover:text-white hover:bg-[#454440] ${isActiveLink('/')}`}>
              Home
            </li>
          </NavLink>
          <NavLink to="/Shop">
            <li className={`2xl:p-2 2xl:px-5 lg:p-1 lg:px-2  rounded-full cursor-pointer ease-in-out duration-150 hover:bg-[#454440] hover:text-white ${isActiveLink('/Shop')}`}>
              Shop
            </li>
          </NavLink>
          <NavLink to="/About">
            <li className={`2xl:p-2 2xl:px-5 lg:p-1 lg:px-2  rounded-full cursor-pointer ease-in-out duration-150 hover:bg-[#454440] hover:text-white ${isActiveLink('/About')}`}>
              About Us
            </li>
          </NavLink>
        </ul>
        <div className="flex justify-center text-items-center relative pr-3 md:pr-8">
          <IoIosSearch className="absolute left-4 top-[13px] text-[17px] text-gray-600 z-10" />
          <input
            type="text"
            placeholder="Search"
            className="p-2 pr-5 w-[200px]  xl:w-[300px] xl:h-[45px] text-gray-600 drop-shadow-lg line-clamp-1 outline-none focus:drop-shadow-cl duration-300 ease-in-out bg-off-white rounded-full pl-10  md:w-44 sm:w-36"
          />
        </div>
        <div className="hidden  sm:flex  items-center  justify-center 2xl:space-x-3 relative">
          <div className="  w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] flex  overflow-hidden rounded-full">
            <img src={userIcon} className='object-cover cursor-pointer' />
          </div>
          <FiChevronDown className=' cursor-pointer' />
        </div>
        <div className=" flex items-center justify-center relative  2xl:p-2 ">
        <NavLink to='/Cart'>
          <FiShoppingCart className='text-[30px] 2xl:text-3xl text-l-black cursor-pointer' />
        </NavLink>
          <div className="absolute   cursor-pointer -right-5 top- bg-slate-600 w-[20px] h-[20px] 2xl:w-[20px] 2xl:h-[20px] flex items-center justify-center  text-center rounded-full">
            <p className='text-[12px] 2xl:text-sm text-white '>{cartItems}</p>
          </div>
        </div>
        {isHidden && (
          <div className="lg:hidden relative flex justify-center items-center text-2xl w-9 h-9">
            <RxHamburgerMenu onClick={toggleSidebar} className='text-3xl absolute cursor-pointer' />
          </div>
        )}

        {!isHidden && (
          <div className="fixed z-50 top-0 left-0 right-0 bottom-0  flex items-center justify-end p-2 ease-out duration-200">
            <MdClose onClick={toggleSidebar} className='text-2xl text-l-black cursor-pointer' />
            <div className="bg-eee h-screen w-64">
              {/* Sidebar content */}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Header