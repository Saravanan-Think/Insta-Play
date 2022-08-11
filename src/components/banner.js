import React from 'react';
import {View, Image, Text} from 'react-native';

const Banner = (props) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Image
        style={{width: 395, height: 130, resizeMode:'cover'}}
        source={{
          uri: props.url,
        }}></Image>
      <Text
        style={{
          fontSize: 18,
          backgroundColor: '#121212',
          color: '#FFFFFF',
          paddingTop: 12,
          paddingStart:14,
          fontFamily: 'Poppins-Medium',
        }}>
        Trending
      </Text>
    </View>
  );
};

export default Banner;
