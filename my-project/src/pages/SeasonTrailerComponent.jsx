import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const MovieTrailer = ({ movieTrailer, handleMovieTrailerUpload, title, id }) => {
  return (
    <div className="w-full text-center relative pt-4">
      <p className="text-border font-semibold absolute -top-3 left-0 text-sm text-gray-500">
        {title}
      </p>
      {movieTrailer ? (
        <video controls className="object-contain w-full mb-4">
          <source src={URL.createObjectURL(movieTrailer)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="border-gray-600 px-6 py-8 border-2 border-dashed bg-black rounded-md cursor-pointer"
          onClick={() => {
            const fileInput = document.getElementById(id);
            fileInput.click();
          }}
        >
          <span className="mx-auto flex justify-center flex-col items-center text-[#E50914] text-3xl">
            <AiOutlineCloudUpload />
          </span>
          <p className="text-sm mt-2 text-white flex justify-center">
            Drag Your video here
          </p>
          <em className="text-sm text-border text-gray-600 flex justify-center">
            (only .mp4 files will be Accepted)
          </em>
        </div>
      )}
      <input
        type="file"
        id={id}
        style={{ display: "none" }}
        accept="video/mp4"
        onChange={handleMovieTrailerUpload}
      />
    </div>
  );
};

export default MovieTrailer;
