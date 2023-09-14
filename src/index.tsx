import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store";
import { Provider } from "react-redux";
import StackNavigator from "./navigator/stackNavigator";


// define root for stack 
const AppRoot = () => {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}


export default () => {
    return (
        <Provider store={store}>
            <AppRoot/>
        </Provider>
    )
}
