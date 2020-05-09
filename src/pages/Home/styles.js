import { Feather, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import styled from "styled-components/native";
import { hp } from "../../util";
export const Container = styled.View`
  background: #111111;
  flex: 1;
  padding: 0px 30px;
  padding-top: ${Constants.statusBarHeight + hp(1)}px;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: white;
  font-size: 35px;
  font-family: "Lato-Bold";
`;
export const ContainerIcon = styled.TouchableOpacity``;
export const Icon = styled(Feather)`
  color: white;
  font-size: 25px;
`;
export const StatusProgress = styled.View`
  width: ${(props) => props.progress}%;
  background: #5ac4fe;
  height: 100%;
  border-radius: 100px;
`;
export const Progress = styled.View`
  width: 30px;
  height: 3px;
  /* margin-right: 4px; */
  background: #333335;
  border-radius: 100px;
`;
export const ContainerRank = styled.View`
  margin: 30px 0px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const RankTitle = styled.Text`
  font-size: 20px;
  color: white;
  font-family: "Lato-Regular";
  margin-right: 5px;
`;
export const RankValue = styled.Text`
  font-size: 20px;
  color: white;
  font-family: "Lato-Bold";
  margin-right: 5px;
`;
export const RankProgress = styled.View`
  margin-top: 25px;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const IconRank = styled(MaterialIcons)`
  color: #5ac4fe;
  font-size: 12px;
`;
export const Input = styled.TextInput`
  color: #9c9c9c;
  z-index: 1;
  width: 100px;
  font-size: 16px;
  font-family: "Lato-Regular";
`;
