import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import Routes from "./src/routes";
import { StatusBar } from "react-native";
import ToastProvider, { Toast } from "react-native-toastjs";

export default function App() {
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
      <ToastProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <Routes />
      </ToastProvider>
    );
  }
}
