import React, { useState } from 'react';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import bbr from '../assets/images/bbr.png'
const Table = ({ movies }) => {
    const[data,setdata]=useState(movies)
     
   

    // console.log(data)
  return (
    
       <div className='block  overflow-x-auto lg:overflow-x-visible '>
      <table className='table-auto border border-gray-800 divide-y' style={{ width: 'max-content' }}>
        <thead>
          <tr className='bg-gray-300 border border-gray-800 text-black'>
            <th className='text-xs text-left text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Image
            </th>
            <th className='text-xs text-left md:w-32 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Name
            </th>
            <th className='text-xs text-left md:w-32 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Category
            </th>
            <th className='text-xs text-left md:w-32 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Language
            </th>
            <th className='text-xs text-left text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Year
            </th>
            <th className='text-xs text-left text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Hours
            </th>
            <th className='text-xs text-center md:w-48 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((movie) => (
            <tr key={movie.id} className='border-b border-gray-800'>
              <td className='px-6 py-2'>
                <img src={movie.imageSrc} alt={`Movie ${movie.id}`} className='w-16 h-16' />
              </td>
              <td className='px-6 py-2'>{movie.name}</td>
              <td className='px-6 py-2'>{movie.category}</td>
              <td className='px-6 py-2'>{movie.language}</td>
              <td className='px-6 py-2'>{movie.year}</td>
              <td className='px-6 py-2'>{movie.hours}</td>
              <td className='px-6 py-2 mt-4 flex gap-2 justify-center'>
                {/* Edit Button */}
                <button className='flex items-center justify-center bg-none border-2 border-gray-800 text-gray-500 rounded-md px-3 py-1'>
                  <BsPencilSquare size={16} color='lightgreen' />
                  <span className='pl-2'>Edit</span>
                </button>
                {/* Delete Button */}
                <button className='flex items-center justify-center bg-[#E50914] text-white rounded-md px-2 py-1'>
                  <BsTrash size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default Table;
