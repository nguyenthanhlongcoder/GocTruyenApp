import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feature from '../components/Feature';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import StoryScreen from './StoryScreen';

const Stack = createStackNavigator();
export default function StackNavigtor() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title:"Home"}}/>
                <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{title:"Category"}}/>
                <Stack.Screen name="StoryScreen" component={StoryScreen} options={({route}) =>({title: route.params.title})}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}