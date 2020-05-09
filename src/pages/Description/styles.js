import styled from "styled-components/native";
import { hp, wp, height } from "../../util";
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
  margin: 0px auto 20px 0px;
  /* background: red; */
  /* padding: 0px 10px; */
  /* margin-bottom: 10px; */
`;
export const Image = styled.ImageBackground.attrs({
  // borderRadius: 20,
})`
  /* flex: 1; */
  height: 55%;
`;
export const Mask = styled.View`
  padding-top: ${Constants.statusBarHeight + hp(1)}px;
  flex: 1;
  background: #11111158;
  /* height: 100%; */
`;
export const InformationContainer = styled.View`
  flex: 1;
  background: #111111;
  z-index: 1;
  padding-bottom: 30px;
  width: 100%;
`;
export const Header = styled.View``;
export const Title = styled.Text`
  color: #ffffffa8;
  font-size: 30px;
  font-family: "Lato-Bold";
  margin-bottom: 10px;
  width: 90%;
`;
export const Label = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-family: "Lato-Bold";
  margin-bottom: 5px;
`;
export const DateLabel = styled(Label)`
  font-size: 12px;
  color: #5ac4fe;
`;
export const Progress = styled.View`
  width: 68px;
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
  width: 100%;
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
  left: 37.5px;
  z-index: 1;
`;
export const ContainerButton = styled(LinearGradient)`
  height: 55.5px;
  width: 55.5px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;
export const Icon = styled(FontAwesome)`
  /* font-size: 25px; */
`;
export const RankValue = styled.Text`
  font-size: 15px;
  color: white;
  font-family: "Lato-Black";
  margin-right: 5px;
`;
export const RankValueTotal = styled.Text`
  color: #333335;

  font-family: "Lato-Bold";
  /* margin-right: 5px; */
`;
export const ContainerRank = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  height: 3%;
`;
export const DescriptionValue = styled.Text`
  margin-bottom: 40px;
  color: #524e51;
  height: 35%;
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
  margin-left: 3px;
`;
export const SeasonsTitle = styled.Text`
  font-size: 15px;
  color: white;
  font-family: "Lato-Bold";
`;
export const ContainerIcon = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #403c3f;
  border-radius: 1px;
`;
export const ContainerList = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export const ListValue = styled.Text`
  font-family: "Lato-Bold";
  font-size: 16px;
  color: ${(props) => (props.active ? "white" : "#524E51")};
`;
export const Line = styled.View`
  margin-top: 5px;
  width: 14px;
  background: ${(props) => (props.active ? "#5ac4fe" : "transparent")};
  height: 3px;
  border-radius: 100px;
`;
export const ContainerItem = styled.TouchableOpacity`
  padding-right: 30px;
`;
export const ContainerFavorite = styled.TouchableOpacity``;
export const ContainerProducao = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0px;
  /* margin: 5px 0px; */
  /* background: #171717; */
  border-radius: 5px;
`;
export const ImageProducao = styled.ImageBackground.attrs({
  borderRadius: 100,
})`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  background: #191919;
  border-radius: 100px;
`;
export const NameProducao = styled.Text`
  color: white;
  font-family: "Lato-Bold";
  font-size: 16px;
  letter-spacing: 2px;
`;
export const NameJob = styled.Text`
  color: #6f696d;
  font-family: "Lato-Bold";
  font-size: 12px;
`;
export const ContainerVideo = styled.View`
  margin: auto;
  width: 100%;
  height: 300px;
`;
