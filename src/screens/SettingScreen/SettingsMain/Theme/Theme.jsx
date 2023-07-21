import {Text, View} from "react-native";

export const Theme = ({nameItem}) => {
  return (
    <View>
      <Text style={nameItem}>Тема</Text>
    </View>
  )
}