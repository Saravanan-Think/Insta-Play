import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = 'a8d91a25929d2341de07cc8fff37c255';

//Popular Moviee collection
export async function fetchPopularMovies(page) {
  let url =
    'https://api.themoviedb.org/3/movie/popular?api_key=' +
    API_KEY +
    '&language=en-US&page='+page;
  //console.log(url);
  const response = await axios.get(url);
  return response.data;
}


const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}