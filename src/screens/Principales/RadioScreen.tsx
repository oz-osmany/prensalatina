import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, globalStyles } from '../../assets/theme';
import BtNoticia from '../../components/BtNoticia';
import Menu from '../../components/Menu';
import RadioNoticia from '../../components/RadioNoticia';
import TopNoticia from '../../components/TopNoticia';
import { useRadio, useRadioDiez, useRadioOnline } from '../../hooks/useRadio';
import { PostCategory } from '../../interfaces/Posts';
import Slider from '@react-native-community/slider';
import Radio from '../../components/Radio';
export const RadioScreen = ({ navigation,route }: any) => {
  
  const {articles,handleClick}=useRadio();
  const {datosRadio}=useRadioDiez();  
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
        
        <TopNoticia datos={datosRadio}  navigation={navigation}/> 
        <View style={ {height:530,...globalStyles.globalMargin}}>
       
          <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString ()}
          renderItem={ ({ item}:any) => {
              return(
                  <RadioNoticia datos={item}  navigation={navigation}/>
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
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#000',
  },
  playBtn: {
    padding: 20,
  },
});

