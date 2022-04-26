import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Dimensions, FlatList, Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';

import { useNorteamerica, useNorteamericaUna } from '../../hooks/useNorteamerica';
import Menu from '../../components/Menu';
import BotonNoticia from '../../components/BotonNoticia';
import BtNoticia from '../../components/BtNoticia';
import TopNoticia from '../../components/TopNoticia';
import { COLORS,globalStyles } from '../../assets/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PostCategory } from '../../interfaces/Posts';
import { Buscador } from '../../components/Buscador';

const { width: windowWidth } = Dimensions.get('window');


export const NorteamericaScreen = ({ navigation,route }: any) => {    
  /*  const navigator = useNavigation();*/  
    const {datosNorteamerica}=useNorteamericaUna();        
    const {articles,handleClick}=useNorteamerica();
    const [term,setTerm]=useState("")
    const [notaFiltered, setNotaFiltered] = useState<PostCategory[]>([])
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
    return (
        <View style={{backgroundColor:COLORS.lightGray2}}>
       <Menu navigation={navigation} route={route} /> 
      
        <TopNoticia datos={datosNorteamerica}  navigation={navigation}/> 
        <View style={{height:530,...globalStyles.globalMargin}}>
       
        <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString ()}
        renderItem={ ({ item}:any) => {
            return(
               
                <BtNoticia datos={item}  navigation={navigation}/>
                
            )
        } }
        
        // infinite scroll             
        onEndReachedThreshold={ 0.5 }
        onEndReached={ handleClick }
        ListFooterComponent={( 
            <ActivityIndicator
                style={{ height: 150 }} 
                size={ 20 }
                color="grey"
            /> 
        )}
        
        />  
        
        
        </View>
    </View>
    )
}
