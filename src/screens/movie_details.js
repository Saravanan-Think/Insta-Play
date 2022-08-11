import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Back from 'react-native-vector-icons/MaterialIcons';
import Language from '../model/language.json'
import HomeHeader from '../components/home_header';

const MovieDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState(route.params.id);
 //alert(JSON.stringify())
  return (
    <View style={{backgroundColor: '#0c111b', flex: 1}}>
      <HomeHeader/>
      <View>
        <TouchableOpacity
          style={{position: 'absolute', top: 5, left: 12, zIndex: 1}}
          onPress={() => navigation.goBack()}>
          <Back
            name="keyboard-backspace"
            style={{color: '#fff', fontSize: 22}}
          />
        </TouchableOpacity>
        <Image
          style={{height: 260, width: 395}}
          source={{
            uri: 'https://image.tmdb.org/t/p/original/' + data.poster_path,
          }}
        />
      </View>
      <View style={{padding: 19}}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 24,
            fontFamily: 'HelveticaNeueLTPro',
            lineHeight: 28.8,
            paddingBottom: 12,
          }}>
          {data.original_title}
        </Text>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 16,
            fontFamily: 'HelveticaNeueLTPro',
            lineHeight: 20,
            paddingBottom: 12,
          }}>
          Rating : {data.vote_average.toFixed(1)} / 10
        </Text>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 16,
            textAlign: 'left',
            fontFamily: 'HelveticaNeueLTPro',
            lineHeight: 24.32,
            paddingBottom: 12,
          }}>
          {data.overview}
        </Text>
        <View style={{flexDirection: 'row', paddingTop: 12}}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                fontFamily: 'HelveticaNeueLTPro',
                lineHeight: 16.8,
              }}>
              Release Date
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 14,
                fontFamily: 'HelveticaNeueLTPro',
                lineHeight: 16.8,
                paddingTop: 13,
              }}>
              Original Language
            </Text>
          </View>
          <View style={{flexDirection: 'column', paddingStart: 30}}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 14,
                fontFamily: 'HelveticaNeueLTPro',
                lineHeight: 16.8,
              }}>
              {new Date(data.release_date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                fontFamily: 'HelveticaNeueLTPro',
                lineHeight: 16.8,
                paddingTop: 13,
              }}>
              {Language[data.original_language].name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieDetails;
