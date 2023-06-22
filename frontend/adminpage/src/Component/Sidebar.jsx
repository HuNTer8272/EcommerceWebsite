import React from 'react'
import logo from "../assets/Images/logo2.png"
import "./Admin.css";
import { RxDashboard } from "react-icons/rx";
import { BsFillPersonFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { CiViewList } from "react-icons/ci";
import { AiOutlineSetting,AiOutlinePlus } from "react-icons/ai";
import { MdOutlineLogout,MdAutoGraph,MdOutlineMailOutline,MdOutlineMarkEmailRead,MdOutlineReport } from "react-icons/md";
function Sidebar() {
   const icon =()=>{
    const className ="text-xl font-semibold  ";
    return className;
   }

  return (
    <div> <div className="container fixed  w-64  pl-5">
    <aside>
      <div className="top ">
        <div className="flex items-center pr-2">
          <img className='w-[60px] h-[60px] ' src={logo} alt="" />
          <h2 className=' font-semibold text-l-black'> <span>Sagar an systems</span></h2>
        </div>
        <div className="close" id="close-btn">
        <GrFormClose className={`${icon()}`}/>
        </div>
      </div>
      <div className="sidebar ">
        <a href="#" className='active '>
         <RxDashboard className={`${icon()}`}/>
          <h3>Dashboard</h3>
        </a>
        <a href="#" className="hover:translate-x-3  ease-out duration-300">
          <BsFillPersonFill className={` ${icon()}`}/>
          <h3>Customers</h3>
        </a>
        <a href="#" className='hover:translate-x-3  ease-out duration-300'>
          <CiViewList className={`${icon()}`}/>
          <h3>Orders</h3>
        </a>
        <a href="#" className='hover:translate-x-3  ease-out duration-300'>
          <MdAutoGraph className={`${icon()}`}/>
          <h3>Analytics</h3>
        </a>
        <a href="#" className='hover:translate-x-3  ease-out duration-300'>
          <MdOutlineMailOutline className={`${icon()}`}/>
          <h3>Messages</h3>
          <span className="message-count">26</span>
        </a>
        <a href="#" className='hover:translate-x-3  ease-out duration-300'>
          <MdOutlineMarkEmailRead className={`${icon()}`}/>
          <h3>Products</h3>
        </a>
        <a href="#" className="hover:translate-x-3  ease-out duration-300">
          <MdOutlineReport className={`${icon()}`}/>
          <h3>Reports</h3>
        </a>
        <a href="#" className="hover:translate-x-3  ease-out duration-300">
          <AiOutlineSetting className={`${icon()}`}/>
          <h3>Settings</h3>
        </a>
        <a href="#" className="hover:translate-x-3  ease-out duration-300">
          <AiOutlinePlus className={`${icon()}`}/>
          <h3>Add Products</h3>
        </a>
        <a href="#" className="hover:translate-x-3  ease-out duration-300">
          <MdOutlineLogout className={`${icon()}`}/>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  </div></div>
  )
}

export default Sidebar