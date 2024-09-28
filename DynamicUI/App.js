import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions, SafeAreaView } from 'react-native';
import UseWindowDimenstions from './component/UseWindowDimenstionsComp';
import SafeAreaViewComp from './component/SafeAreaViewComp.';

export default function App() {

  return (
    <SafeAreaView style= {styles.safeAreaContainer}>
      <View style={styles.container}>
        {/* <UseWindowDimenstions /> */}
        <SafeAreaViewComp />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: 60
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
