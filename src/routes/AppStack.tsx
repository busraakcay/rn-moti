import React from "react";
import { appScreens } from "../utils/appScreens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator>
      {appScreens.map((stackScreen) => {
        return (
          <Stack.Screen
            key={stackScreen.name}
            name={stackScreen.name}
            component={stackScreen.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};
