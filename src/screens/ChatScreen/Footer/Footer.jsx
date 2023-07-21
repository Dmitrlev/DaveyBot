import { KeyboardAvoidingView, TextInput, Platform, View, StyleSheet } from "react-native";
import React from "react";
import { ButtonBlock } from "./ButtonBlock/ButtonBlock";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {useFooter} from "../../../hooks/useFooter";

export const Footer = ({ state, handler }) => {

  const {
    chatValue,
    onChangeValue,
    activeSubmit,
    chatLoader,
    onSubmit,
    cancelRequest
  } = useFooter(state);

  const insets = useSafeAreaInsets();
  const insetTop = insets.top;
  const keyboardVerticalOffset = Platform.OS === "ios" ? insetTop : 0; // Дополнительный отступ для iOS

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={keyboardVerticalOffset}
      enabled
    >
      <View style={{
        ...styles.container,
      }}>
        <TextInput
          style={styles.input}
          value={chatValue}
          onChangeText={(text) => {
            onChangeValue(text);
            handler.onPressIn()
          }}
          multiline={true}
          numberOfLines={1}
          placeholder="Спроси у DaveyBot..."
          autoFocus={state.chatMessages.length === 0}
        />
        <ButtonBlock
          chatId={state.chatId}
          active={activeSubmit}
          isLoader={chatLoader}
          callback={onSubmit}
          cancelRequest={cancelRequest}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingRight: 9,
    borderTopColor: "rgba(88,96,105,0.24)",
    borderTopWidth: 1,
    borderRadius: 0,
  },
  input: {
    flex: 1,
    color: "black",
    borderColor: 'transparent',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 15 : 13,
    paddingBottom: Platform.OS === "ios" ? 15 : 13,
    fontSize: 15,
    maxHeight: 150,
  },
});
