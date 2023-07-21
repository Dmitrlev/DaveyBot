import {TextInput, View, StyleSheet} from "react-native";

export const NewChat = ({state}) => {

  const { nameNewChat, setNameNewChat } = state;

  const handleNumberChange = (text) => setNameNewChat(text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nameNewChat}
        onChangeText={handleNumberChange}
        placeholder={'Название чата'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '70%',
  },
  input: {
    height: 50,
    borderColor: 'rgba(88,96,105,0.24)',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
})