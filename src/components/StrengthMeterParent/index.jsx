import React, { useState } from "react";
import PasswordStrengthMeter from "../PasswordStrengthMeter";

const PasswordForm = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <label htmlFor="password" className="block mb-2 text-gray-700">
        Enter Password:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <PasswordStrengthMeter password={password} />
    </div>
  );
};

export default PasswordForm;
