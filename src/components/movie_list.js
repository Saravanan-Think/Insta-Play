import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  useColorScheme,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RateIcon from 'react-native-vector-icons/Entypo';
import Banner from './banner';
import PopularMovieList from '../services/popular_movies_list';
import Images from '../services/images';

const MovieList = ({}) => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [details, setDetails] = useState();
  //List of Movies
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=a8d91a25929d2341de07cc8fff37c255&language=en-US&page=1',
    )
      .then(response => response.json())
      .then(json => setData(json.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
    //alert(JSON.stringify(data));
  }, []);
  function fetchData(id) {
    fetch(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=a8d91a25929d2341de07cc8fff37c255&language=en-US',
    )
      .then(response => response.json())
      .then(json => setDetails(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
    //alert(JSON.stringify(details))
  }
  //Home view
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image
              resizeMethod="auto"
              resizeMode="cover"
              style={{width: 355, height: 150}}
              source={{
                uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path,
              }}
            />
            <View>
              <LinearGradient
                colors={['#2B507C', '#1A2B4A', '#2B507C']}
                locations={[0.1, 1, 0.1]}
                style={{width: 355, height: 70}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MovieDetails', {id: details});
                  }}
                  onPressIn={() => {
                    fetchData(item.id);
                  }}
                  style={{
                    paddingStart: 30,
                    paddingEnd: 30,
                    paddingTop: 15,
                    paddingBottom: 15,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#fff',
                          fontFamily: 'Poppins-Medium',
                        }}>
                        {item.original_title.slice(0, 30)}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RateIcon name="star" size={15} color="#FFE234" />
                        <Text
                          style={{
                            fontSize: 14,
                            color: '#fff',
                            fontFamily: 'Poppins-Medium',
                          }}>
                          4.6 / 5
                        </Text>
                      </View>
                    </View>
                    <LinearGradient
                      colors={['#FF9966', '#FF5E62']}
                      style={{
                        borderRadius: 20,
                        height: 30,
                        width: 30,
                      }}></LinearGradient>
                    <RateIcon
                      name="controller-play"
                      size={18}
                      color="#ffff"
                      style={{
                        textAlign: 'center',
                        position: 'absolute',
                        right: 5.5,
                        top: 6,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        )}
        /*  renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )} */
        ListHeaderComponent={({item}) => (
          <Banner
            url={
              'https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg'
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    marginHorizontal: 0,
  },
  item: {
    padding: 10,
    marginVertical: 2,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    backgroundColor: '#121212',
    color: '#FFFFFF',
    paddingTop: 12,
    fontFamily: 'Poppins-Medium',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
});

export default MovieList;
