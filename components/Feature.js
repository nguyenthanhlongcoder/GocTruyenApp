import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { NavigationContainer } from '@react-navigation/native';

export default class Feature extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("CategoryScreen")}
           >
                    <View style={styles.Item}>
                        <Icon style={styles.Icon} name="appstore1" color="red" />
                        <Text>Thể loại</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.Item}>
                        <Icon style={styles.Icon} name="earth" color="blue" />
                        <Text>Dịch</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.Item}>
                        <Icon style={styles.Icon} name="scan1" color="orange" />
                        <Text>Convert</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.Item}>
                        <Icon style={styles.Icon} name="message1" color="green" />
                        <Text>Sáng tác</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },

    Icon: {
        fontSize: 50,
        marginHorizontal: 30,
        marginVertical: 20
    },

    Item: {
        justifyContent: "center",
        alignItems: "center"
    }
});