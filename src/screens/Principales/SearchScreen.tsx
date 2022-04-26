import React, { useEffect,useState } from 'react'
import { ActivityIndicator, FlatList, Text,Platform, TouchableOpacity, View, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BotonNoticia from '../../components/BotonNoticia';
import Menu from '../../components/Menu';
import { useNotaInformativa } from '../../hooks/useNotaInformativa';
import { COLORS, globalStyles } from "../../assets/theme";
import { Buscador } from '../../components/Buscador';
import { PostCategory } from '../../interfaces/Posts';
import SearchLayout from '../../components/SearchLayout';
const screenWidth = Dimensions.get('window').width;

export const SearchScreen = ({ navigation,route }: any) => {

    const {articles,handleClick} = useNotaInformativa();
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
            <Buscador
                onDebounce={ (value) => setTerm( value )  }
                style={{
                    position: 'absolute',
                    alignSelf:"center",
                    zIndex: 999,
                    width: screenWidth - 20,
                    top: ( Platform.OS === 'ios' ) ? top : top + 50
                }}
                />
            <View style={ globalStyles.globalMargin }>
            <FlatList
            data={notaFiltered}
            keyExtractor={(item, index) => index.toString ()}
            renderItem={ ({ item}:any) => {
                return(
                    <SearchLayout datos={item} navigation={navigation}/>
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
