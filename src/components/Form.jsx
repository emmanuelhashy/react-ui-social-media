import React, { useState } from "react";

const Input = ({onCardNumberChange, onCVVNumberChange, onNameChange, onExpiryDateChange }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cVVNumber, setCVVNumber] = useState("");
  const [name, setName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleCardNumberChange = (e) => {
    const formattedNumber = e.target.value.replace(/\D/g, "").slice(0, 16); // Allows only digits, max 16 characters
    setCardNumber(formattedNumber);
    onCardNumberChange(formattedNumber);
  };

  const handleCVVNumberChange = (e) => {
    const formattedNumber = e.target.value.replace(/\D/g, "").slice(0, 3); // Allows only digits, max 3 characters
    setCVVNumber(formattedNumber);
    onCVVNumberChange(formattedNumber);
  };

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    onNameChange(nameValue);
  };

  const handleExpiryDateChange = (e) => {
    const formattedDate = e.target.value.replace(/[^0-9/]/g, "").slice(0, 5);
    setExpiryDate(formattedDate);
    onExpiryDateChange(formattedDate);
  };

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
            value={name}
            onChange={handleNameChange}
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
        value={cardNumber.replace(/(\d{4})/g, "$1 ").trim()} // Format as 'XXXX XXXX XXXX XXXX'
        onChange={handleCardNumberChange}
        className="block w-full rounded-sm border-0 py-2.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="0000 0000 0000 0000"
      />
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="fa fa-credit-card"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="w-[150px]">
          <p className="text-gray-600 text-sm">Expire</p>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              class="block w-full rounded-sm border-0 py-2.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="MM/YY"
              value={expiryDate}
            onChange={handleExpiryDateChange}
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="fa fa-credit-card"></i>
            </div>
          </div>
        </div>
        <div className="w-[150px]">
          <p className="text-gray-600 text-sm">CVV</p>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              class="block w-full rounded-sm border-0 py-2.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="000"
              value={cVVNumber.replace(/(\d{4})/g, "$1 ").trim()} // Format as 'XXXX XXXX XXXX XXXX'
        onChange={handleCVVNumberChange}
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
