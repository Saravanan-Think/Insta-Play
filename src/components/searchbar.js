import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';

const HomePageHeader = () => {
  return (
    <View
      style={{
        backgroundColor: '#263F61',
        height: 50,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <TextInput
          placeholder="Search movies"
          placeholderTextColor={'#fff'}
          style={{
            color: '#fff',
            borderWidth: 1,
            borderRadius: 5,
            width: 334,
            height:35,
            paddingStart: 10,
            borderColor: 'grey',
            fontSize:12,
            fontFamily:'Poppins-Medium'
          }}></TextInput>
        <View
          style={{
            position: 'absolute',
            left: 333,
            top: 0,
          }}>
          <LinearGradient
            colors={['#FF9966', '#FF5E62']}
            style={{
              borderTopRightRadius:5,
              borderBottomRightRadius:5
            }}>
            <TouchableOpacity
              style={{
                height: 35,
                width: 30,
                alignItems:'center',
                justifyContent:'center'
              }}>
              <Icon name="search" size={30} color="#fff"></Icon>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default HomePageHeader;
