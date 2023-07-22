
import { BsListUl } from 'react-icons/bs';
import Table from '../components/MovieTable';
import bbr from '../assets/images/bbr.png'
const Home = () => {
    const recentMoviesData = [
        {
          id: 1,
          imageSrc: bbr,
          name: 'Movie 1',
          category: 'Action',
          language: 'English',
          year: '2023',
          hours: '2h 15m',
        },
        {
          id: 2,
          imageSrc: bbr,
          name: 'Movie 2',
          category: 'Comedy',
          language: 'Spanish',
          year: '2022',
          hours: '1h 45m',
        },
        {
            id: 2,
            imageSrc: bbr,
            name: 'Movie 2',
            category: 'Comedy',
            language: 'Spanish',
            year: '2022',
            hours: '1h 45m',
          },
          {
            id: 2,
            imageSrc: bbr,
            name: 'Movie 2',
            category: 'Comedy',
            language: 'Spanish',
            year: '2022',
            hours: '1h 45m',
          },
          {
            id: 2,
            imageSrc: bbr,
            name: 'Movie 2',
            category: 'Comedy',
            language: 'Spanish',
            year: '2022',
            hours: '1h 45m',
          },
          {
            id: 2,
            imageSrc: bbr,
            name: 'Movie 2',
            category: 'Comedy',
            language: 'Spanish',
            year: '2022',
            hours: '1h 45m',
          },
        // Add more recent movie data as needed
      ];

  return (
    <div className='text-white'>
    <div>
      <h2 className='text-xl font-bold text-white'>Dashboard</h2>
    </div>
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
      <div className='p-4 rounded bg-[#000015] border-none grid grid-cols-4 gap-2'>
        <div className='col-span-1 rounded-full h-12 w-12 flex-col bg-orange-600 flex items-center justify-center'>
          <BsListUl size={20} />
        </div>
        <div className='col-span-3'>
          <h2>Total Movies</h2>
          <p className='mt-2 font-bold'>90</p>
        </div>
      </div>
      <div className='p-4 rounded bg-[#000015] border-none grid grid-cols-4 gap-2'>
        <div className='col-span-1 rounded-full h-12 w-12 flex-col bg-blue-700 flex items-center justify-center'>
          <BsListUl size={20} />
        </div>
        <div className='col-span-3'>
          <h2>Total Categories</h2>
          <p className='mt-2 font-bold'>8</p>
        </div>
      </div>
      <div className='p-4 rounded bg-[#000015] border-none grid grid-cols-4 gap-2'>
        <div className='col-span-1 rounded-full h-12 w-12 flex-col bg-green-600 flex items-center justify-center'>
          <BsListUl size={20} />
        </div>
        <div className='col-span-3'>
          <h2>Total Users</h2>
          <p className='mt-2 font-bold'>134</p>
        </div>
      </div>
  
    </div>
    <div className="">
        <h3 className='text-md font-medium my-6 text-opacity-100 text-gray-500'>Recent Movies</h3>
        <Table movies={recentMoviesData}/>
      </div>
  </div>
  );
};

export default Home;
