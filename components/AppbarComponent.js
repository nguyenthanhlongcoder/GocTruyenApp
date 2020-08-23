import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function AppbarComponent() {
    return (
        <Appbar styles={styles.container}>
          <Appbar.Content title="Góc Chuyện" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});