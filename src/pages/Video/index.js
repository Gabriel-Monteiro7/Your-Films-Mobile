import React, { useState, useEffect } from "react";
import Lottie from "lottie-react-native";

import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setVideoSuccess } from "../../store/modules/films/actions";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import { Toast } from "react-native-toastjs";
import loadLottie from "../../assets/images/load.json";

import {
  Back,
  Container,
  ContainerBack,
  ContainerVideo,
  ButtonBack,
} from "./styles";
export default function Video() {
  let { video } = useSelector((state) => state.films);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  function navigateToBack() {
    navigation.navigate("Home");
  }
  useEffect(() => {
    if (video === null) {
      dispatch(setVideoSuccess(false));
      Toast("Não possui Trailer").show();
      setTimeout(() => {
        navigateToBack();
      }, 1000);
    }
  }, [video]);
  return (
    <>
      <ContainerBack>
        <ButtonBack
          onPress={() => {
            navigateToBack();
          }}
        >
          <Back name={"angle-left"} />
        </ButtonBack>
      </ContainerBack>
      <Container>
        <ContainerVideo>
          <WebView
            allowsFullscreenVideo={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: video === null || video === false ? "" : video }}
          />
        </ContainerVideo>
      </Container>
    </>
  );
}
