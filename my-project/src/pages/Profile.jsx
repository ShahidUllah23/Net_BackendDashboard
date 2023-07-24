import React, { useState } from "react";
import PosterImage from "./PosterImageComponent";
import InputField from "./InputField";

const Profile = () => {
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviewUrls(imageUrls);
  };

  return (
    <div className="col-span-6 rounded-md   bg-[#000025]">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl text-white font-bold">Profile</h2>
        <div className="w-full text-center">
          <PosterImage
            title="Profile Image"
            handleImageUpload={handleImageUpload}
            previewUrls={imagePreviewUrls}
            id="profileImage"
          />
        </div>
        <InputField label="Full Name" placeholder="Enter Your Name" type='text' />
        <InputField label="Email" placeholder="Johndeo@gmail.com" type='email' />
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
