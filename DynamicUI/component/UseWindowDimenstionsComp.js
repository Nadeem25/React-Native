import React from 'react'
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';

function UseWindowDimenstionsComp() {

    const windowHeight = useWindowDimensions().height
    const windowWidth = useWindowDimensions().width
    
    return (
        <View style={[styles.box, {
            width: windowWidth > 500 ? "70%" : "70%",
            height: windowHeight > 500 ? "60%" : "70%",
        }]}>
            <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default UseWindowDimenstionsComp
