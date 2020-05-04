import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from "../pages/Home";
import Description from "../pages/Description";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name={"Home"} component={Home} />
        <AppStack.Screen name={"Description"} component={Description} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
