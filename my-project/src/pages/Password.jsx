import React from "react";
import InputField from "./InputField";

const Password = () => {
  return (
    <div className="flex flex-col gap-6  bg-[#000025]">
      <h2 className="text-xl font-bold text-white">Change Password</h2>
      <div className="text-sm w-full ">
        <InputField
          label="Previous Password"
          placeholder="Enter your previous pasword"
          type="password"
        />
      </div>
      <div className="text-sm w-full ">
        <InputField
          label="New Password"
          placeholder="Enter New Password"
          type="password"
        />
      </div>
      <div className="text-sm w-full ">
        <InputField
          label="Confirm Password"
          placeholder="confirm password"
          type="password"
        />
      </div>
      <div className="flex justify-end items-center my-4">
        <button className="font-medium transitions bg-black hover:bg-[#E50914] border border-[#E50914] text-white py-3 px-6 rounded w-full sm:w-auto">
          Change password
        </button>
      </div>
    </div>
  );
};

export default Password;
