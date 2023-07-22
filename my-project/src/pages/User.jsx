import React from 'react';
import UserTable from '../components/UserTable';
import bbr from '../assets/images/bbr.png'
const User = () => {
  // Dummy user data for the user table
  const userData = [
    {
      id: 1,
      imageSrc: bbr,
      fullName: 'John Doe',
      email: 'john@example.com',
      date: '2023-07-20',
    },
    {
      id: 2,
      imageSrc: bbr,
      fullName: 'Jane Smith',
      email: 'jane@example.com',
      date: '2023-07-21',
    },
    {
        id: 3,
        imageSrc: bbr,
        fullName: 'Jane Smith',
        email: 'jane@example.com',
        date: '2023-07-21',
      },
      
    // Add more user data as needed
  ];

  return (
    <div className='text-white '>
    <div className='flex justify-between items-center mb-6'>
        <div>
            <h2 className='text-xl font-bold text-white'>Users</h2>
        </div>

    </div>
    <div className=''>
        <UserTable movies={userData} />
    </div>
</div>
  );
};

export default User;
