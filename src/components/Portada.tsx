import React from 'react'
import { ScrollView, Text, FlatList,View, Image,TouchableOpacity, Dimensions } from 'react-native'
import { COLORS, globalStyles } from '../assets/theme';
const { width: windowWidth } = Dimensions.get('window');
const Portada = ({datos,navigation}:any) => {
//    console.log(datos)
    const imagenPath=require("../assets/Images/pl.png")
    const tema=" | Noticias"
    let fecha=new Date().getTime()  
    let date1 = new Date();
    let date2 = new Date(2019, 10, 0o3, 11, 45, 55); 
    const result=(date1.getTime()-date2.getTime())/86400000
  
    
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
     return (
        
        datos.map((item:any,index:any)=>{
            let wt=""
        //   let ancho=item.featured_image.medium.length>0?wt="100%":wt="100%"
            return(
                <View key={index.toString()}>
                    <TouchableOpacity
                          onPress={()=>navigation.navigate("Details",{
                         ...item
                        })} 
                        style={{flexDirection:"row",marginTop:10,backgroundColor:COLORS.white,width:windowWidth}}>

                        <View style={{width:"35%"}}>                        
                            {
                             item.featured_image.medium.length>0?<Image
                            source={{uri:item.featured_image.medium}}
                            style={{width:145,height:90}}
                            />:null
                            } 
                           
                        </View> 
                        <View style={{width:"60%"}}>
                                <View style={{width:"100%", marginTop:5,paddingHorizontal:5}}>
                                    <Text style={globalStyles.title}>
                                    {item.title}   
                                    </Text>
                                
                                    <View style={{flexDirection:"row"}}>
                                        <Text style={{color:COLORS.rojoEncabezado}}>
                                            {
                                            //     months[new Date(item.date).getMonth()] + "-" +
                                            //    new Date(item.date).getDate() +"-"
                                            //     + new Date(item.date).getFullYear()
                                            Math.round((fecha - new Date(item.date).getTime())/(1000*360*24))<1?
                                            Math.round((fecha - new Date(item.date).getTime())/(10*360*24))+"min":
                                            Math.round((fecha - new Date(item.date).getTime())/(1000*360*24))<24?
                                            Math.round((fecha - new Date(item.date).getTime())/(1000*360*24))+"h":
                                            Math.round((fecha - new Date(item.date).getTime())/(1000*360*24))+"d" 
                                            }
                                        </Text>
                                            {
                                                item.tema.length>0?<Text style={{...globalStyles.tema}} key={index.toString()}>
                                                {" | " +item.tema.map((tem:any)=>tem.name)}</Text>:
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
        })
     )
}
export default Portada
