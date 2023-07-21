import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from "react-native";

export const StopQuestion = () => {

  const screenWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity style={styles.container}>
      <Text> (..) Stop Question</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 5,
    left: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(88,96,105,0.24)',
  }
})