import React from 'react';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';


const CatTable = ({ movies }) => {
  return (
    <div className='w-full overflow-x-auto lg:overflow-x-visible'>
      <table className='table-auto border border-gray-800 divide-y' style={{ width: 'max-content' }}>
        <thead>
          <tr className='bg-gray-300 border border-gray-800 text-black'>
            <th className='text-xs text-left w-48 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              ID
            </th>
            <th className='text-xs text-left w-[237px] text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Date
            </th>
            <th className='text-xs text-left w-64 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Title
            </th>
            <th className='text-xs text-center  w-48 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} className='border-b border-gray-800'>
              <td className='px-6 py-2'>{movie.id}</td>
              <td className='px-6 py-2'>{movie.date}</td>
              <td className='px-6 py-2'>{movie.title}</td>
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

export default CatTable;
