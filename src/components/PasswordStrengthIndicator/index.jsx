import React from "react";
import { BiCheck } from "react-icons/bi"

const PasswordStrengthIndicator = ({
    validity: { minChar, number, specialCharAndNumber, upperCase }
}) => {
    return (
        <div className="password-meter space-y-1 text-left">
                <PasswordStrengthIndicatorItem
                    isValid={minChar}
                    text="More than 8 characters"
                />
                <PasswordStrengthIndicatorItem
                    isValid={upperCase}
                    text="Upper and lowercase letters"
                />
                <PasswordStrengthIndicatorItem
                    isValid={specialCharAndNumber}
                    text="At least a number and special character"
                />
        </div>
    );
};

const PasswordStrengthIndicatorItem = ({ isValid, text }) => {
    const highlightClass = isValid
        ? "text-green-700"
        : isValid !== null
        ? "text-red-700"
        : "";
    return <p className={`bg-gig-grayLight-900 text-sm flex items-center w-fit rounded-md ${highlightClass}`}>{isValid && <BiCheck size="20" className="mr-1"/>}{text}</p>;
};

export default PasswordStrengthIndicator;