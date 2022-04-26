import React, { useEffect, useState } from 'react'
import { Button,  Image, View, Text, ScrollView, SafeAreaView, TouchableOpacity, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { useCultura, useCulturaLimit } from '../../hooks/useCultura';
import Menu from '../../components/Menu';
import { useDeportes, useDeportesLimit } from '../../hooks/useDeportes';
import BotonNoticia from '../../components/BotonNoticia';
import { useAfricaLimit } from '../../hooks/useAfrica';
import Portada from '../../components/Portada';
import { useAsiaLimit } from '../../hooks/useAsia';
import { useCentroLimit } from '../../hooks/useCentroAmerica';
import { useCienciaLimit } from '../../hooks/useCiencia';
import { useCubaLimit } from '../../hooks/useCuba';
import { useEconomiaLimit } from '../../hooks/useEconomia';
import { useEuropaLimit } from '../../hooks/useEuropa';
import { useSuramericaLimit } from '../../hooks/useSurAmerica';
import { PostCategory } from '../../interfaces/Posts';
import { COLORS,globalStyles } from '../../assets/theme';

const wait = (timeout:any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
interface Props extends DrawerScreenProps<any, any>{};
export const PortadaScreen = ({ navigation,route }: any) => {    
     
     const {datosAfrica}=useAfricaLimit();  
      const {datosAsia}=useAsiaLimit();
     const {datosCentro}=useCentroLimit();
     const {datosCiencia}=useCienciaLimit();
     const {datosCultura}=useCulturaLimit();
     const {datosCuba}=useCubaLimit();
     const {datosDeporte}=useDeportesLimit();
     const {datosEconomia}=useEconomiaLimit();
     const {datosEuropa}=useEuropaLimit();
     const {datosSuramerica}=useSuramericaLimit();   
    
     const [refreshing, setRefreshing] = React.useState(false);

     const onRefresh = React.useCallback(() => {
       setRefreshing(true);
       wait(2000).then(() => setRefreshing(false));
     }, []);
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightGray2}}>
        <Menu navigation={navigation} route={route} />          
                  
            <View style={globalStyles.globalMargin} >      
           
          <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
          />
        }
          >               
                <View style={{marginTop:10}}>
                    <Text style={{color:"black"}}> CUBA </Text>
                    <View style={{width:400,height:1,backgroundColor:"black"}}></View> 
                    <Portada datos={datosCuba}  navigation={navigation}/>
                 </View> 
             <View style={{marginTop:10}}>
                  <Text style={{color:"black"}}> ASIA </Text>
                    <View style={{width:400,height:1,backgroundColor:"black"}}></View> 
                    <Portada datos={datosAsia} navigation={navigation} /> 
                 </View > 
                <View style={{marginTop:10}}>
                <Text style={{color:"black"}}>AFRICA</Text>
                    <View style={{width:400,height:1,backgroundColor:"black"}}></View> 
                    <Portada datos={datosAfrica} navigation={navigation} />  
                </View>     
                 <View style={{marginTop:10}}>
                    <Text style={{color:"black"}}> CENTRO AMERICA </Text>
                    <View style={{width:400,height:1,backgroundColor:"black"}}></View> 
                    <Portada datos={datosCentro} navigation={navigation} /> 
                </View> 
             <View style={{marginTop:10}}>
                    <Text style={{color:"black"}}> CIENCIA </Text>
                    <View style={{width:400,height:1,backgroundColor:"black"}}></View> 
                    <Portada datos={datosCiencia} navigation={navigation} />
                </View> 
                 <View style={{marginTop:10}}>
                    <Text style={{color:"black"}}> CULTURA </Text>
                    <View style={{width:400,height:1,backgroundColor:"black"}}></View> 
                    <Portada datos={datosCultura} navigation={navigation} />
                </View> 
                 <View style={{marginTop:10}}>
                    <Text style={{color:"black"}}> DEPORTE </Text>
                    <View style={{width:400,height:1,backgroundColor:"black"}}></View> 
                    <Portada datos={datosDeporte} navigation={navigation} />
                </View> 
               <View style={{marginTop:10}}>
                    <Text style={{color:"black"}}> ECONOMIA </Text>
                    <View style={{width:400,height:1,backgroundColor:"black"}}></View> 
                    <Portada datos={datosEconomia} navigation={navigation} />
                </View> 
                <View style={{marginTop:10}}>
                    <Text style={{color:"black"}}> EUROPA </Text>
                    <View style={{width:400,height:1,backgroundColor:"black"}}></View> 
                    <Portada datos={datosEuropa} navigation={navigation} />
                </View> 
                <View style={{marginTop:10,marginBottom:70}}>
                    <Text style={{color:"black"}}> SURAMERICA </Text>
                    <View style={{width:400,height:1,backgroundColor:"black"}}></View> 
                    <Portada datos={datosSuramerica} navigation={navigation} /> 
                </View>  
               
           </ScrollView>  
            </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
       flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
  

