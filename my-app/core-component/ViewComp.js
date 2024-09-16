import React from 'react'
import { Button, Image, StyleSheet, View } from 'react-native';
const logoImage = require('../assets/adaptive-icon.png')

export default function ViewComp() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum' }}>
      <View style={{ width: 200, height: 200, backgroundColor: 'lightblue' }}>
        <Image source={logoImage} style={{ width: 300, height: 300 }}></Image>
      </View>
      <View style={{ width: 200, height: 200, backgroundColor: 'lightgreen' }}>
        <Button
          title='Press'
          onPress={() => console.log('Button Press')}
          color="midnightblue" 
        />
      </View>
    </View>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app.</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
