import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity,Image, Dimensions,  } from 'react-native'
import { globalStyles, FONTS, COLORS } from '../assets/theme';

const { width: windowWidth } = Dimensions.get('window');
const BotonNoticia = ({datos,navigation}:any) => {
    const imagenPath=require("../assets/Images/pl.png")
    // console.log(datos);
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let fecha=new Date().getTime() 
    const tema=" | Noticias"   
    return (
        <View>
            <TouchableOpacity
             onPress={()=>navigation.navigate("Details",{
               ...datos
            })}
            style={{flexDirection:"row",marginTop:10}}>
            <View >
                <Image
                    source={datos.featured_image.large.length>0?{uri:datos.featured_image.large}:imagenPath}
                    style={{width:windowWidth,height:250}}
                     resizeMode='cover'
                    />  
                    <View style={{width:"95%"}}>
                         <Text style={{...FONTS.title,...globalStyles.titleOpinion}}>
                             {datos.title}
                         </Text>
                    </View>
                    <View style={{flexDirection:"row",marginBottom:5}}>
                         <Text style={{color:"gray",fontSize:15}}>
                            {
                         
                            Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))<1?
                            Math.round((fecha - new Date(datos.date).getTime())/(10*360*24))+"min":
                            Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))<24?
                            Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))+"h":
                            Math.round((fecha - new Date(datos.date).getTime())/(10000*360*24))+"d"
                             }
                                             </Text>
                            {/* Aqui se pone el tema */}
                            {
                            datos.tema.length>0?<View style={{flexDirection:"row"}}>
                                <Text style={{...globalStyles.tema,color:"gray"}}>{" | "}</Text>
                                <Text style={{...globalStyles.tema}}>
                                    { datos.tema.map((tem:any)=>tem.name)}</Text>
                            </View>:
                            <Text style={{...globalStyles.tema}}>
                                {tema}
                            </Text>
                            }
                     </View>
                
            </View>
                </TouchableOpacity>
        </View>
    )
}

export default BotonNoticia
