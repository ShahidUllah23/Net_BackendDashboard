import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import CatTable from '../components/CatTable';
import bbr from '../assets/images/bbr.png';
import Modal from 'react-modal';
const Categories = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const recentMoviesData = [
        {
          id: 1,
          date: '2023-07-22',
          title: 'Movie 1',
          imageSrc: bbr,
        },
        {
          id: 2,
          date: '2022-11-15',
          title: 'Movie 2',
          imageSrc: bbr,
        },
        // Add more data for categories
      ];

  return (
    <div className='text-white w-full overflow-x-auto md:overflow-x-visible'>
    <div className='flex justify-between items-center mb-6'>
      <div>
        <h2 className='text-xl font-bold text-white'>Favourite List</h2>
      </div>
      <div>
        <button
          className='border font-medium hover:bg-[#000025] bg-[#E50914] py-3 px-6 border-[#E50914] text-white bg-none transition-all delay-50 rounded flex items-center'
          onClick={openModal}
        >
          Create
          <span className='pl-2'>
            <FaPlus size={18} />
          </span>
        </button>
      </div>
    </div>
    <div className=''>
      <CatTable movies={recentMoviesData} />
    </div>

    {/* Modal */}
    {isModalOpen && (
            <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center   bg-black bg-opacity-60">
              <div className="rounded-3xl bg-[#000025] w-2/5 border border-gray-800 h-[45%] px-8 py-6 shadow-lg">
                <h2 className="mb-2 text-3xl items-center mt-3 flex justify-center font-bold">Create</h2>
                
                <form >
                <p className='text-gray-500 mt-4   text-sm'>Category Name</p>
                <input
          type="password"
          required
          placeholder="Actions"
          className="w-full text-sm  mt-4 p-5 border border-gray-600 bg-black rounded text-white placeholder:text-slate-500 focus:outline-none"
        />
                  <div className="pt-6">

                    <button
                      type="button"
                      className="rounded bg-[#E50914] w-full px-4 py-4 text-white hover:bg-red-700"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    
                  </div>
                </form>
              </div>
            </div>
          )}
  </div>
  )
}

export default Categories