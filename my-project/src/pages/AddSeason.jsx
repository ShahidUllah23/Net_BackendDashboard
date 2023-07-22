import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import bbr from '../assets/images/bbr.png'

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
    // Add more items to the data array as needed
  ];

  const [showModal, setShowModal] = useState(false);
  const [posterImage, setPosterImage] = useState(null);
  const [backdropImage, setBackdropImage] = useState(null);

  const [uploadVideo, setUploadVideo] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [posterImagePreviewUrls, setPosterImagePreviewUrls] = useState([]);
  const [backdropImagePreviewUrls, setBackdropImagePreviewUrls] = useState([]);
  ;
  const [movieTrailer, setMovieTrailer] = useState(null);
  const handleMovieTrailerUpload = (e) => {
      const file = e.target.files[0];
      setMovieTrailer(file);
    };

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const openFileDialog = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };
  const openFileDialog2 = () => {
    const fileInput2 = document.getElementById("fileInput2");
    fileInput2.click();
  };
  

  // Function to handle poster image selection
  const handlePosterImageChange = (e) => {
    const file = e.target.files[0];
    setPosterImage(file);
  };
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
  
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setPosterImagePreviewUrls((prevUrls) => [...prevUrls, ...imageUrls]);
  
    // Rest of the code...
  };
  
  const handleImageUpload2 = (e) => {
    const files = Array.from(e.target.files);
  
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setBackdropImagePreviewUrls((prevUrls) => [...prevUrls, ...imageUrls]);
  
    // Rest of the code...
  };

  // Function to handle backdrop image selection
  const handleBackdropImageChange = (e) => {
    const file = e.target.files[0];
    setBackdropImage(file);
  };

  const handleSeasonTrailerChange = (e) => {
    const file = e.target.files[0];
    setSeasonTrailer(file);
  };

  const handUploadChange = (e) => {
    const file = e.target.files[0];
    setUploadVideo(file);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUploadImage(file);
  };

  return (
    <div className="col-span-6 bg-[#000025] rounded-md ">
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-bold text-white">Add Season</h1>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="w-full text-sm">
            <label
              htmlFor=""
              className="text-border font-semibold text-gray-600"
            >
              Season Title
            </label>
            <input
              type="text"
              required
              placeholder="Game of throne"
              className="w-full focus:outline-none rounded-md text-sm mt-2 p-5 border border-gray-600 text-white bg-black placeholder:text-gray-600"
            />
          </div>
          <div className="w-full text-sm">
            <label
              htmlFor=""
              className="text-border font-semibold text-gray-600"
            >
              Total Season
            </label>
            <input
              type="text"
              required
              placeholder="1"
              className="w-full focus:outline-none rounded-md text-sm mt-2 p-5 border border-gray-600 text-white bg-black placeholder:text-gray-600"
            />
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="w-full text-sm">
            <label
              htmlFor=""
              className="text-border font-semibold text-gray-600"
            >
              Creater
            </label>
            <input
              type="text"
              required
              placeholder="Creater"
              className="w-full focus:outline-none rounded-md text-sm mt-2 p-5 border border-gray-600 text-white bg-black placeholder:text-gray-600"
            />
          </div>
          <div className="w-full text-sm">
            <label
              htmlFor=""
              className="text-border font-semibold text-gray-600"
            >
              Release Date
            </label>
            <input
              type="text"
              required
              placeholder="2023"
              className="w-full focus:outline-none rounded-md text-sm mt-2 p-5 border border-gray-600 text-white bg-black placeholder:text-gray-600"
            />
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
        <div className="w-full " onClick={openFileDialog}>
        <p className="text-border pb-2 font-semibold text-sm text-gray-500">
              Poster Images
            </p>
          <div className="border-gray-600 px-6 py-6 border-2 border-dashed bg-black rounded-md cursor-pointer">
            {posterImagePreviewUrls.length > 0 ? (
              posterImagePreviewUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="w-full mx-auto mb-4"
                />
              ))
            ) : (
              <div className=" flex flex-col justify-center items-center">
              <span className=" text-[#E50914] text-3xl">
                    <AiOutlineCloudUpload />
                  </span>
                  <p className="text-sm mt-2  text-white">
                    Drag Your image here
                  </p>
                  <em className="text-sm mt-1 text-border text-gray-600">
                    (only .jpg and .png files will be accepted)
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
          <div className="w-full " onClick={openFileDialog2}>
        <p className="text-border pb-2 font-semibold text-sm text-gray-500">
              BackDrop Images
            </p>
          <div className="border-gray-600 px-6 py-6 border-2 border-dashed bg-black rounded-md cursor-pointer">
            {backdropImagePreviewUrls.length > 0 ? (
              backdropImagePreviewUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="w-full mx-auto mb-4"
                />
              ))
            ) : (
              <div className=" flex flex-col justify-center items-center">
              <span className=" text-[#E50914] text-3xl">
                    <AiOutlineCloudUpload />
                  </span>
                  <p className="text-sm mt-2  text-white">
                    Drag Your image here
                  </p>
                  <em className="text-sm mt-1 text-border text-gray-600">
                    (only .jpg and .png files will be accepted)
                  </em>
              </div>
            )}
          </div>
          <input
            type="file"
            id="fileInput2"
            style={{ display: "none" }}
            multiple
            accept="image/*"
            onChange={handleImageUpload2}
          />
        </div>
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
          <div className="w-full text-sm">
            <label
              htmlFor=""
              className="text-border font-semibold text-gray-500"
            >
              AgeLimit
            </label>
            <input
              type="text"
              required
              placeholder="18+"
              className="w-full focus:outline-none rounded-md text-sm mt-2 p-5 border border-gray-600 text-white bg-black placeholder:text-gray-600"
            />
          </div>
        </div>
        <div className="w-full text-center relative pt-4">
        <p className="text-border font-semibold absolute -top-3 left-0 text-sm text-gray-500">
          Movie Trailer
        </p>
          {movieTrailer ? (
            <video controls className=" object-contain w-full mb-4">
              <source src={URL.createObjectURL(movieTrailer)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div
              className="border-gray-600 px-6 py-8 border-2 border-dashed bg-black rounded-md cursor-pointer"
              onClick={() => {
                const fileInput = document.getElementById("movieTrailerInput");
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
            id="movieTrailerInput"
            style={{ display: "none" }}
            accept="video/mp4"
            onChange={handleMovieTrailerUpload}
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
     
                <div className="w-[300px] object-contain ">
                <p className="text-border block font-semibold pb-2 text-sm text-gray-500">
          Movie Trailer
        </p>
          {movieTrailer ? (
            <video controls className=" object-contain w-full mb-4">
              <source src={URL.createObjectURL(movieTrailer)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div
              className="border-gray-600 px-6 py-6 border-2 border-dashed bg-black rounded-md cursor-pointer"
              onClick={() => {
                const fileInput = document.getElementById("movieTrailerInput");
                fileInput.click();
              }}
            >
              <span className="mx-auto flex justify-center flex-col items-center text-[#E50914] text-3xl">
                <AiOutlineCloudUpload />
              </span>
              <p className="text-sm mt-2 text-white flex justify-center">
                Drag Your video here
              </p>
              <em className="text-sm text-border mt-1 text-gray-600 flex justify-center">
                (only .mp4 files will be Accepted)
              </em>
            </div>
          )}
          <input
            type="file"
            id="movieTrailerInput"
            style={{ display: "none" }}
            accept="video/mp4"
            onChange={handleMovieTrailerUpload}
          />
        </div>
                  <div className="w-full " onClick={openFileDialog}>
        <p className="text-border pb-2 font-semibold text-sm text-gray-500">
              Poster Images
            </p>
          <div className="border-gray-600 px-6 py-6  border-2 border-dashed bg-black rounded-md cursor-pointer">
            {posterImagePreviewUrls.length > 0 ? (
              posterImagePreviewUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Image ${index + 1}`}
                  className=" object-contain w-[200px] h-auto mb-4"
                />
              ))
            ) : (
              <div className=" flex flex-col justify-center items-center">
              <span className=" text-[#E50914] text-3xl">
                    <AiOutlineCloudUpload />
                  </span>
                  <p className="text-sm mt-2  text-white">
                    Drag Your image here
                  </p>
                  <em className="text-sm mt-1 text-border text-gray-600">
                    (only .jpg and .png files will be accepted)
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