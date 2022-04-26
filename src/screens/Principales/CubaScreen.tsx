
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS, globalStyles } from "../../assets/theme";
import BotonNoticia from "../../components/BotonNoticia";
import BtNoticia from "../../components/BtNoticia";
import { Buscador } from "../../components/Buscador";
import Menu from "../../components/Menu";
import Portada from "../../components/Portada";
import TopNoticia from "../../components/TopNoticia";
// import { CubaScreen } from './CubaScreen';
import { useCuba, useCubaLimit, useCubaUna } from '../../hooks/useCuba';
import { PostCategory } from "../../interfaces/Posts";
const { width: windowWidth } = Dimensions.get('window');
    
  export const CubaScreen=({ navigation,route }: any)=>{
       const {articles,handleClick}=useCuba();
        const {datosCuba}=useCubaUna();

        
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
         
               <TopNoticia datos={datosCuba}  navigation={navigation}/> 
              <View style={ {height:530,...globalStyles.globalMargin} }>
              
                
             <FlatList
                data={articles}
                showsVerticalScrollIndicator={false}
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
   
};
