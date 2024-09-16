
import React from 'react'
import { Text, View } from 'react-native';

export default function StylesheetAPI() {
  return (
    <View style={styles.container}>
        <View style = {[styles.box, styles.lightblueBg]}>
            <Text>Lighblue Box</Text>
        </View>
        <View style = {[styles.box, styles.lightgreeBg]}>
            <Text>Lighblue Box</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#plum',
      padding: 60
    },
    box: {
        width: 100,
        height: 100,
        padding: 10
    },
    lightblueBg: {
        backgroundColor: 'lightblue'
    },
    lightgreeBg: {
        backgroundColor: 'lightgreen'
    }
  });
  