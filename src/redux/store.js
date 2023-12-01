import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import userReducer from "./users/reducer";
import isPreloadReducer from "./isPreload/reducer";
import threadsReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: userReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    detailThread: threadDetailReducer
  }
})

export default store;