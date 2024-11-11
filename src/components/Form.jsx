import React from "react";

const Input = () => {
  return (
    <div class="bg-white w-[350px] flex flex-col space-y-6">
    <p className="text-2xl font-bold text-center">Create Virtual Card</p>
      <div className="">
        <p className="text-gray-600 text-sm">Card Holder Name</p>
        <div class="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            class="block w-full rounded-sm border-0 py-2.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Full Name"
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="fa fa-user"></i>
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-600 text-sm">Card Number</p>
        <div class="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            class="block w-full rounded-sm border-0 py-2.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="000 00000 000"
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="fa fa-credit-card"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="w-[150px]">
          <p className="text-gray-600 text-sm">Card Number</p>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              class="block w-full rounded-sm border-0 py-2.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="000 00000 000"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="fa fa-credit-card"></i>
            </div>
          </div>
        </div>
        <div className="w-[150px]">
          <p className="text-gray-600 text-sm">Card Number</p>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              class="block w-full rounded-sm border-0 py-2.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="000 00000 000"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="fa fa-credit-card"></i>
            </div>
          </div>
        </div>
      </div>
      <button className="w-full text-center py-3 rounded-md bg-violet-700 text-white">
        Confirm
      </button>
    </div>
  );
};

export default Input;
