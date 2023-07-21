import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {Gradient} from "./Gridient";
import {useTouchChat} from "../../hooks/touch/useTouchChat";
import {OptionsMessage} from "./OptionsMessage";

export const ChatScreen = () => {

  const { theme } = useTheme();
  const route = useRoute();
  const { chatId } = route.params;
  const chats = useSelector((state) => state.chat.data);
  const primaryColor = useSelector(state => state.setting.settings.primaryColor);
  const state = chats.find((chat) => chat.chatId === chatId);

  const { handler, dataOptionsModal } = useTouchChat();

  return (
    <View style={[styles.container, theme && styles.containerDark]}>
      <Gradient primaryColor={primaryColor}/>
      <Header chatName={state.chatName} />
      <Main
        state={state}
        handler={handler}
        dataOptionsModal={dataOptionsModal}
      />
      <Footer state={state}  handler={handler}/>
      {dataOptionsModal.show &&
        <OptionsMessage
          handler={handler}
          dataOptionsModal={dataOptionsModal}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#f6f8fa",
  },
  containerDark: {
    backgroundColor: "#010409",
  },
});
