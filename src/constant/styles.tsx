import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "./dimensions";



export const styles = StyleSheet.create({
    keyboardStyle:{
        flex:1,
        flexDirection:"column"
    },
    backhgroundImageStyle:{
        flex:1,
        justifyContent:"center"
    },
    mainConatiner:{
        flex:1,
        width:windowWidth,
        height:windowHeight,
        flexDirection:"column",
        zIndex:1
    }
})