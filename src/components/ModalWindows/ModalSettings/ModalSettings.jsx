import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';

export const ModalSettings = ({
  show = false,
  setShow = null,
  name = 'Учитывать предыдущих сообщений',
  callback = null,
  Component = <></>,
  state = {},
  btnOne = 'Отмена',
  btnTwo = 'Сохранить'
}) => {

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={show}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fonBack}
          onPress={() => setShow(false)}
          activeOpacity={1}
        ></TouchableOpacity>
        <View style={styles.wrapper}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.content}>
            <Component state={state}/>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.footerBack} onPress={() => setShow(false)}>
              <Text>{btnOne}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerSave} onPress={callback}>
              <Text>{btnTwo}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'none'
  },
  fonBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.26)',
  },
  wrapper: {
    backgroundColor: '#ffffff',
    minWidth: 100,
    borderRadius: 10,
    overflow: 'hidden',
    // borderColor: "rgba(88,96,105,0.24)",
    // borderWidth: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: "rgba(88,96,105,0.24)",
    borderTopWidth: 1,
  },
  footerBack: {
    position: 'relative',
    padding: 15,
    borderRightColor: "rgba(88,96,105,0.24)",
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  footerSave: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
  name: {
    textAlign: 'center',
    padding: 10,
    paddingHorizontal: 25,
    paddingVertical: 20,
    fontWeight: '800',
    fontSize: 15,
    color: 'rgba(0,0,0,0.76)',
    // borderBottomColor: "rgba(88,96,105,0.24)",
    // borderBottomWidth: 1,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    paddingTop: 0,
  }
});
