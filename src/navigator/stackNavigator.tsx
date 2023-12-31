import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screen";




const Stack = createNativeStackNavigator();



const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}


export default StackNavigator;