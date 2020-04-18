import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  margin: 30px 0px;
  background: transparent;
`;
export const Title = styled.Text`
  color: white;
  font-size: 40px;
  font-family: "Lato-Bold";
`;
export const Image = styled.ImageBackground.attrs({
  borderRadius: 20,
})`
  justify-content: space-between;
  position: relative;
  height: 500px;
  width: 100%;
  padding: 15px 20px;
`;
export const ContainerIcon = styled.TouchableOpacity`
  padding: 0px 10px;
`;
export const Icon = styled(FontAwesome)`
  /* font-size: 25px; */
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const PlayButton = styled.TouchableOpacity``;
export const ContainerButton = styled(LinearGradient)`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const ContainerProgress = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`;
export const StatusProgress = styled.View`
  width: 70%;
  background: #5ac4fe;
  height: 100%;
  border-radius: 100px;
`;
export const Progress = styled.View`
  width: 50px;
  height: 8px;
  margin: 3px 0px;
  background: #333335;
  border-radius: 100px;
`;

export const ProgressTitle = styled.Text`
  font-size: 15px;
  color: white;
  font-family: "Lato-Bold";
`;
