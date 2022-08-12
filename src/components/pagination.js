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
} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { fetchPopularMovies } from '../services/https';

const Pagination = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 20 }}>
            <ArrowIcon name='left' color={'#fff'} size={20}></ArrowIcon>
            <FlatList horizontal={true}
                data={props.numbers} renderItem={({ item }) => (
                    <TouchableOpacity onPress={async () => {
                        navigation.navigate('Home', { page: item.key })
                    }}>
                        <Text style={{ color: '#fff', padding: 10, fontSize: 15 }}>{item.title}</Text>
                    </TouchableOpacity>
                )} />
            <ArrowIcon name='right' color={'#fff'} size={20}></ArrowIcon>
        </View>)
}
export default Pagination;