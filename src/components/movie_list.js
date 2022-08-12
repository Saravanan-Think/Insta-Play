import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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
  ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RateIcon from 'react-native-vector-icons/Entypo';
import Banner from './banner';
import { fetchPopularMovies } from '../services/https';
import Pagination from './pagination';
import ArrowIcon from 'react-native-vector-icons/AntDesign';



const MovieList = ({ }) => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [numbers, setNumbers] = useState();
  const [ref, setRef] = useState(null);

  const generatePageNumber = (value) => {
    let numbers = []
    for (var i = 0; value > i; i++) {
      if (i < 100) {
        numbers.push({ key: i + 1, title: i + 1 });
      }
    }
    setNumbers(numbers)
  }
  //List of Movies
  useEffect(() => {
    async function getPopularMovies() {
      const popular_movies = await fetchPopularMovies(1);
      setData(popular_movies.results);
      generatePageNumber(popular_movies.total_pages);
      setLoading(false)
      //alert(JSON.stringify(popular_movies))
    }
    getPopularMovies();
  }, []);

  //Home view
  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <ActivityIndicator color={"#fff"} />}
      <FlatList
        ref={(ref) => {
          setRef(ref);
        }}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              resizeMethod="auto"
              resizeMode="cover"
              style={{ width: 355, height: 150 }}
              source={{
                uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path,
              }}
            />
            <View>
              <LinearGradient
                colors={['#2B507C', '#1A2B4A', '#2B507C']}
                locations={[0.1, 1, 0.1]}
                style={{ width: 355, height: 70 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MovieDetails', { id: item.id });
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
                    <View style={{ flexDirection: 'column' }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#fff',
                          fontFamily: 'Poppins-Medium',
                        }}>
                        {item.original_title}
                      </Text>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
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
        ListHeaderComponent={({ item }) => (
          <Banner
            url={
              'https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg'
            }
          />
        )}
        ListFooterComponent={() => (
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 20 }}>
            <ArrowIcon name='left' color={'#fff'} size={20}></ArrowIcon>
            <FlatList horizontal={true}
              data={numbers} renderItem={({ item }) => (
                <TouchableOpacity onPress={async () => {
                  const pageByMovies = await fetchPopularMovies(item.key);
                  setData(pageByMovies.results);
                  ref.scrollToOffset({
                    offset: 0,
                    animated: true
                  })
                }}>
                  <Text style={{ color: '#fff', padding: 10, fontSize: 15 }}>{item.title}</Text>
                </TouchableOpacity>
              )} />
            <ArrowIcon name='right' color={'#fff'} size={20}></ArrowIcon>
          </View>
        )}
        ListFooterComponentStyle={{
          flex: 0.3,
          marginHorizontal: 100
        }} />
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