// import React, {useEffect, useState} from "react";
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// export const PortadaScreen = () => {

//     const navigation = useNavigation();
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
    
//     // useEffect(() => {
//     //     fetchData("https://randomuser.me/api/?results=20");
//     // }, []);

//     useEffect(() => {
//         navigation.setOptions({
//             headerLargeTitle: true,
//             headerTitle: "Home",
//             headerRight: () => (
//                 <TouchableOpacity
//                     // onPress={() => navigation.navigate("Stack")}
//                     style={{
//                         backgroundColor: "purple",
//                         width: 30,
//                         height: 30,
//                         borderRadius: 10,
//                         justifyContent: "center",
//                     }}
//                 >
//                     <Text
//                         style={{
//                             fontSize: 20,
//                             textAlign: "center",
//                             color: "white",
//                         }}
//                     >+</Text>
//                 </TouchableOpacity>
//             ),
            
//         });
//     }, [navigation]);

//     // const fetchData = async (url) => {
//     //     try {
//     //         const response = await fetch(url);
//     //         const json = await response.json();
//     //         setData(json.results);
//     //         setFilteredData(json.results);
//     //         console.log(json.results);
//     //     } catch (error) {
//     //         console.error(error);
//     //     }
//     // };

//     // const searchFilterFunction = (text) => {
//     //     if(text){  
//     //         const newData = data.filter(item => {
//     //             const itemData = item.name.first ? item.name.first.toUpperCase() : ''.toUpperCase();
//     //             const textData = text.toUpperCase();
//     //             return itemData.indexOf(textData) > -1;
//     //         })
//     //         setFilteredData(newData);
//     //     } else {
//     //         setFilteredData(data);
//     //     }
//     // }

//     return (
//         <ScrollView>
//             <Text style={{color:"black"}}>Friends</Text>
//             {/* {
//                 filteredData.map((item, index) => {
//                     return (
//                         <View key={index} style={styles.itemContainer}>
//                             <Image
//                                 source={{ uri: item.picture.large }}
//                                 style={styles.image}
//                             />
//                             <View>
//                                 <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
//                                 <Text style={styles.textEmail}>{item.login.username}</Text>
//                             </View>
//                         </View>
//                     )
//                 })
//             } */}
//         </ScrollView>
//     );
//     }

// // export default PortadaScreen;

// const styles = StyleSheet.create({
//     textFriends: {
//         fontSize: 20,
//         textAlign: 'left',
//         marginLeft: 10,
//         fontWeight: 'bold',
//         marginTop: 10,
//     },
//     itemContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginLeft: 10,
//         marginTop: 10,
//     },
//     image: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//     },
//     textName: {
//         fontSize: 17,
//         marginLeft: 10,
//         fontWeight: "600",
//     },
//     textEmail: {
//         fontSize: 14,
//         marginLeft: 10,
//         color: "grey",
//     },
// });