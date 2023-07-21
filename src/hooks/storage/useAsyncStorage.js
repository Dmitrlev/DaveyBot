import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export const useAsyncStorage = (key, obj, set) => {
  useEffect(() => {
    getData().then((data) => {
      set(data);
    });
  }, []);

  useEffect(() => {
    saveData().then(r => null);
  }, [obj]);

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem(key);
      return JSON.parse(data) || obj; // Return an empty object if data is null
    } catch (error) {
      // Handle data retrieval errors
      return {};
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(obj));
    } catch (error) {
      // Handle data saving errors
    }
  };
};
