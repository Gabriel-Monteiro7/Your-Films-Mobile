import styled from "styled-components/native";
import { hp, wp, height } from "../../util";
import Constants from "expo-constants";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  /* padding: 0px 30px; */
  justify-content: center;
  background: #111111;
`;

export const Back = styled(FontAwesome)`
  color: white;
  font-size: 30px;
`;
export const ButtonBack = styled.TouchableOpacity`
  width: 30px;
  margin-left: 20px;
`;
export const ContainerBack = styled.View`
  padding-top: ${Constants.statusBarHeight + hp(1)}px;

  background: #111111;
`;
export const ContainerVideo = styled.View`
  margin: auto;
  width: 100%;
  height: 300px;
`;
