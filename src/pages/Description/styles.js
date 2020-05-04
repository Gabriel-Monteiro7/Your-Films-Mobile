import styled from "styled-components/native";
import { hp, wp, height as heightValue } from "../../util";
import Constants from "expo-constants";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  padding: 0px 30px;
`;

export const Back = styled(FontAwesome)`
  color: white;
  font-size: 30px;
`;
export const ContainerBack = styled.TouchableOpacity`
  margin: 0px auto 10px 0px;
  /* background: red; */
  padding: 0px 10px;
  /* margin-bottom: 10px; */
`;
export const Image = styled.ImageBackground.attrs({
  // borderRadius: 20,
})`
  padding-top: ${Constants.statusBarHeight + hp(3)}px;
  flex:1;
`;
export const InformationContainer = styled.View`
  flex: 1;
  background: #111111;
  z-index: 1;
  padding-top: 0px;
  padding-bottom: 20px;
`;
export const Header = styled.View``;
export const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-family: "Lato-Bold";
  margin-bottom: 10px;
`;
export const Label = styled.Text`
  color: #333335;
  font-size: 15px;
  font-family: "Lato-Bold";
  margin-bottom: 5px;
`;
export const DateLabel = styled(Label)`
  font-size: 18px;
`;
export const Progress = styled.View`
  width: 80px;
  height: 3px;
  margin: 3px 0px;
  background: #333335;
  border-radius: 100px;
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
export const Forma = styled.Image.attrs({
  // borderRadius: 20,
})`
  /* flex: 1; */
  height: 35px;
  width: 100%;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  margin-top: -34px;
  /* padding-bottom: 50px; */
`;
export const PlayButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 4px;
  left: 37px;
  z-index: 1;
`;
export const ContainerButton = styled(LinearGradient)`
  height: 58px;
  width: 58px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;
export const Icon = styled(FontAwesome)`
  /* font-size: 25px; */
`;
export const RankValue = styled.Text`
  font-size: 20px;
  color: white;
  font-family: "Lato-Bold";
  margin-right: 5px;
`;
export const ContainerRank = styled.View`
  margin: 5px 0px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
export const RankTitle = styled.Text`
  font-size: 20px;
  color: white;
  font-family: "Lato-Regular";
  margin-right: 5px;
`;
export const StarIcon = styled(MaterialIcons)`
  font-size: 15px;
  color: #fed05b;
`;
export const SeasonsTitle = styled.Text`
  font-size: 15px;
  color: white;
  font-family: "Lato-Bold";
`;
