import React from 'react'
import Table from '../components/MovieTable'
import bbr from '../assets/images/bbr.png'
const Movies = () => {
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
            <div className='flex justify-between items-center mb-6'>
                <div>
                    <h2 className='text-xl font-bold text-white'>Movies List</h2>
                </div>
                <div>
                    <button
                        className='border font-medium hover:bg-[#E50914] py-3 px-6 border-[#E50914] text-white bg-none transition-all delay-50 rounded'

                    >
                        Delete All
                    </button>

                </div>
            </div>
            <div className=''>
                <Table movies={recentMoviesData} />
            </div>
        </div>
    )
}

export default Movies