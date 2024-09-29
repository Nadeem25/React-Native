import { useLayoutEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function AboutScreen({route}) {
    const {name} = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});