import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import bbr from "../assets/images/bbr.png";
import PosterImage from "./PosterImageComponent";
import MovieTrailer from "./SeasonTrailerComponent";
import InputField from "./InputField";

const AddMovie = () => {
  const data = [
    {
      img: bbr,
      name: "Gul Chahat 1",
    },
    {
      img: bbr,
      name: "Gul Chahat 2",
    },
  ];
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [posterImagePreviewUrls, setPosterImagePreviewUrls] = useState([]);
  const [backdropImagePreviewUrls, setBackdropImagePreviewUrls] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setPosterImagePreviewUrls(imageUrls);
  };

  const handleImageUpload2 = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setBackdropImagePreviewUrls(imageUrls);
  };

  const handleMovieTrailerUpload = (e) => {
    const file = e.target.files[0];
    setMovieTrailer(file);
  };

  return (
    <div className="col-span-6 bg-[#000025] rounded-md  ">
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-bold text-white">Add Movie</h1>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <InputField label="Movie Title" placeholder="Game of throne" type='text' />
          <InputField label="Hours" placeholder="1" type='text' />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <InputField label="Creator" placeholder="Creator" type='text' />
          <InputField label="Release date" placeholder="2023" type='text' />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* Poster Image */}
          <PosterImage
            title="Poster Images"
            handleImageUpload={handleImageUpload}
            previewUrls={posterImagePreviewUrls}
            id="posterImage"
          />

          {/* Backdrop Image */}
          <PosterImage
            title="BackDrop Images"
            handleImageUpload={handleImageUpload2}
            previewUrls={backdropImagePreviewUrls}
            id="backdropImage"
          />
        </div>
        <div className="text-sm w-full">
          <label htmlFor="" className="text-border font-semibold text-gray-500">
            Movie Description
          </label>
          <textarea
            className="w-full h-40 mt-2 p-6 text-sm bg-black border placeholder:text-gray-600 border-gray-600 text-white rounded focus:outline-none"
            placeholder="Make it short and sweet"
          ></textarea>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="text-sm w-full">
            <label
              htmlFor=""
              className="text-border font-semibold text-gray-500"
            >
              Ispaid
            </label>
            <select
              name=""
              id=""
              className="w-full h-[3.7rem] mt-2 px-6 py-4 bg-black text-gray-500 border border-gray-600 rounded focus:outline-none"
            >
              <option value="">Free</option>
              <option value="">Paid</option>
            </select>
          </div>
          <InputField label="AgeLimit" placeholder="18+" type='text' />
        </div>
        <div className="text-sm w-full">
          <label htmlFor="" className="text-border font-semibold text-gray-500">
            Genre
          </label>
          <select
            name=""
            id=""
            className="w-full h-[3.7rem] mt-2 px-6 py-4 bg-black text-gray-500 border border-gray-600 rounded focus:outline-none"
          >
            <option value="">Romantic</option>
            <option value="">Action</option>
            <option value="">Drama</option>
            <option value="">Comedy</option>
            <option value="">Adventure</option>
            <option value="">Sports</option>
            <option value="">Fantasy</option>
            <option value="">Musicle</option>
            <option value="">Thriller</option>
            <option value="">Historical</option>
            <option value="">Science</option>
            <option value="">Mystry</option>
            <option value="">Western</option>
          </select>
        </div>
        <div className="w-full text-center relative pt-4">
          <MovieTrailer
            movieTrailer={movieTrailer}
            handleMovieTrailerUpload={handleMovieTrailerUpload}
            id="MovieTrailer"
            title="Movie Trailer"
          />
        </div>

        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button className="w-full py-4 bg-black border border-[#E50914] hover:bg-[#E50914] text-white rounded">
            Add Cast
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="p-2 italic text-xs text-gray-500 rounded flex flex-col bg-black border border-gray-600"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p className="flex justify-center">{item.name}</p>
                <div className="flex-row mt-2  w-full gap-2 flex justify-center">
                  <button className="w-6 h-6  flex-col bg-[#000025] border border-gray-600 text-[#E50914] rounded">
                    <MdDelete className="mt-1 mx-1" size={15} />
                  </button>
                  <button className="w-6 h-6 flex-col bg-[#000025] border border-gray-600 text-green-600 rounded text-center">
                    <BiEdit className="mt-1 mx-1" size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-[#E50914] w-full flex-rows gap-6 font-medium text-white py-4 rounded">
          Publish Movie
        </button>
      </div>
    </div>
  );
};

export default AddMovie;
