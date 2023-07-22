import React from 'react';
import { BsTrash } from 'react-icons/bs';

const UserTable = ({ movies }) => {
  return (
    <div className='w-full text-white overflow-x-auto lg:overflow-x-visible'>
      <table className='table-auto border border-gray-800 divide-y' style={{ width: 'max-content' }}>
        <thead>
          <tr className='bg-gray-300 border border-gray-800 text-black'>
            <th className='text-xs text-left text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Image
            </th>
            <th className='text-xs text-left w-32 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              ID
            </th>
            <th className='text-xs text-left w-32 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Full Name
            </th>
            <th className='text-xs text-left w-32 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Email
            </th>
            <th className='text-xs text-left w-32 text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Date
            </th>
            <th className='text-xs text-center w-[180px] text-main font-semibold px-6 py-2 uppercase' scope='col'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {movies?.map((user) => (
            <tr key={user.id} className='border-b border-gray-800'>
              <td className='px-6 py-2'>
                <img src={user.imageSrc} alt={`User ${user.id}`} className='w-16 h-16' />
              </td>
              <td className='px-6 py-2'>{user.id}</td>
              <td className='px-6 py-2'>{user.fullName}</td>
              <td className='px-6 py-2'>{user.email}</td>
              <td className='px-6 py-2'>{user.date}</td>
              <td className='px-6 py-2 pt-3 mt-4 flex gap-2 justify-center'>
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

export default UserTable;
