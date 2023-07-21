import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import {Loader} from "../../../../components/Loader/Loader";

export const ListItem = ({ state, fixed, handler, activeModal, showModal}) => {
  const navigate = useNavigation();

  const { chatName, chatId, chatMessages, chatPrint } = state;
  const { fontSize, primaryColor } = useSelector(state => state.setting.settings);

  const onNavigate = () => {
    navigate.navigate('Chat', { chatId })
  };

  const lastMessage = chatMessages[chatMessages.length - 1];

  const messageContentStyle = (context) => {
    if(!lastMessage?.messageRead && lastMessage?.messageSender === 'DAVID') {
      if(context === 'opacity') {
        return 1
      } else if(context === 'fontWeight') {
        return 600
      }
    }
    if(context === 'opacity') {
      return 0.4
    } else if(context === 'fontWeight') {
      return 400
    }
  };

  const renderMessageSender = () => {
    if (chatMessages.length === 0) {
      return (
        <Text
          style={{
            color: primaryColor,
            fontWeight: 400,
            fontSize: 13,
            fontStyle: "italic",
          }}
        >(Диалог пустой)</Text>
      )
    } else
    if (lastMessage?.messageSender === 'CLIENT' && chatPrint) {
      return (
        <View style={{flexDirection: 'row', opacity: 0.8}}>
          <Text style={{opacity: 1, fontWeight: 400}}>DaveyBot печатает</Text>
          <View style={{marginTop: 'auto', marginBottom: 4, marginLeft: 2}}>
            <Loader backgroundColor={'black'} size={2} gap={2}/>
          </View>
        </View>
      )
    }
    if (lastMessage?.messageSender === 'CLIENT') {
      return <Text style={{opacity: 0.5, fontWeight: 500}}>Вы:</Text>;
    } else
    if (lastMessage?.messageSender === 'DAVID') {
      return <Text style={{opacity: 0.5, fontWeight: 500}}>DaveyBot:</Text>;
    }
  };

  return (
    <View style={{
      ...styles.container,
      backgroundColor: fixed ? 'rgb(243,243,243)' : 'white',
    }}>
      <TouchableOpacity
        disabled={showModal}
        style={{
          ...styles.wrapper,
          opacity: (showModal && !activeModal) ? 0.4 : 1,
        }}
        activeOpacity={0.5}
        onPress={onNavigate}
        onLongPress={(event) => handler.onLongPress(event, state.chatId, state.chatFixed)}
        onPressIn={handler.onPressIn}
      >
        <View style={styles.main}>
          <Text style={{ ...styles.name, fontSize: fontSize }}>{chatName}</Text>
          <Text style={{ ...styles.time, fontSize: fontSize * 0.7 }}>{lastMessage?.messageTime}</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', flex: 1 }}>
          {renderMessageSender()}
          {(!chatPrint) && (
            <Text
              style={{
                ...styles.content,
                fontSize: fontSize * 0.9,
                opacity: messageContentStyle('opacity'),
                fontWeight: messageContentStyle('fontWeight')
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >{lastMessage?.messageContent}</Text>
          )}
          {fixed && <AntDesign style={{marginRight: 0, marginLeft: 'auto'}} name="pushpino" size={13} color={primaryColor} />}
        </View>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'rgba(88,96,105,0.11)',
    // borderBottomWidth: 1,
    // borderTopWidth: 1,
  },
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 5
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 800,
  },
  content: {
    flex: 1,
    maxWidth: '100%',
  },
  time: {
    opacity: 0.5,
    alignSelf: 'flex-end'
  }
})