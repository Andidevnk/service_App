import React, { useEffect, useState } from "react";
import { Keyboard, Text, View,TouchableWithoutFeedback, KeyboardAvoidingView, Platform,ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slice/loginSlice";
import Device from 'react-native-device-info';
import { BackgroundImage, KeyboardComponent } from "../../components";
import { styles } from "../../constant";


const Login = () => {
    const deviceType = Device.isTablet();
    const userId = useSelector((state: any) => state.login.userId)
    const dispatch = useDispatch();
    return (
        <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <View style={styles.mainConatiner}>
        <BackgroundImage source={require('../../assets/images/background.png')} resizemode="cover" style={styles.backhgroundImageStyle}></BackgroundImage>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
       

    )
}



export default Login;