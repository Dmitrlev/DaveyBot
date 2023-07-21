import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setChat } from "../../store/reducers/chat/chat";
import {setStoreSetting} from "../../store/reducers/setting/setting";

export const useSyncStoreWithAsyncStorage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const saveStateToAsyncStorage = async () => {
      const serializedState = JSON.stringify(state);
      await AsyncStorage.setItem('reduxStore', serializedState);
    };
    setTimeout(() => saveStateToAsyncStorage(), 500);
  }, [state]);

  useEffect(() => {
    const loadStateFromAsyncStorage = async () => {
      const serializedState = await AsyncStorage.getItem('reduxStore');
      if (serializedState !== null) {
        const state = JSON.parse(serializedState);
        if (state.chat) {
          dispatch(setChat(state.chat.data));
        }

        if (state.setting) {
          dispatch(setStoreSetting(state.setting.settings));
        }
      }
    };

    loadStateFromAsyncStorage().then(r => null);
  }, [dispatch]);

  return null;
};
