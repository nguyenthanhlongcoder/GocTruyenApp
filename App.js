import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AppbarComponent from './components/AppbarComponent';
import HomeCarousel from './components/HomeCarousel';
import Feature from './components/Feature';
import CategoryScreen from './screens/CategoryScreen';
import StackNavigator from './screens/StackNavigator';
import HomeScreen from './screens/HomeScreen';
export default function App() {
  return (
    <StackNavigator/>
  );
}