import React from "react";
import { ImageBackground } from "react-native";


interface Props {
    source:any,
    resizemode:any,
    style:any
    
}



const BackgroundImage : React.FC<Props> = ({source,resizemode,style}) => {
    console.log("source",source);
    
return(
    <ImageBackground source={source}  resizeMode={resizemode} style={style}/>
)
}


export default BackgroundImage;