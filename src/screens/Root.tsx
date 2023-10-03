import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import TestScreen from "./TestScreen";
import Test2Screen from "./Test2Screen";

type Props = {};

const Stack = createStackNavigator();

const Root = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TestScreen"
        component={TestScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Test2Screen"
        component={Test2Screen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Root;
