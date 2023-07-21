import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import store from './src/store/store';
import {Provider} from "react-redux";
import {Navigate} from "./src/Navigate/Navigate";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
          />
          <Navigate />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
