import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const ProfileDropdown = () => {
  const dropdownRef = useRef(null);
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout");
  };

  return (
    <div ref={dropdownRef} className="bg-[#000019] absolute right-4 top-[67px] w-40 rounded-md border border-[#E50914]">
      <button
        className="block w-full text-left px-4 py-2 text-white hover:bg-[#E50914]"
        onClick={() => console.log("Profile Settings")}
      >
        Profile Settings
      </button>
      <button
        className="block w-full text-left px-4 py-2 text-white hover:bg-[#E50914]"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenu(!isMenu);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const menuItems = [
    { id: "dashboard", title: "Dashboard", link: "/" },
    { id: "movies", title: "Movies List", link: "/movies" },
    { id: "addmovies", title: "Add Movies", link: "/addmovie" },
    { id: "categories", title: "Categories", link: "/categories" },
    { id: "user", title: "Users", link: "/user" },
    { id: "profile", title: "Update Profile", link: "/profile" },
    { id: "password", title: "Change Password", link: "/password" },
  ];

  // Function to check if it's a small screen
  const isSmallScreen = () => {
    return window.innerWidth < 768;
  };

  const handlemenu = () => {
    if (!isSmallScreen()) {
      setIsMenu(!isMenu);
    }
  };

  return (
    <div className="bg-[#000019]  text-white px-6  items-center relative">
      <div className="flex justify-between">
        <div className="container py-4 gap-16 flex items-center">
          <div className="">
            <a href="/">
              <img
                src={logo}
                alt="logo"
                className="w-full h-14 object-contain"
              />
            </a>
          </div>
        </div>
        <div className="flex py-4">
          <div className="w-[400px] hidden md:flex justify-between">
            <button
              type="submit"
              className="bg-[#E50914] w-12 h-12 border border-[#E50914] rounded-l-md text-white items-center absolute"
            >
              <FaSearch className="text-bg-[#E50914] mx-4" size={15} />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="font-medium placeholder:text-gray-600 focus:outline-none text-sm w-11/12 h-12 bg-gray-300 border-none rounded-md px-2 text-black"
              style={{ paddingLeft: "65px" }}
            />
          </div>
          <div className="pt-2 flex">
            <div className="hover:text-[#E50914] transitions text-white hidden md:flex">
              <FaUser
                className="text-white hover:text-[#E50914] cursor-pointer"
                size={30}
                onClick={handlemenu}
              />
            </div>
            <div
              className="rounded-full text-xs items-center cursor-pointer justify-center md:hidden flex"
              onClick={handleMenuToggle}
            >
              <FaBars size={30} />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden py-2`}>
        <ul className="space-y-1 text-white">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              exact
              to={item.link}
              activeClassName="text-purple-500"
              className="hover:bg-gray-700"
            >
              <li className="px-4 py-2 my-4 cursor-pointer font-medium capitalize">
                {item.title}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      {/* Dropdown menu */}
      {!isSmallScreen() && isMenu && <ProfileDropdown />}
    </div>
  );
};

export default NavBar;
