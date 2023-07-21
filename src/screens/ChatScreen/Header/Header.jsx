import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {useSelector} from "react-redux";

export const Header = ({chatName}) => {

  const navigate = useNavigation();
  const { fontSize } = useSelector(state => state.setting.settings);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.settings}
        onPress={() => navigate.navigate('Lists')}
      >
        <Ionicons
          name="ios-arrow-back"
          size={25}
          color='#586069'
        />
      </TouchableOpacity>
      <Text style={{
        ...styles.botName,
        fontSize
      }}>{chatName}</Text>
      <TouchableOpacity
        style={styles.chatbubbles}
        onPress={() => navigate.navigate('Lists')}
      >
        <View style={{
          width: 25,
          height: 25
        }}></View>
        {/*<Ionicons*/}
        {/*  name="chatbubbles-outline"*/}
        {/*  size={25}*/}
        {/*  color='#586069'*/}
        {/*/>*/}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderBottomColor: "rgba(88,96,105,0.24)",
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  chatbubbles: {
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  settings: {
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
  },
  botName: {
    alignSelf: 'center',
    fontWeight: 700,
    color: '#586069'
  }
})