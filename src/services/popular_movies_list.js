//Movie list
const PopularMovieList = async () => {
  let response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=a8d91a25929d2341de07cc8fff37c255&language=en-US&page=1'
  );
  let json = await response.json();
  return json.result;
};

export default PopularMovieList;
