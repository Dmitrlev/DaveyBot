import {StyleSheet, ScrollView, TouchableOpacity, View} from "react-native";
import {ListItem} from "./ListItem/ListItem";
import React from "react";
import {OptionsModal} from "../OptionsModal/OptionsModal";

export const MainLists = ({chats, dataOptionsModal, handler}) => {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPressIn={handler.onPressIn}
    >
      <ScrollView style={styles.wrapper}>
        <View style={styles.block}>
          {chats.map((item, index) => item.chatFixed && (
            <ListItem
              activeModal={dataOptionsModal.id === item.chatId}
              showModal={dataOptionsModal.show}
              handler={handler}
              fixed={true}
              key={index}
              state={item}
            />)
          )}
          {chats.map((item, index) => !item.chatFixed && (
            <ListItem
              activeModal={dataOptionsModal.id === item.chatId}
              showModal={dataOptionsModal.show}
              handler={handler}
              fixed={false}
              key={index}
              state={item}
            />)
          )}
        </View>
      </ScrollView>
      {dataOptionsModal.show && (
        <OptionsModal
          dataOptionsModal={dataOptionsModal}
          handler={handler}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
  },
  block: {
    backgroundColor: 'rgba(3,3,3,0.11)',
    gap: 1,
    paddingBottom: 1
  }
})