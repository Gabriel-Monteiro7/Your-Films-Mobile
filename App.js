import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React from "react";
import { StatusBar } from "react-native";
import ToastProvider from "react-native-toastjs";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./src/config/ReactotronConfig";
import Routes from "./src/routes";
import { persistor, store } from "./src/store";

export default function App({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Lato-Black": require("./src/assets/fonts/Lato/Lato-Black.ttf"),
    "Lato-Bold": require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
    "Lato-Regular": require("./src/assets/fonts/Lato/Lato-Regular.ttf"),
    "Lato-Light": require("./src/assets/fonts/Lato/Lato-Light.ttf"),
    "Lato-Thin": require("./src/assets/fonts/Lato/Lato-Thin.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ToastProvider>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent={true}
            />
            <Routes navigation={navigation} />
          </ToastProvider>
        </PersistGate>
      </Provider>
    );
  }
}
