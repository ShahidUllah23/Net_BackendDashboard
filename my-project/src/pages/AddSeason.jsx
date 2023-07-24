import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import bbr from "../assets/images/bbr.png";
import PosterImage from "./PosterImageComponent";
import MovieTrailer from "./SeasonTrailerComponent";
import InputField from "./InputField";

const AddSeason = () => {
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

  const [showModal, setShowModal] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [posterImagePreviewUrls, setPosterImagePreviewUrls] = useState([]);
  const [backdropImagePreviewUrls, setBackdropImagePreviewUrls] = useState([]);
  const [posterImagePreviewUrls1, setPosterImagePreviewUrls1] = useState([]);
  const [movieTrailer1, setMovieTrailer1] = useState(null);

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

  const handleImageUpload1 = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setPosterImagePreviewUrls1(imageUrls);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleMovieTrailerUpload = (e) => {
    const file = e.target.files[0];
    setMovieTrailer(file);
  };

  const handleMovieTrailerUpload1 = (e) => {
    const file = e.target.files[0];
    setMovieTrailer1(file);
  };

  return (
    <div className="col-span-6 bg-[#000025] rounded-md ">
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-bold text-white">Add Season</h1>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <InputField label="Season Title" placeholder="Game of throne" type='text' />
          <InputField label="Total Season" placeholder="1" type='text' />
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
            id="fileinput1"
          />

          {/* Backdrop Image */}
          <PosterImage
            title="BackDrop Images"
            handleImageUpload={handleImageUpload2}
            previewUrls={backdropImagePreviewUrls}
            id="fileinput2"
          />
        </div>
        <div className="text-sm w-full">
          <label htmlFor="" className="text-border font-semibold text-gray-500">
            Season Description
          </label>
          <textarea
            className="w-full h-40 mt-2 p-6 text-sm bg-black text-white border border-gray-600 rounded focus:outline-none"
            placeholder="Make it short and sweet"
          ></textarea>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="text-sm w-full">
            <label
              htmlFor=""
              className="text-border font-semibold text-gray-500"
            >
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
          <InputField label="AgeLimit" placeholder="18+" type='text' />
        </div>
        <div className="w-full text-center relative pt-4">
          <MovieTrailer
            movieTrailer={movieTrailer}
            handleMovieTrailerUpload={handleMovieTrailerUpload}
            id="SeasonTrailer"
            title="Season Trailer"
          />
        </div>
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button className="w-full py-4 bg-black border border-[#E50914] border-dashed hover:bg-[#E50914] text-white rounded">
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
                <p className="mx-10">{item.name}</p>
                <div className="flex-rows mt-2 w-full gap-6 mx-9">
                  <button className="w-6 h-6 mx-2 flex-col bg-[#000025] border border-gray-600 text-[#E50914] rounded">
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
        <button
          className="hover:bg-[#E50914] w-full flex-rows gap-6 font-medium text-white py-4 rounded border border-[#E50914]"
          onClick={toggleModal}
        >
          Add Episode
        </button>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="modal-overlay" onClick={toggleModal}></div>
            <div className="modal-container bg-[#000025] border border-gray-600 rounded-lg p-6">
              <div className="modal-close" onClick={toggleModal}>
                &times;
              </div>
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-bold text-white mb-4">
                  Add Episode
                </h2>
                <button
                  type="submit"
                  className="hover:bg-[#E50914] text-white py-2 px-4 rounded border border-[#E50914]"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
              </div>

              {/* Your episode form or content can be placed here */}
              <form action="" className="flex flex-col gap-4">
                <div className="w-full grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    id="episodeTitle"
                    className="rounded-md text-sm p-2 focus:outline-none border border-gray-600 text-white bg-black placeholder-gray-600"
                    placeholder="Enter Episode Title"
                  />
                  <input
                    type="text"
                    id="episodeNumber"
                    className="rounded-md text-sm p-2 focus:outline-none border border-gray-600 text-white bg-black placeholder-gray-600"
                    placeholder="Enter Episode Number"
                  />
                </div>
                <textarea
                  id="episodeDescription"
                  className="rounded-md text-sm p-2 focus:outline-none border border-gray-600 text-white bg-black placeholder-gray-600"
                  placeholder="Enter Episode Description"
                ></textarea>
                <div className="w-full grid md:grid-cols-2 gap-6">
                  <div>
                    <MovieTrailer
                      movieTrailer={movieTrailer1}
                      handleMovieTrailerUpload={handleMovieTrailerUpload1}
                      id="SeasonTrailer1"
                      title="Season Trailer"
                    />
                  </div>
                  <PosterImage
                    title="Poster Images"
                    handleImageUpload={handleImageUpload1}
                    previewUrls={posterImagePreviewUrls1}
                    id="fileinput3"
                  />
                </div>
                <button
                  type="submit"
                  className="hover:bg-[#E50914] text-white py-2 px-4 rounded border border-[#E50914]"
                >
                  Add Episode
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSeason;
