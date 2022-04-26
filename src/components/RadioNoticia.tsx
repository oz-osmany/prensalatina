import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity,Image, Dimensions, StyleSheet,   } from 'react-native'
import { globalStyles, FONTS, COLORS } from '../assets/theme';

const { width: windowWidth } = Dimensions.get('window');

const RadioNoticia = ({datos,navigation}:any) => {
    const imagenPath=require("../assets/Images/pl.png")
    const tema=" | Noticias"
   
     let fecha=new Date().getTime()                
                         
    return (
        
        <View>
            <TouchableOpacity
                          onPress={()=>navigation.navigate("RadioDetail",{
                         ...datos
                        })} 
                        style={{flexDirection:"row",marginTop:10,backgroundColor:"white",width:windowWidth}}>

                        <View>                        
                            {
                             datos.featured_image.thumbnail.length>0&&<Image
                            source={{uri:datos.featured_image.thumbnail}}
                            style={{width:140,height:80}}
                            />
                            }
                           
                        </View> 
                        <View style={{width:"60%"}}>
                            
                            <View style={{width:"100%",height:80, marginTop:5,paddingHorizontal:5}}>
                                <Text
                                 style={{...FONTS.title,...globalStyles.title}}>
                                    {datos.title}   
                                    </Text>
                                     <View style={{flexDirection:"row"}} >
                                        <Text style={{color:COLORS.rojoEncabezado}}>
                                            { 
                                                Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))<1?
                                                Math.round((fecha - new Date(datos.date).getTime())/(10*360*24))+"min":
                                                Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))<24?
                                                Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))+"h":
                                                Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))+"d" 
                                            
                                            }
                                        </Text>
                                       {
                                            datos.tema>0?<Text style={{...globalStyles.tema}}>
                                            {" | " +datos.tema.map((tem:any)=>tem.name)}</Text>:
                                            <Text style={{...globalStyles.tema}}>
                                            {tema}
                                            </Text>
                                        }
                           
                                    </View>                                 
                            </View>
                        </View>
                    </TouchableOpacity>
        </View>
    )
}

export default RadioNoticia
const styless = StyleSheet.create({
    Nota:{
        justifyContent:"center",
        textAlign:"left",
         color:COLORS.fontColorBlack,
         fontWeight:"500",
         fontSize:15,
         fontFamily:"Helvetica"
    }
});