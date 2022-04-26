import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Dimensions, FlatList, Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';

import { useCultura } from '../../hooks/useCultura';
import { useNorteamerica } from '../../hooks/useNorteamerica';
import Menu from '../../components/Menu';
import { useEconomia, useEconomiaUna } from '../../hooks/useEconomia';
import BotonNoticia from '../../components/BotonNoticia';
import { COLORS,globalStyles } from '../../assets/theme';
import BtNoticia from '../../components/BtNoticia';
import TopNoticia from '../../components/TopNoticia';
import { PostCategory } from '../../interfaces/Posts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Buscador } from '../../components/Buscador';

const { width: windowWidth } = Dimensions.get('window');

export const EconomiaScreen = ({ navigation,route }: any) => {    
  /*  const navigator = useNavigation();*/  
    const {articles,handleClick}=useEconomia();        
    const {datosEconomia}=useEconomiaUna()
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
        
        <TopNoticia datos={datosEconomia}  navigation={navigation}/> 
        <View style={ {height:530,...globalStyles.globalMargin}}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString ()}
        renderItem={ ({ item}:any) => {
            return(
                <BtNoticia datos={item} navigation={navigation}/>
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

