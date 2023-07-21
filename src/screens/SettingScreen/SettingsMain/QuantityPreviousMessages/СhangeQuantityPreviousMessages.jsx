import {Text, TouchableOpacity, View, StyleSheet, TextInput} from "react-native";

export const ChangeQuantityPreviousMessages = ({state}) => {

  const {
    number,
    checked,
    setNumber,
    setChecked,
  } = state;

  const handleCheckboxToggle = () => setChecked(!checked);

  const handleNumberChange = (text) => {
    if (/^\d*$/.test(text)) {
      setNumber(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={number}
          onChangeText={handleNumberChange}
          placeholder={'0'}
        />
        <Text>(Сообщений)</Text>
        <View style={{
          ...styles.blockContainerInput,
          display: !checked ? 'none' : 'flex'
        }}></View>
      </View>
      <TouchableOpacity style={styles.checkboxButton} onPress={handleCheckboxToggle}>
        <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
          {checked && <View style={styles.checkboxInner} />}
        </View>
        <Text style={styles.label}>Учитывать все сообщения</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  blockContainerInput: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.7,
    backgroundColor: '#ffffff',
  },
  input: {
    textAlign: 'center',
    height: 50,
    width: '50%',
    borderColor: 'rgba(88,96,105,0.24)',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  checkboxButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'rgba(88,96,105,0.43)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 50,
  },
  checkboxChecked: {
    backgroundColor: 'rgba(63,69,75,0.63)',
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 12
  },
});