import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import  SearchBar  from '_components/searchbar';
import Banner from '../components/banner';
import HomeHeader from '../components/home_header';
import MovieList from '../components/movie_list';

const Home = navigation => {
  return (
    <View style={{flex: 1, backgroundColor: '#0c111b'}}>
      <HomeHeader/>
      <SearchBar></SearchBar>
      {/* <Banner/> */}
      <MovieList/>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Home;
