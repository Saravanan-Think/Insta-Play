import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';

import MaskedView from '@react-native-community/masked-view';

const HomeHeader = () => {
  return (
    <View
      style={{
        backgroundColor: '#263F61',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingStart: 28,
      }}>
      <View style={{flexDirection: 'row'}}>
        <LinearGradient
          colors={['#FF5E62', '#FF9966']}
          style={{width: 5, height: 19, top: 3.8}}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 22.6,
              fontFamily: 'BigJohnPRO-Bold',
              paddingStart: 15,
              color: '#ffff',
            }}>
            I
          </Text>
        </LinearGradient>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 22.6,
            fontFamily: 'BigJohnPRO-Bold',
            color: '#ffff',
          }}>
          nsta Pl
        </Text>
        <MaskedView
          style={{flexDirection: 'row', top: 3}}
          maskElement={
            <View
              style={{
                backgroundColor: 'transparent',
              }}>
              <Icon name="controller-play" size={22} color="red" style={{textAlign:'left'}}/>
            </View>
          }>
          <LinearGradient
            colors={['#FF5E62', '#FF9966']}
            style={{width:20}}
          />
        </MaskedView>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 22.6,
            fontFamily: 'BigJohnPRO-Bold',
            color: '#ffff',
          }}>
          y
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
