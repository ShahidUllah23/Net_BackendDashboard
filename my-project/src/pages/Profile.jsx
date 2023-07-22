import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Profile = () => {
    const [imagePreviewUrls, setImagePreviewUrls] = useState([]);
    const [productImages, setProductImages] = useState([]);// Assuming you have this state defined

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviewUrls((prevUrls) => [...prevUrls, ...imageUrls]);

    setProductImages((prevImages) => [...prevImages, ...files]);
  };
  const openFileDialog = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  return (
    <div className="col-span-6 rounded-md   bg-[#000025]">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl text-white font-bold">Profile</h2>
        <div className="w-full text-center" onClick={openFileDialog}>
         
        <div className="w-full text-center" onClick={openFileDialog}>
          <div className="border-gray-600 px-6 py-8 border-2 border-dashed bg-black rounded-md cursor-pointer">
            {imagePreviewUrls.length > 0 ? (
              imagePreviewUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="w-full mx-auto mb-4"
                />
              ))
            ) : (
              <div>
                <span className="mx-auto flex justify-center flex-col items-center text-[#E50914] text-3xl">
                  <AiOutlineCloudUpload />
                </span>
                <p className="text-sm mt-2 text-white flex justify-center">
                  Drag Your image here
                </p>
                <em className="text-sm text-border text-gray-600 flex justify-center">
                  (only .jpg and .png files will be Accepted)
                </em>
              </div>
            )}
          </div>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        </div>
        <div className="text-sm w-full">
          <label htmlFor="" className="text-border font-semibold text-gray-600">
            FullName
          </label>
          <input
            required
            type="text"
            placeholder="Netflixo React Tailwind"
            className="w-full text-sm mt-2 p-5 border border-gray-600 rounded text-white focus:outline-none bg-black"
          />
        </div>
        <div className="text-sm w-full">
          <label htmlFor="" className="text-border font-semibold text-gray-600">
            Email
          </label>
          <input
            required
            type="text"
            placeholder="Netflixo@gmail.com"
            className="w-full text-sm mt-2 p-5 border border-gray-600 rounded text-white focus:outline-none bg-black"
          />
        </div>
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row items-center justify-between my-4 w-full">
          <button className="bg-[#E50914] font-medium transitions hover:bg-[#000025] border border-[#E50914] text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className="bg-[#000025] font-medium transitions hover:bg-[#E50914] border border-[#E50914] text-white py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;