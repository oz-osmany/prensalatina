import React, { useContext, useEffect, useState } from 'react'
import { View, Text,Image, ScrollView, Platform, TouchableOpacity, Dimensions, useWindowDimensions, StyleSheet } from 'react-native'
import Share from 'react-native-share';
import { StackScreenProps } from '@react-navigation/stack'
import { GradientBackground } from '../../components/GradientBackground';
import { GradientContext } from '../../context/GradientContext';
import { getImageColors } from '../../helpers/getColores';

import { COLORS, globalStyles } from '../../assets/theme';
import Redes from '../../components/Redes';
import { useNavigation } from '@react-navigation/native';
import Radio from '../../components/Radio';
const { width: windowWidth } = Dimensions.get('window');
const { height: windowHeight } = Dimensions.get('window');


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
    audio:string
    creditos:any
    periodista_autor:string
    en_voz_de:string
    realizador:string
    editor:string
    
}
 type RootStackParams = {
    CubaScreen: undefined;
    CubaDetail: RootCuba;
  }
  
  var Sound = require('react-native-sound');
  Sound.setCategory('Playback');


interface Props extends StackScreenProps<RootStackParams, 'CubaDetail'>{};
 const RadioDetail = ({route,navigation }:Props) => {
        const datos = route.params;
        const imagenPath=require("../../assets/Images/pl.png")
        const navigations=useNavigation();
        let fecha=new Date().getTime()    
  
        let fragmento:any=datos.content;  
            const{width}=useWindowDimensions();
            const tema=" | Noticias" 
            
        //Configuracion para el audio
        const [playing, setPlaying] = useState(false);

        //Configurar los colores de fondo
        const { setMainColors } = useContext( GradientContext )
   
       const getPosterColors = async( index: number ) => {  
         // se toma la foto para analizar sus colores
        const uri =datos.featured_image.large
         const [ primary = 'green', secondary = 'orange' ] = await getImageColors( uri );
         setMainColors({ primary, secondary })   
   }
    useEffect(() => {
        getPosterColors(0)
      
  }, [])
      
        return (
          <GradientBackground>   
            <View>
              <ScrollView >
                    <View style={ {marginTop:10,...globalStyles.globalMargin,marginBottom:30} }>
                        {/* Categoria de la noticia */}
                        {
                            datos.category[0]?
                            <Text style={{...globalStyles.tema,fontSize:16,}}>
                            {datos.category[0].name} </Text>:
                            <Text style={{color:COLORS.fontColorBlack,fontSize:16,fontWeight:"700"}}>
                            Redacción Prensa Latina </Text>
                    
                        }
                        {/* Titulo de la noticia */}
                        <View>
                            <Text style={{...globalStyles.titleDetail,marginTop:5}}>
                                {
                                datos.title
                                }
                            </Text>
                        </View>
                        {/* Autor de la publicacion */}
                        <View style={{flexDirection:"row",marginVertical:10}}>
                            <Image source={require("../../assets/Images/micro.jpg")}
                                style={{width:15,height:25}}
                            />
                            {/*Tiempo de publicacion  */}
                            <Text style={{color:"gray",fontSize:15,left:5}}>
                                {
                                    Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))<1?
                                    Math.round((fecha - new Date(datos.date).getTime())/(10*360*24))+"min":
                                    Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))<24?
                                    Math.round((fecha - new Date(datos.date).getTime())/(1000*360*24))+"h":
                                    Math.round((fecha - new Date(datos.date).getTime())/(10000*360*24))+"d"
                                 }
                            </Text>
                            <Text style={{...globalStyles.tema,left:10}}>
                                {
                                    datos.creditos[0]?.periodista_autor
                                }
                            </Text>
                        </View>
                        
                       
                       
                        {/* Imagen principal */}
                        <View style={{width:"100%",height:370,borderRadius:10}}>
                            <Image
                            source={datos.featured_image.large.length>0?{uri:datos.featured_image.large}:imagenPath}
                            style={{width:"95%",height:250,marginHorizontal:10,top:10}}
                            />
                            
                            {/* Audio */}
                            <Radio datos={datos} navigation={undefined}/>      
                            
                            <View>
                            
                        </View>
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
                        <Text style={{marginTop:20,color:"white",fontSize:20,fontWeight:"300"}}>
                            {
                                datos.content
                            }
                        </Text>
                        <View style={{top:20,left:30}}>
                            <Text style={{color:"white"}}>En voz de : {datos.creditos[0].en_voz_de}</Text>
                            <Text style={{color:"white"}}>Editor web : {datos.creditos[0].editor}</Text>
                            <Text style={{color:"white"}}>Realizador : {datos.creditos[0].realizador}</Text>
                            
                        </View>
                    </View>
                   
                
              </ScrollView>
                
                <Redes datos={datos}/>
                    
            </View>
            </GradientBackground>   
        )
    }
 export default RadioDetail
   
 const styles = StyleSheet.create({
    container: {
     with:windowWidth,
     height:70,   
     top:30,
     
    },
    playBtn: {
      padding: 10,
    },
  });