import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/movie_details';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerTitleStyle: {fontFamily: 'BigJohnPRO-Bold'},
            title: 'Insta Play',
            headerStyle: {backgroundColor: '#263F61'},
            headerTintColor: '#fff',
            headerShadowVisible: false,
            statusBarColor: '#263F61',
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={DetailsScreen}
          options={{
            headerShown: false,
            headerTitleStyle: {fontFamily: 'BigJohnPRO-Bold'},
            title: 'Insta Play',
            headerStyle: {backgroundColor: '#263F61'},
            headerTintColor: '#fff',
            headerShadowVisible: false,
            statusBarColor: '#263F61',
            headerBackVisible:true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  font: {
    fontFamily: 'BIG JOHN',
  },
});

export default StackNavigator;
