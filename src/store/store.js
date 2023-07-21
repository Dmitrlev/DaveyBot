import {configureStore} from "@reduxjs/toolkit";
import Chat from "./reducers/chat/chat";
import Setting from "./reducers/setting/setting";

const rootReducers = {
  chat: Chat,
  setting: Setting
};

const store = configureStore({
  reducer: rootReducers
});
window.store = store
export default store;
