import {StyleSheet, View} from "react-native";
import {HeaderLists} from "./HeaderLists/HeaderLists";
import React, {useState} from "react";
import {ModalSettings} from "../../components/ModalWindows/ModalSettings/ModalSettings";
import {NewChat} from "./NewChat";
import {addNewChat} from "../../store/reducers/chat/chat";
import {useDispatch, useSelector} from "react-redux";
import {MainLists} from "./MainLists/MainLists";
import {useNavigation} from "@react-navigation/native";
import {useTouchLists} from "../../hooks/touch/useTouchLists";
import {useSyncStoreWithAsyncStorage} from "../../hooks/storage/useSyncStoreWithAsyncStorage";

export const ListsScreen = () => {

  useSyncStoreWithAsyncStorage();
  const dispatch = useDispatch();
  // useAsyncStorage('chatsAll', useSelector((state) => state.chat.chatsAll), (data) => {dispatch(setStoreChat(data))});
  // useAsyncStorage('settings', useSelector((state) => state.setting.settings), (data) => {dispatch(setStoreSetting(data))});

  const navigate = useNavigation();
  const chats = useSelector(state => state.chat.data);
  const [nameNewChat, setNameNewChat] = useState('');
  const [showModalNewChat, setShowModalNewChat] = useState(false);

  const onAddNewChat = async () => {
    if(nameNewChat !== '') {
      dispatch(addNewChat({chatName: nameNewChat}));
      setNameNewChat('');
      setTimeout(() => navigate.navigate('Chat', { chatId: chats.length }), 100)
    }
    setShowModalNewChat(false);
  }

  const { dataOptionsModal, handler } = useTouchLists();

  return (
    <View style={styles.container}>
      <HeaderLists activeOption={dataOptionsModal.show} handler={handler} setShowModalNewChat={setShowModalNewChat}/>
      <MainLists
        chats={chats}
        dataOptionsModal={dataOptionsModal}
        handler={handler}
      />
      <ModalSettings
        callback={() => onAddNewChat()}
        name={'Создать новый чат'}
        show={showModalNewChat}
        setShow={setShowModalNewChat}
        Component={NewChat}
        btnTwo='Создать'
        state={{
          nameNewChat,
          setNameNewChat,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})