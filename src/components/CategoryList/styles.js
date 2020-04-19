import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  padding: 35px 30px 10px;
  width: 100%;
  flex-direction: row;
`;
export const CategoryTitle = styled.Text`
  font-family: "Lato-Bold";
  font-size: 16px;
  color: ${(props) => (props.active ? "white" : "#524E51")};
`;
export const Line = styled.View`
  margin-top: 5px;
  width: 70%;
  background: ${(props) => (props.active ? "#5ac4fe" : "transparent")};
  height: 3px;
  border-radius: 100px;
`;
export const ContainerCategory = styled.View`
  padding-right: 30px;
`;
