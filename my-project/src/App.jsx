import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SideBar from './components/SideBar'; // Replace with the correct path to your SideBar component
import Home from './pages/Home';
import Movies from './pages/Movies';
import FvtMovies from './pages/FvtMovies';
import User from './pages/User';
import Footer from './components/Footer'
import NavBar from './components/NavBar';
import Password from './pages/Password';
import Categories from './pages/Categories';
import Profile from './pages/Profile';
import AddMovie from './pages/AddMovie';
import AddSeason from './pages/AddSeason';

const App = () => {
  return (
    <>
    
    <Router>
    <NavBar/>
      <div className='min-h-screen  px-6 bg-[#000019]'>
      
        <div className='grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
          <div className='hidden md:block col-span-2 sticky border border-gray-800 bg-[#000025] rounded-md xl:mb-0 mb-5'>
            <SideBar />
          </div>
          <div className='col-span-8 md:col-span-6  rounded-md bg-[#000025] border border-gray-800 p-6'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/addmovie' element={<AddMovie/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/password' element={<Password/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/addseason' element={<AddSeason/>}/>
                
            </Routes>
          </div>
          
        </div>
       
      </div>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
