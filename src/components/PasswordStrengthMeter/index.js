import React, { useEffect, useState } from "react";
import zxcvbn from "zxcvbn";
import "./PasswordStrengthMeter.css";

const PasswordStrengthMeter = ({ password }) => {
  const strengthClass = [
    "strength-meter mt-2",
    password.length > 0 ? "visible" : "invisible",
  ]
    .join(" ")
    .trim();
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    strengthChange();
    // eslint-disable-next-line
  }, [password]);

  const strengthChange = () => {
    if (zxcvbn(password).score >= 2) {
      setStrength(2);
      return;
    } else {
      setStrength(zxcvbn(password).score);
    }
  };

  return (
    <>
      <div className={strengthClass}>
        <div className="strength-meter-fill" data-strength={strength}></div>
      </div>
    </>
  );
};
export default PasswordStrengthMeter;
