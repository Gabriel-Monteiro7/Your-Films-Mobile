import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Description from '../pages/Description';
import Home from '../pages/Home';
import Video from '../pages/Video';
import { changeOptionRequest } from '../store/modules/options/actions';
import { options } from '../util';

const Drawer = createDrawerNavigator();

export default function Routes() {
  const dispatch = useDispatch();

  let { valueSelected } = useSelector((state) => state.options);
  function changeOptions(value, navigation) {
    if (value !== valueSelected.option.id) {
      navigation.jumpTo("Home");
      dispatch(changeOptionRequest(value));
    }
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{ backgroundColor: "#111111" }}
        initialRouteName="Filmes"
        drawerContent={({ navigation }) => (
          <DrawerContentScrollView style>
            {options.map((value, index) => {
              return (
                <DrawerItem
                  inactiveTintColor={"white"}
                  key={index}
                  label={value.title}
                  focused={
                    valueSelected.option.id === value.id
                      ? ({ focused, color, size }) => (
                          <Icon
                            color={color}
                            size={size}
                            name={focused ? "heart" : "heart-outline"}
                          />
                        )
                      : null
                  }
                  onPress={() => {
                    changeOptions(value.id, navigation);
                    navigation.closeDrawer();
                  }}
                />
              );
            })}
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Description" component={Description} />
        <Drawer.Screen name="Video" component={Video} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
