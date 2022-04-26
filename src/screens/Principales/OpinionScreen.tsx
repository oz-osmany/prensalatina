import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { COLORS,globalStyles } from '../../assets/theme';

import Menu from '../../components/Menu';
import BotonNoticia from '../../components/BotonNoticia';
import { useOpinion } from '../../hooks/useOpinion';


export const OpinionScreen = ({ navigation,route }: any) => {    
  /*  const navigator = useNavigation();*/  
    const {articles,handleClick}=useOpinion();        
     
    
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

