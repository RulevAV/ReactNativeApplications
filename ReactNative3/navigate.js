import React from "react";
import Main from "./Components/Main";
import FullInfo from "./Components/FullInfo";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={
            {
                title:"Главная",
                headerStyle:{
                    backgroundColor:"#eb5d3d",
                    headerTitleStyle:{fontWeight:"ligth"}
                }
            }
        } />
        <Stack.Screen name="FullInfo" component={FullInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;