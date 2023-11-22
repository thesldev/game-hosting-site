import React, { useEffect, useState } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../components/Banner'
import TrendingGames from '../components/TrendingGames'
import GamesByGenreId from '../components/GamesByGenreId'

const Home = () => {

  const [allgamelList, setAllgamelList] = useState() ;
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [selectGenreName, setSelectGenreName] = useState('Action');

  useEffect(() =>{
    getAllGamesList();
    getGameListByGenresId(4);
  },[])

  const getAllGamesList = () => {
    GlobalApi.getAllGames() // Add parentheses here to call the function
      .then((resp) => {
        console.log(resp.data.results); // 'results' should be used instead of 'result'
        setAllgamelList(resp.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const getGameListByGenresId =(id) =>{
    GlobalApi.getGameListByGenreId(id).then((resp) =>{
      console.log("Game List By Genre",resp.data.results);
      setGameListByGenre(resp.data.results)
    })
  }

  return (
    <div className='grid grid-cols-4 px-4 mb-5 gap-3'>
        <div className='hidden md:block'>
            <GenreList  genreID = {(genreID) =>getGameListByGenresId(genreID)}
            selectedGenreName={(name) =>setSelectGenreName(name)}/>
        </div>
        <div className='col-span-4 md:col-span-3 h-full'>
          {allgamelList?.length>0 && gameListByGenre.length>0?
          <div>
            <Banner gameBanner={allgamelList[0]}/> 
            <TrendingGames gameList={allgamelList}/>
            <GamesByGenreId gameList={gameListByGenre} selectGenreName={selectGenreName}/>
          </div> 
            
            :null} 
        </div> 
    </div>
    
  )
}

export default Home