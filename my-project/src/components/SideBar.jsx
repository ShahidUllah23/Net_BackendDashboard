import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { BsListUl } from 'react-icons/bs';
import { RiMovie2Line } from 'react-icons/ri';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { LuSettings } from 'react-icons/lu';
import { AiFillHeart } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';

const SideBar = () => {
  const sidebarItems = [
    { icon: RxDashboard, title: 'Dashboard', link: '/' },
    { icon: BsListUl, title: 'Movies List', link: '/movies' },
    { icon: RiMovie2Line, title: 'Add Movie', link: '/addmovie' },
    { icon: RiMovie2Line, title: 'Add Season', link: '/addseason' },
    { icon: MdOutlineDashboardCustomize, title: 'Categories', link: '/categories' },
    { icon: FaUsers, title: 'Users', link: '/user' },
    { icon: LuSettings, title: 'Update Profile', link: '/profile' },
    // { icon: AiFillHeart, title: 'Favorite Movies', link: '/fvtMovies' },
    { icon: RiLockPasswordFill, title: 'Change Password', link: '/password' },
  ];

  const currentLocation = useLocation();

  return (
    <div className='text-white'>
      {sidebarItems.map((item, index) => (
        <NavLink
          to={item.link}
          key={index}
          className={` rounded font-medium text-sm transition flex gap-3 items-center p-4  hover:bg-[#000015] ${
            currentLocation.pathname === item.link ? 'bg-gray-300 text-[#E50914] hover:bg-gray-300   ' : ''
          }`}
          activeClassName='bg-gray-300 text-[#E50914] hover:bg-gray-300 hover:text-red-500'
        >
          <item.icon />
          <p>{item.title}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
