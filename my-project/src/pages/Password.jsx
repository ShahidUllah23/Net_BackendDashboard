import React from "react";

const Password = () => {
  return (
    <div className="flex flex-col gap-6  bg-[#000025]">
      <h2 className="text-xl font-bold text-white">Change Password</h2>
      <div className="text-sm w-full ">
        <label htmlFor="" className="text-border font-semibold text-slate-500">
          Previous Password
        </label>
        <input
          type="password"
          required
          placeholder="Enter Your Password"
          className="w-full text-sm mt-2 p-5 border border-gray-600 rounded bg-black text-white placeholder:text-slate-500 focus:outline-none"
        />
      </div>
      <div className="text-sm w-full ">
        <label htmlFor="" className="text-border font-semibold text-slate-500">
          New Password
        </label>
        <input
          type="password"
          required
          placeholder="New Password"
          className="w-full text-sm mt-2 p-5 border border-gray-600 rounded bg-black text-white placeholder:text-slate-500 focus:outline-none"
        />
      </div>
      <div className="text-sm w-full ">
        <label htmlFor="" className="text-border font-semibold text-slate-500">
          Confirm Password
        </label>
        <input
          type="password"
          required
          placeholder="Confirm password"
          className="w-full text-sm mt-2 p-5 border border-gray-600 bg-black rounded text-white placeholder:text-slate-500 focus:outline-none"
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
