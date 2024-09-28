import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

function SafeAreaViewComp() {
    
    return (
        <View style={[styles.box]}>
            <Text style={styles.text}>Welcome Nadeem!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        padding: 20,
        backgroundColor: "lightblue"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default SafeAreaViewComp
