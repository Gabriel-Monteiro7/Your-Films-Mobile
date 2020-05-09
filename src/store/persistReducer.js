import { AsyncStorage } from "react-native";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "Your Films",
      storage: AsyncStorage,
      whitelist: ["films"],
    },
    reducers
  );
  return persistedReducer;
};
