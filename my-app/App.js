import { StyleSheet, Text, View } from 'react-native';
import Box from './reactNative-layout/Box';

export default function App() {
  return (
    // <ViewComp/>
    <View style = {styles.container}>
      <Box style={{backgroundColor: "#8e9b00"}}>Box 1</Box>
      <Box style={{backgroundColor: "#b65d1f"}}>Box 2</Box>
      <Box style={{backgroundColor: "#8e9b00"}}>Box 3</Box>
      <Box style={{backgroundColor: "#b65d1f"}}>Box 4</Box>
      <Box style={{backgroundColor: "#8e9b00"}}>Box 5</Box>
      <Box style={{backgroundColor: "#b65d1f"}}>Box 6</Box>
      <Box style={{backgroundColor: "#8e9b00"}}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //justifyContent: "space-between",
    //justifyContent: "space-around",
    marginTop: 60,
    borderWidth: 6,
    borderColor: "red"
  },
});
