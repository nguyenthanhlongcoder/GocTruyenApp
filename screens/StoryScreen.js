import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import StoryItem from '../components/StoryItem';
import { firebaseApp } from '../components/FirebaseConfig';

export default function StoryScreen(props) {

  const [state, setState] = useState();
  var category = props.route.params.title;
   category = category.replace('Truyện ', '');
  firebaseApp.database().ref().once('value', (snapshot) => {
    var li = [];
    snapshot.forEach((child) => {
      if ((child.val().category).indexOf(category) !== -1) {
        li.push({
          title: child.val().title,
          category: child.val().category,
          url: child.val().url,
          img: child.val().img,
          key: child.key
        })
      
      }
    })
    setState(li);
  })
  return (
    <FlatList
      data={state}
      numColumns={2}
      renderItem={({ item }) => {
        return (
          <StoryItem data={item} />
        )
      }}
      keyExtractor={(item => item.key)} />
  )
}