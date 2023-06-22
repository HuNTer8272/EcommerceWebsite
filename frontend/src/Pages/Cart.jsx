import React from 'react';

function Cart() {
  return (
    <div className=" bg-gray-100 py-32">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src="https://www.samsung.com/global/galaxy/main/images/kv-galaxy-s23_s.jpg" alt="product-image" className="w-full rounded-lg sm:w-40" />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900 ">Samsung Galaxy S23</h2>
                <p className="mt-1 text-xs text-gray-700 line-clamp-1">Experience the Samsung S23 - a game-changer in mobile technology. Elevate your smartphone experience today. </p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-l-black hover:text-blue-50"> - </span>
                  <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" defaultValue={1} min={1} />
                  <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-l-black hover:text-blue-50"> + </span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">$600</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">Nike Air Max 270</h2>
                <p className="mt-1 text-xs text-gray-700 line-clamp-1">Elevate your style and performance with Nike Air Max, the pinnacle of athletic footwear designed to empower you to reach new heights and unleash your full potential.</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-l-black hover:text-blue-50"> - </span>
                  <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" defaultValue={1} min={1} />
                  <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-l-black hover:text-blue-50"> + </span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">$450</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$1050</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">$1054.99 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-l-black py-1.5 font-medium text-blue-50 hover:bg-[#313131]">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;