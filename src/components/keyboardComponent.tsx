import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "../constant";




const KeyboardComponent = (props:any) => {
    console.log("Hello");
    
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardStyle}
        >
        </KeyboardAvoidingView>
    )
} 


export default KeyboardComponent;