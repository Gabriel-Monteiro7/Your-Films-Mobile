import styled from "styled-components/native";
import { hp, wp, height as heightValue } from "../../util";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
export const Container = styled.View`
  padding: 0px 30px;
  background: #111111;
  flex: 1;
  padding-top: ${Constants.statusBarHeight + hp(5)}px;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: white;
  font-size: 40px;
  font-family: "Lato-Bold";
`;
export const ContainerIcon = styled.TouchableOpacity``;
export const Icon = styled(Feather)`
  color: white;
  font-size: 25px;
`;
