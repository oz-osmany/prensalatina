import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Dimensions, FlatList, Image, Platform, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';

import Menu from '../../components/Menu';
import BotonNoticia from '../../components/BotonNoticia';
import { useScanner } from '../../hooks/useScanner';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PostCategory } from '../../interfaces/Posts';
import { Buscador } from '../../components/Buscador';
import { COLORS,globalStyles } from '../../assets/theme';

const { width: windowWidth } = Dimensions.get('window');


export const ScannerScreen = ({ navigation,route }: any) => {    
  /*  const navigator = useNavigation();*/  
    const {articles,handleClick}=useScanner();        
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
        <View>
        <Menu navigation={navigation} route={route} /> 
        
        <View style={ globalStyles.globalMargin }>
            
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString ()}
        renderItem={ ({ item}:any) => {
            return(
                <BotonNoticia datos={item} navigation={navigation}/>
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

