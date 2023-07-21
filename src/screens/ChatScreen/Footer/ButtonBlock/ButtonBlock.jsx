import {StyleSheet, View, Platform, TouchableOpacity} from "react-native";
import {Loader} from "../../../../components/Loader/Loader";
import {Submit} from "../../../../components/Submit/Submit";
import {TextGeneratorSquare} from "../../../../components/TextGeneratorSquare/TextGeneratorSquare";

export const ButtonBlock = ({isLoader, callback, active, cancelRequest, chatId}) => {
  return (
    <View style={styles.container}>
      {isLoader ?
        <TouchableOpacity onPress={() => cancelRequest(chatId)} style={styles.squareWrapper}>
          <TextGeneratorSquare />
        </TouchableOpacity>
        :
        <Submit callback={callback} active={active}/>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    bottom:  Platform.OS === "ios" ? 10 : 9,
    alignSelf: 'flex-end',
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  squareWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: '60%',
    height: '60%',
    borderRadius: 2,
    borderColor: 'grey',
    borderWidth: 1,
  }
})