//https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=a8d91a25929d2341de07cc8fff37c255&language=en-US

//Image
const Image = async (id) => {
    let response = await fetch(
      'https://api.themoviedb.org/3/movie/'+id+'/images?api_key=a8d91a25929d2341de07cc8fff37c255&language=en-US'
    );
    let json = await response.json();
    return json.result;
  };
  
  export default Image;
  