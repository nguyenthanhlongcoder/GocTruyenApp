import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Animated} from 'react-native';
import CarouselItem from './CarouselItem';

const {width, height} = Dimensions.get('window');

const HomeCarousel = ({data}) =>{
    const scrollX = new Animated.Value(0);
    let poistion = Animated.divide(scrollX, width);

    if(data && data.lenght){
        return(
            <View>
                <FlatList
                data={data}
                keyExtractor = {(item, index) => 'key' + index}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment = 'center'
                scrollEventThrottle = {16}
                decelerationRate = {"fast"}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item}) =>{
                    return <CarouselItem item = {item}/>
                }}
                onScroll = {Animated.event(
                    [{nativeEvent: {contentOffset:{x: scrollX}}}]
                )}/>

                <View style = {styles.dotView}>
                    {data.map((_, i) =>{
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 1.3],
                            extrapolate: 'clamp'
                        })
                        return(
                            <Animated.View
                            key = {i}
                            style = {{opacity, height: 10, width: 10, backgroundColor:'#595959', margin: 8, borderRadius: 5}}/>
                        )
                    })}
                </View>
            </View>
        );
    }

    return null;
}

const styles = StyleSheet.create({
    dotView:{
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default HomeCarousel;