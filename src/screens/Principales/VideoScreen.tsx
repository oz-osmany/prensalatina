import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Dimensions, FlatList, Image, Platform, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import YouTubePlayer from 'react-native-youtube-iframe';

import Menu from '../../components/Menu';
import { useVideo } from '../../hooks/useVideo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PostCategory } from '../../interfaces/Posts';
import { COLORS,FONTS,globalStyles } from '../../assets/theme';

const { width: windowWidth } = Dimensions.get('window');


export const VideoScreen = ({ navigation,route }: any) => {    
  /*  const navigator = useNavigation();*/  
    const {articles,handleClick}=useVideo();        
    const [term,setTerm]=useState("")
    const [notaFiltered, setNotaFiltered] = useState<PostCategory[]>([])
    let fecha=new Date().getTime() 
    const tema=" | Noticias"    
        useEffect(() => {
          if ( term.length === 0 ) {
               return setNotaFiltered(articles);
          }
          if ( isNaN( Number(term) ) ) {
              setNotaFiltered(
                  articles.filter( 
                      (nota) => nota.title.toLocaleLowerCase()
                          .includes( term.toLocaleLowerCase() )
                  )
              );
            
           } 
        
      }, [term])
      const { top } = useSafeAreaInsets();

      let result=[]
      let url:string=""
      let newUrl=""
      let pos=0;
      result=articles.map(art=>{
         url=art.Youtube_URL;
         let pos=url.indexOf("v=")
         newUrl=url.slice(pos+2)
         
         
         art.Youtube_URL=newUrl
        return [newUrl,art.Youtube_URL]
        
      })
      
    return (
        <View>
        <Menu navigation={navigation} route={route} /> 
        
        <View style={ globalStyles.globalMargin }>
            
      <FlatList
        data={articles }
        keyExtractor={(item, index) => index.toString ()}
        renderItem={ ({ item}:any) => {
            return(
                // <BotonNoticia item={item} navigation={navigation}/>
                <View >
                   <YouTubePlayer
                    videoId={item.Youtube_URL} // The YouTube video ID{item.Youtube_URL}
                    play={false} // control playback of video with true/false
                    height={250} //  
                    />
                   
                  <View style={{width:"95%",bottom:25}}>
                        <Text style={{...FONTS.title,...globalStyles.titleOpinion}}>
                            {item.title}
                        </Text>
                  </View>
                    <View style={{flexDirection:"row",bottom:20}}>
                         <Text style={{color:"gray",fontSize:15}}>
                            {
                         
                            Math.round((fecha - new Date(item.date).getTime())/(1000*360*24))<1?
                            Math.round((fecha - new Date(item.date).getTime())/(10*360*24))+"min":
                            Math.round((fecha - new Date(item.date).getTime())/(1000*360*24))<24?
                            Math.round((fecha - new Date(item.date).getTime())/(1000*360*24))+"h":
                            Math.round((fecha - new Date(item.date).getTime())/(10000*360*24))+"d"
                             }
                                             </Text>
                            {/* Aqui se pone el tema */}
                            {
                            item.tema.length>0?<View style={{flexDirection:"row"}}>
                            <Text style={{...globalStyles.tema,color:"gray"}}>{" | "}</Text>
                            <Text style={{...globalStyles.tema}}>
                                { item.tema.map((tem:any)=>tem.name)}</Text>
                        </View>:
                        <Text style={{...globalStyles.tema}}>
                            {tema}
                        </Text>
                            }
                     </View>
                
            </View>
            )
        } }
        onEndReachedThreshold={ 0.5 }
            onEndReached={ handleClick }
            ListFooterComponent={( 
                <ActivityIndicator 
                    style={{ height: 100 }} 
                    size={ 20 }
                    color="grey"
                /> 
            )}
        />  
         
        </View>
    </View>
    )
}







