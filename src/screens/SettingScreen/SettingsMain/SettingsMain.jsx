import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {QuantityPreviousMessages} from "./QuantityPreviousMessages/QuantityPreviousMessages";
import {ToggleSwitchSettings} from "./ToggleSwitchSettings/ToggleSwitchSettings";
import {useDispatch, useSelector} from "react-redux";
import {setChatOutline, setStoreSetting, setTime} from "../../../store/reducers/setting/setting";
import {ColorSelection} from "./ColorSelection/ColorSelection";
import {setChat} from "../../../store/reducers/chat/chat";
import {Key} from "./Key/Key";
import {Gradient} from "../../ChatScreen/Gridient";

export const SettingsMain = () => {

  const dispatch = useDispatch();
  const {
    fontSize,
    chatOutline,
    time,
    primaryColor
  } = useSelector(state => state.setting.settings);


  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{...styles.nameWrapper, fontSize: fontSize * 1.05}}>Чаты (функционал):</Text>
        <View style={styles.block}>
          <QuantityPreviousMessages nameItem={{...styles.nameItem, fontSize: fontSize}}/>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={{...styles.nameWrapper, fontSize: fontSize * 1.05}}>Чаты (стили):</Text>
        <View style={styles.block}>
          <ColorSelection nameItem={{...styles.nameItem, fontSize: fontSize}}/>
          <ToggleSwitchSettings
            nameItemStyle={{...styles.nameItem, fontSize: fontSize}}
            name={`Обводка сообщений`}
            isEnabled={chatOutline}
            setIsEnabled={(isEnabled) => dispatch(setChatOutline(isEnabled))}
          />
          <ToggleSwitchSettings
            nameItemStyle={{...styles.nameItem, fontSize: fontSize}}
            name={`Показать время`}
            isEnabled={time}
            setIsEnabled={(isEnabled) => dispatch(setTime(isEnabled))}
          />
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={{...styles.nameWrapper, fontSize: fontSize * 1.05}}>API KEY:</Text>
        <View style={styles.block}>
          <Key nameItem={{...styles.nameItem, fontSize: fontSize}}/>
        </View>
      </View>
      <View style={{
        marginBottom: 0,
        marginTop: 'auto',
      }}>
        <View style={styles.btnDeleteDataMessages}>
          <TouchableOpacity
            style={styles.btnDeleteDataMessagesItem1}
            onPress={() => {
              dispatch(setChat([]));
              alert('История сообщений удалена!');
            }}
          >
            <Gradient offset={15} primaryColor={primaryColor} screenHeight={'100%'}/>
            <Text style={styles.btnDeleteDataMessagesText}>Очистить историю сообщений!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnDeleteDataMessagesItem2}
            onPress={() => {
              dispatch(setStoreSetting({
                quantityPreviousMessagesAll: true,
                quantityPreviousMessages: 0, //количество предыдущих сообщений в запросе, number || 'all'
                theme: false, //цветовая расцветка
                chatOutline: false,
                primaryColor: '#d611f3',
                fontSize: 15,
                time: false, //показ времени
                key: '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',
              }));
            }}
          >
            <Gradient offset={15} primaryColor={primaryColor}/>
            <Text style={styles.btnDeleteDataMessagesText}>Сбросить настройки!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapper: {
    marginTop: 20,
    padding: 15,
    gap: 10,
  },
  nameWrapper: {
    fontSize: 15,
    fontWeight: 700,
    opacity: 0.5
  },
  block: {
    flexDirection: 'column',
    gap: 20,
    marginTop: 10,
  },
  item: {

  },
  nameItem: {
    fontWeight: 600,
  },
  btnDeleteDataMessages: {
    flexDirection: 'row',
    gap: 10,
    margin: 15,
  },
  btnDeleteDataMessagesItem1: {
    overflow: 'hidden',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 5,
    backgroundColor: 'green',
    flex: 0.7,
  },
  btnDeleteDataMessagesItem2: {
    overflow: 'hidden',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 5,
    backgroundColor: 'green',
    flex: 0.3,
  },
  btnDeleteDataMessagesText: {
    zIndex: 2,
    textAlign: 'center',
    color: 'white',
    fontWeight: 600,
  }
})