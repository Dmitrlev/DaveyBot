import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {screenDetails} from "../hocs/screenDetails";
import {SettingScreen} from "../screens/SettingScreen/SettingScreen";
import {ChatScreen} from "../screens/ChatScreen/ChatScreen";
import {ListsScreen} from "../screens/ListsScreen/ListsScreen";

export const Navigate = () => {

  console.log('привет');
  const Stack = createStackNavigator();

  const ChatScreenDetails = screenDetails(ChatScreen);
  const SettingScreenDetails = screenDetails(SettingScreen, false);
  const SettingListsScreen = screenDetails(ListsScreen, true);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Lists'}
    >
      <Stack.Screen
        name="Chat"
        component={ChatScreenDetails}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreenDetails}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          gestureDirection: 'vertical',
          gestureEnabled: true
        }}
      />
      <Stack.Screen
        name="Lists"
        component={SettingListsScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
    </Stack.Navigator>
  );
};



