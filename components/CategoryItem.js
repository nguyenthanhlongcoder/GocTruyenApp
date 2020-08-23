import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default class CategoryItem extends Component {
    render() {
        return (
            <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('StoryScreen',{title: this.props.data.name})}>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.data.name}</Text>
                </View>
            </TouchableOpacity>

        );
    }


}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width / 2,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    title: {
        fontSize: 20
    },
    count: {
        opacity: 0.7
    }
});

