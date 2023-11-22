import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

const GenreList = ({genreID, selectedGenreName}) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className='text-[30px] font-bold dark:text-white mb-3'>Genre</h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => {setActiveIndex(index); genreID(item.id); selectedGenreName(item.name)}}
          className={`flex gap-2 items-center mb-4 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${
            activeIndex === index ? 'bg-gray-300 dark:bg-gray-600' : ''
          }`}
          style={{ width: 'fit-content' }}
        >
          <img
            src={item.image_background}
            className={`w-[60px] h-[60px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex === index ? 'scale-105' : ''
            }`}
          />
          <div style={{ width: '190px' }}> {/* Set a common width for titles */}
            <h3
              className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
                activeIndex === index ? 'font-bold' : ''
              }`}
            >
              {item.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
