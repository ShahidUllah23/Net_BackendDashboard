import React from "react";

const InputField = ({ label, placeholder, type }) => {
  return (
    <div className="w-full text-sm">
      <label htmlFor="" className="text-border font-semibold text-gray-600">
        {label}
      </label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="w-full focus:outline-none rounded-md text-sm mt-2 p-5 border border-gray-600 text-white bg-black placeholder:text-gray-600"
      />
    </div>
  );
};

export default InputField;