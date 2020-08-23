import React from 'react';
import { CategoryItemData } from '../data/CategoryItemData';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import CategoryItem from '../components/CategoryItem';

export default function CategoryScreen({navigation}) {

    return (
            <FlatList
                data={CategoryItemData}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                      <CategoryItem data={item} navigation={navigation}/>
                    )
                }}
                keyExtractor={(item => item.id)} />
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    }
});