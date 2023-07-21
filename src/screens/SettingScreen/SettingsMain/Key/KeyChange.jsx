import {TextInput, View, StyleSheet} from "react-native";

export const KeyChange = ({state}) => {

  const {setNewKey} = state;

  const handleNumberChange = (text) => setNewKey(text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleNumberChange}
        placeholder={'Введите новый key...'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 50,
    width: '100%',
    borderColor: 'rgba(88,96,105,0.24)',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
})