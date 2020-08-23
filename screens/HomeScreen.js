import React from 'react';
import { View, Button } from 'react-native';
import AppbarComponent from '../components/AppbarComponent';
import HomeCarousel from '../components/HomeCarousel';
import Feature from '../components/Feature';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <AppbarComponent/>
      <Feature navigation={navigation}/>
    </View>
  );
}