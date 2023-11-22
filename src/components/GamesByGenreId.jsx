import React, { useEffect } from 'react';

const GamesByGenreId = ({ gameList,selectGenreName}) => {
  useEffect(() => {
    console.log("Gamelist", gameList);
  }, []);

  return (
    <div className='mt-8 mb-11'>
        <h2 className='dark:text-white text-[30px] font-bold'>{selectGenreName} Games</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        {gameList.map((item) => (
            <div key={item.id} className='bg-[#76a8f75e] rounded-lg p-3 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer pb-12 w-full'>
                <img src={item.background_image} alt={item.name} className='w-full h-[80%] rounded-xl object-cover'/>
                <h2 className='dark:text-white text-[20px] mt-2 font-bold'>
                    {item.name}
                    <span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'>{item.metacritic}</span>
                </h2>
                <h2 className='text-gray-500 pb-2'>
                    ⭐{item.rating}        💬{item.reviews_count}        🔥{item.suggestions_count}
                </h2>
                </div>
        ))}
        </div> 
    </div>
    
  );
};

export default GamesByGenreId;
