import React, { useState } from 'react';

const PasswordStrengthIndicator = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  const checkStrength = (pwd) => {
    let strengthLevel = 0;

    if (pwd.length >= 8) strengthLevel++;
    if (/[A-Z]/.test(pwd)) strengthLevel++;
    if (/[0-9]/.test(pwd)) strengthLevel++;
    if (/[^A-Za-z0-9]/.test(pwd)) strengthLevel++;

    setStrength(strengthLevel);
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    checkStrength(pwd);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-8 bg-gray-100 rounded-lg w-full max-w-md mx-auto mt-10 shadow-lg">
      <label htmlFor="password" className="text-lg font-medium text-gray-700">
        Enter Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="w-full h-1 mt-2 bg-gray-300 rounded flex">
        <div
          className={`h-full transition-all duration-300 flex-1 rounded-l ${strength >= 1 ? 'bg-red-500' : 'bg-gray-300'}`}
        />
        <div
          className={`h-full transition-all duration-300 flex-1 ${strength >= 2 ? 'bg-yellow-500' : 'bg-gray-300'}`}
        />
        <div
          className={`h-full transition-all duration-300 flex-1 ${strength >= 3 ? 'bg-yellow-500' : 'bg-gray-300'}`}
        />
        <div
          className={`h-full transition-all duration-300 flex-1 rounded-r ${strength === 4 ? 'bg-green-500' : 'bg-gray-300'}`}
        />
      </div>

      <p
        className={`text-sm font-semibold ${
          strength === 1 ? 'text-red-500' : ''
        } ${strength === 2 || strength === 3 ? 'text-yellow-500' : ''} ${
          strength === 4 ? 'text-green-500' : ''
        }`}
      >
        {strength === 0
          ? 'Enter a password'
          : strength === 1
          ? 'Password Strength: Weak'
          : strength === 2 || strength === 3
          ? 'Password Strength: Moderate'
          : 'Password Strength: Strong'}
      </p>
    </div>
  );
};

export default PasswordStrengthIndicator;
