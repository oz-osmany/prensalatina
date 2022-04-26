import { View, Text, TouchableOpacity, Linking, Platform, Image } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';
import { globalStyles } from '../assets/theme';
const Redes=({datos}:any)=>{
       
    const ButtomShare=async()=>{
        const options={
            message:datos.guid
        }
        
        try{
            Share.open(options)
        }
      catch(err)  {
        err && console.log(err);
      };
    }
    return(
        // <View style={{...globalStyles.shareButton,...globalStyles.shadowShare}}>
        <TouchableOpacity
        onPress={() => ButtomShare() }
        style={{...globalStyles.shareButton}}
    >
        {
            Platform.OS === 'ios'?<Image 
            source={require("../assets/Images/shareios.png")}
            style={{width:25,height:25}}
             />:<Image 
            source={require("../assets/Images/android-share.png")}
            style={{width:25,height:25}}
            />
        }
            
        </TouchableOpacity> 
                
    )
}
// const Redes = ({guid,titulo}:any) => {
//     let share="https://www.prensa-latina.cu/2022/02/18/tenista-rumana-halep-cae-en-semifinales-de-dubai"
//     let title="titulo del Post"
//   return (
//     <View style={{flexDirection:"row",marginVertical:10}}>
//                         <TouchableOpacity onPress={() => {
//                             let url = `whatsapp://send?text=${guid}`;
//                             Linking.openURL(url).then((data) => {
//                             // console.log('open whatsapp', data)
//                             }).catch(() => {
//                             console.log('App not installed')
//                             });
                            
//                         }}
//                         style={{marginLeft:15}} 
//                         >
//                         

export default Redes