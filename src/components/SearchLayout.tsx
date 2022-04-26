import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity,Image, Dimensions,  } from 'react-native'
import { globalStyles, FONTS, COLORS } from '../assets/theme';

const { width: windowWidth } = Dimensions.get('window');
const SearchLayout = ({datos,navigation}:any) => {
    const imagenPath=require("../assets/Images/pl.png")
    // console.log(datos);
    let fecha=new Date().getTime() 
    const tema=" | Noticias"   
    // let wt=0
    // let ancho=item.featured_image.medium.length>0?wt=250:wt=390
    
    return (
        <View>
            <TouchableOpacity
             onPress={()=>navigation.navigate("Details",{
               ...datos
            })}
            style={{flexDirection:"row",marginTop:10}}>
            
            <View>                        
                {
                 datos.featured_image.medium.length>0?<Image
                source={{uri:datos.featured_image.medium}}
                style={{width:145,height:85}}
                />:null
                } 
                           
                 </View> 
                <View style={{width:280}}>
                <View style={{width:250, marginTop:5,paddingHorizontal:5}}>
                    <Text style={globalStyles.title}>
                    {datos.title}   
                    </Text>
                          
                        <View style={{flexDirection:"row"}}>
                           <Text style={{color:COLORS.rojoEncabezado}}>
                               {
                            //     months[new Date(datos.date).getMonth()] + "-" +
                            //    new Date(datos.date).getDate() +"-"
                            //     + new Date(datos.date).getFullYear()
                            Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))<1?
                            Math.round((fecha - new Date(datos.date).getTime())/(10*360*24))+"min":
                            Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))<24?
                            Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))+"h":
                            Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))+"d" 
                                }
                                </Text>
                           {
                            datos.tema.length>0?<Text style={{...globalStyles.tema}} >
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

export default SearchLayout
