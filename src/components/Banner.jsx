import React, { useEffect } from 'react'

const Banner = ({gameBanner}) => {

    useEffect(() =>{
        console.log("gameBanner", gameBanner);
    }, [])

  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
            <h2 className='text-[34px] text-white font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white px-2 p-1 w-[95px] h-[42px]'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} className='md:h-[550px] w-full object-cover rounded-xl'/>
    </div>
  )
}

export default Banner