import axios from 'axios'

const key ="78b371c997c9451f80caa4028d39624d";

const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+ key);
const getAllGames = () => axiosCreate.get('/games?key=' + key);
const getGameListByGenreId =(id) => axiosCreate.get('/games?key=' + key + '&genres=' +id)

export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}