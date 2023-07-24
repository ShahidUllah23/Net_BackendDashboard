import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const PosterImage = ({ handleImageUpload, title, previewUrls, id }) => {
  const openFileDialog = () => {
    const fileInput = document.getElementById(id);
    fileInput.click();
  };

  return (
    <div className="w-full">
      <p className="text-border pb-2 font-semibold text-sm text-gray-500">
        {title}
      </p>
      <div
        className="border-gray-600 px-6 py-6 border-2 border-dashed bg-black rounded-md cursor-pointer"
        onClick={openFileDialog}
      >
        {previewUrls.length > 0 ? (
          previewUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              className="object-contain w-full mb-4"
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center">
            <span className="text-[#E50914] text-3xl">
              <AiOutlineCloudUpload />
            </span>
            <p className="text-sm mt-2 text-white">Drag Your image here</p>
            <em className="text-sm mt-1 text-border text-gray-600">
              (only .jpg and .png files will be accepted)
            </em>
          </div>
        )}
      </div>
      <input
        type="file"
        id={id}
        style={{ display: "none" }}
        multiple
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default PosterImage;
