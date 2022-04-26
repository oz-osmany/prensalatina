import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Dimensions, FlatList, Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { useCentro, useCentroUna } from '../../hooks/useCentroAmerica';
import Menu from '../../components/Menu';
import BotonNoticia from '../../components/BotonNoticia';
import TopNoticia from '../../components/TopNoticia';
import BtNoticia from '../../components/BtNoticia';
import { COLORS,globalStyles } from '../../assets/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PostCategory } from '../../interfaces/Posts';
import { Buscador } from '../../components/Buscador';

const { width: windowWidth } = Dimensions.get('window');


interface Props extends DrawerScreenProps<any, any>{};
export const CentroamericaScreen = ({ navigation,route }: Props) => {    
  /*  const navigator = useNavigation();*/  
    const {datosCentro}=useCentroUna();    
    const {articles,handleClick}=useCentro();
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
        
        <TopNoticia datos={datosCentro}  navigation={navigation}/> 
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

