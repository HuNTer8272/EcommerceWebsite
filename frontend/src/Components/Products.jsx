import React from 'react'
import "./Product.css";
import { BsDot } from "react-icons/bs";

function Products() {
  return (
    <>
      <div className=" flex justify-center items-center font-bold font-roboto text-3xl text-l-black mt-20 mb-10">
        <h1>Our Products</h1>
      </div>
      <div className="container justify-around   bg-[#f5f5f5] py-10 gap-5 xl:gap-1  xl:mx-20 rounded-[15px] mb-12 ">

        <div className="cards hover:-translate-y-2 ease-in-out duration-200">
          <div className="card-img"><img src="https://itronics.in/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png" alt="" /></div>
          <div className="card-info">
          <div className="flex justify-center items-center">
            <BsDot className='text-[40px] text-[#645c68]'/>
            <BsDot className='text-[40px] text-[#a2b5cb]'/>
            <BsDot className='text-[40px] text-[#fae375]'/>
          </div>
            <div className="card-title">Iphone 13</div>
            <div className="price">MRP $600 (Inc. of all taxexs)</div>
            <div className="button-container">
              {/* <button class="buy-button" onclick="alert('Button clicked')">Buy</button> */}
            </div>
          </div>
        </div>
        <div className="cards hover:-translate-y-2 ease-in-out duration-200 ">
          <div className="card-img pt-2"><img src="https://telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/front.png" alt="" /></div>
          <div className="card-info">
          <div className="-translate-y-12 flex justify-center items-center">
            <BsDot className='text-[40px] text-[#645c68]'/>
            <BsDot className='text-[40px] text-[#a2b5cb]'/>
            <BsDot className='text-[40px] text-[#fae375]'/>
          </div>
            <div className="card-title -translate-y-12">Iphone 14 Pro Max</div>
            <div className="price -translate-y-12">MRP $600 (Inc. of all taxexs)</div>
            <div className="button-container">
              {/* <button class="buy-button" onclick="alert('Button clicked')">Buy</button> */}
            </div>
          </div>
        </div>
        <div className="cards hover:-translate-y-2 ease-in-out duration-200">
          <div className="card-img pt-14"><img src="https://cdn.lomax.dk/images/t_item_large/f_auto/v1662710824/produkter/70154090_1/apple-iphone-14-pro-128gb-guld-1.jpg" alt="" /></div>
          <div className="card-info">
          <div className="flex justify-center items-center">
            <BsDot className='text-[40px] text-[#645c68]'/>
            <BsDot className='text-[40px] text-[#a2b5cb]'/>
            <BsDot className='text-[40px] text-[#fae375]'/>
          </div>
            <div className="card-title">Iphone 14 Pro</div>
            <div className="price">MRP $600 (Inc. of all taxexs)</div>
            <div className="button-container">
              {/* <button class="buy-button" onclick="alert('Button clicked')">Buy</button> */}
            </div>
          </div>
        </div>
        <div className="cards hover:-translate-y-2 ease-in-out duration-200">
          <div className="card-img pt-10"><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072989055" alt="" /></div>
          <div className="card-info">
          <div className="flex justify-center items-center">
            <BsDot className='text-[40px] text-[#645c68]'/>
            <BsDot className='text-[40px] text-[#a2b5cb]'/>
            <BsDot className='text-[40px] text-[#fae375]'/>
          </div>
            <div className="card-title">Iphone 13 Pro Max</div>
            <div className="price">MRP $600 (Inc. of all taxexs)</div>
            <div className="button-container">
              {/* <button class="buy-button" onclick="alert('Button clicked')">Buy</button> */}
            </div>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Products