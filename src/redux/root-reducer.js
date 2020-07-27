import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import barsReducer from "./bars/bars.reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  bars: barsReducer,
});

export default persistReducer(persistConfig, rootReducer);
