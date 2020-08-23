import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Dimensions, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StoryItem extends Component {
    render() {
        return (
            <TouchableOpacity
            onPress={() => Linking.openURL(this.props.data.url)}>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri:this.props.data.img}}/>
                <View style={styles.content}>
                       <Text style={styles.title}>{this.props.data.title}</Text>
                <Text>{this.props.data.category}</Text>
                </View>
             
            </View >
            </TouchableOpacity>
        )
    }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: width/2,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row'
    },
    img:{
        flex: 1,
        marginRight: 10
    },
    title:{
        fontSize: 15,
        fontWeight: "bold"
    },
    category:{
        fontSize: 10
    },
    content:{
        flex: 2
    }
})
