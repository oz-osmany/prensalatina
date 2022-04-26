import { DrawerScreenProps } from '@react-navigation/drawer';
import React,{useEffect} from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../assets/theme';
import { useCuba } from '../hooks/useCuba';

const { width: windowWidth } = Dimensions.get('window');
interface Props extends DrawerScreenProps<any, any>{};

const Menu = ({ navigation }: Props) => {

   
    
    return (
        <View style={styles.container}>
            
           {/* {Logo()} */}
           <Image 
                   source={require("../assets/Images/pl.png")}
                   style={{width:70,height:46}}
                  /> 
           
               <Image
                       source={require("../assets/Images/identificador.png")}
                       style={{height:40,width:100,right:90}}
                      />
          
            <View  >
                <TouchableOpacity
                    onPress={ () => navigation.toggleDrawer() }
                    style={{marginRight:16,marginTop:5}}
                >
                
                    <Text >
                        <Icon
                                    color="black"
                                    name="menu-outline"
                                    size={ 30 }
                                />
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Menu
const styles = StyleSheet.create({
    container:{
        width:windowWidth,height:48,
        backgroundColor:COLORS.white,
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:2,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: -2
        
    }
});