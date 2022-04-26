import React, { useEffect } from 'react'
import { View, Text,Image, ScrollView, Platform, TouchableOpacity, Dimensions, useWindowDimensions } from 'react-native'
import Share from 'react-native-share';
import { StackScreenProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'

import { COLORS, globalStyles } from '../../assets/theme';
import RenderHTML from 'react-native-render-html';
import Redes from '../../components/Redes';
import { log } from 'console';
import { useNavigation } from '@react-navigation/native';
import Colaboradores from '../../components/Colaboradores';
const { width: windowWidth } = Dimensions.get('window');


interface RootCuba{
    title:any;
    date:Date;
    excerpt:any;
    content:any;
    featured_image:any;
    guid:string;
    author:string;
    mostrar_firma:boolean
    tema:any
    autores_escaner:any
    tema_escaner:any
    colaboradores_escaners:string
    nombre:string
    category:any
    name:string
}
 type RootStackParams = {
    CubaScreen: undefined;
    CubaDetail: RootCuba;
  }
  

interface Props extends StackScreenProps<RootStackParams, 'CubaDetail'>{};
 const Details = ({
                route,navigation
    }:Props) => {
        const datos = route.params;
        const imagenPath=require("../../assets/Images/pl.png")
        const navigations=useNavigation();
        let fecha=new Date().getTime()    
  
        const myreg=/(<p>|<\/p>|<br \/>)/g;
        const myregex=/(<p>)/g;
        const espP=/(\r\n\r\n)/g;
        
        let fragmento:any=datos.content;  
        let parrafo=fragmento.indexOf("<p>")
       let esp=fragmento.indexOf("\r\n\r\n")
        //  console.log(datos.category[0].name);
        
        let expect=datos.excerpt;
        expect=expect.replace(myreg,"")
        if(parrafo>=0){           
            //Si viene con <p>lo reemplaza con css
            fragmento=fragmento.replace(myregex,'<p style="color:black;font-size:20px;text-align:left;line-height:30px;font-weight:300; ">')
        }else{
            //si no viene con <p> se lo pone
            if(esp>0)
           {
             fragmento=fragmento.replace(espP,'</p><p style="color:black;font-size:20px;text-align:left;line-height:30px;font-weight:300; ">')
              fragmento='<p style="color:black;font-size:20px;text-align:left;line-height:30px;font-weight:300;">'+fragmento+'</p>'
           }
            
        }
        expect=expect.replace(myregex,"")
        let textIni="";
        let textFin="";
        let nuevoFragmento="";
        let source="";
        let todo=[];
        //  console.log(fragmento);
        if(fragmento.includes("<iframe"))
        {
            //para saber cuantas imagenes y videos hay
           
            let countV = fragmento.split("<iframe").length - 1
                for(let i=0;i<countV;i++){
                    //saber inicio y fin de iframe
                    let posIniV=fragmento.indexOf("<iframe")
                    let posFinV=fragmento.indexOf("</iframe>") 
                    //saber si comienza con video y que exista el video
                    if(posIniV>0) {                         
                        //toma la etiqueta del iframe 
                        nuevoFragmento=fragmento.slice(posIniV,posFinV+9);       
                        textIni=fragmento.slice(0,posIniV)            
                         
                        let sourceIni=nuevoFragmento.indexOf("src")
                        let corte=nuevoFragmento.slice(sourceIni+5,posFinV)//para tener el src            
                        let sourceFin=corte.indexOf(' ')//tengo la parte final del src            
                        source=corte.slice(0,sourceFin-1)   
                        fragmento=textIni+" "+`<a href=${source}>${source}</a>`+ " "+ fragmento.slice(posFinV+9)

                     }
                }
           
        }
        else{
                //Para poner el resto
                textIni=fragmento;
                todo[0]={textIni,source,textFin} // console.log(fragmento);
        
            }
                      
            const sources={
                html:`${fragmento}`
            }
        //   console.log(sources);
            const{width}=useWindowDimensions();
            const tema=" | Noticias" 
            
        return (

            <View>
                
                <ScrollView >
                    <Image
                    source={datos.featured_image.large.length>0?{uri:datos.featured_image.large}:imagenPath}
                    style={{width:windowWidth,height:250}}
                    />
                    <View style={ {...globalStyles.globalMargin} }>
                        <Text style={{...globalStyles.titleDetail}}>
                            {
                            datos.title
                            }
                        </Text>
                        </View>
                
                        <View style={ {marginTop:10,...globalStyles.globalMargin} }>
                
                         {
                             datos.category[0].name==="Escaner"?null:
                             datos.mostrar_firma===true?<Text style={{color:COLORS.fontColorBlack,fontSize:16,top:5}}>
                             {datos.author} </Text>:
                             <Text style={{color:COLORS.fontColorBlack,fontSize:16,fontWeight:"700",top:5}}>
                             Redacción Prensa Latina </Text>
                
                         }
                         <View style={{flexDirection:"row",marginTop:10}}>
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
                
                                datos.tema_escaner?<View style={{flexDirection:"row"}}>
                                    <Text style={{...globalStyles.tema,color:"gray"}}>{" | "}</Text>
                                    <Text style={{...globalStyles.tema}}>
                                        { datos.tema_escaner[0].name}</Text>
                                </View>:
                                datos.tema?.length>0?<View style={{flexDirection:"row"}}>
                                <Text style={{...globalStyles.tema,color:"gray"}}>{" | "}</Text>
                                <Text style={{...globalStyles.tema}}>
                                    { datos.tema.map((tem:any)=>tem.name)}</Text>
                            </View>:
                            <Text style={{...globalStyles.tema}}>
                                {tema}
                            </Text>
                
                                }
                
                        </View>
                        <View>
                            {
                
                                datos.autores_escaner?.length>0&& <View style={{flexDirection:"row",marginTop:10}}><Text style={{color:"black"}}>Por: </Text>
                                    <Image source={{uri:datos.autores_escaner[0].foto_perfil.sizes.thumbnail}}
                                    style={{width:50,height:50,borderRadius:100,marginLeft:10}}/>
                                    <View style={{flexDirection:"column"}}>
                                        <Text style={{color:"black",fontSize:15,marginLeft:10}}>{datos.autores_escaner[0].nombre}</Text>
                                        <Text style={{color:"black",fontSize:15,marginLeft:10}}>{datos.autores_escaner[0].biografia}</Text>
                                    </View>
                                </View>
                            }
                        </View>
                        <Text style={{marginTop:20,...globalStyles.expect}}>{expect}</Text>
                
                         
                                   <RenderHTML
                                    contentWidth={width}
                                    source={sources}
                                />
                                                    
                    </View>
                   
                    {
                        datos.colaboradores_escaners?.length>0&&<View style={{bottom:20}}>
                            <Text style={{color:"black",marginVertical:15,marginLeft:10,fontSize:15}}>Colaboraron en este trabajo:</Text>
                            <Colaboradores datos={datos.colaboradores_escaners}/>
                        </View>
                        
                    }
                
                </ScrollView>
                <Redes datos={datos}/>
                    
            </View>
        )
    }
 export default Details
   