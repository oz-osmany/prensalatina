import React from 'react'
import { ScrollView, Text, FlatList,View, Image,TouchableOpacity, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, globalStyles } from '../assets/theme';
const { width: windowWidth } = Dimensions.get('window');
const TopNoticia = ({datos,navigation}:any) => {
   
    const imagenPath=require("../assets/Images/pl.png")
    //  console.log(datos[0].title);
    let date1 = new Date();
    let date2 = new Date(2019, 10, 0o3, 11, 45, 55); 
    const result=(date1.getTime()-date2.getTime())/86400000
     let count=0;
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
     return (
        
        datos.map((item:any,index:any)=>{
            let wt=0
            count++;
             let ancho=item.feature?wt=250:wt=390
            return(
               

                <View key={index.toString()}>
                    {
                    count===9&&                    
                    <TouchableOpacity
                          onPress={()=>navigation.navigate("Details",{
                         ...item
                        })} 
                        style={{flexDirection:"row",backgroundColor:COLORS.white}}>

                        <View>                        
                            {
                             item.featured_image.large?<Image
                            source={{uri:item.featured_image.large}}
                            style={{width:windowWidth,height:250}}
                            />:<Image
                            source={imagenPath}
                            style={{width:windowWidth,height:250}}
                            />
                            } 
                            <View
                    style={{flex:1,justifyContent:"flex-end"}}
                >
                   <LinearGradient
                        start={{x:0,y:0}}
                        end={{x:0,y:1}}
                        colors={["transparent",COLORS.fontColorBlack]}
                        style={{...globalStyles.gradiente}}
                    > 
                        <Text
                            style={{color:COLORS.white,fontSize:24,lineHeight:30,bottom:10,width:ancho
                            }}>
                            {item.title}
                        </Text>
                            
                    </LinearGradient> 

                </View>
                           <View
                    style={{flex:1,justifyContent:"flex-end"}}
                >
                   
                </View>
                        </View> 
                        <View style={{width:280}}>
                        {/* <View style={{width:280, marginTop:5,paddingHorizontal:5}}>
                        <Text style={{justifyContent:"center",textAlign:"left", color:COLORS.fontColorBlack,fontWeight:"500",fontSize:15,fontFamily:"Helvetica"}}>
                            {item.title.rendered}   
                            </Text>
                         <Text style={{color:"gray"}}>{ months[new Date(item.date).getMonth()] + "-" +new Date(item.date).getDate() +"-" + new Date(item.date).getFullYear()}</Text> 
                         
                        </View> */}
                        </View>
                    </TouchableOpacity>
                    
                    
                    }
                    
                </View>    
                
            
            )
           
        })
     )
}
export default TopNoticia
