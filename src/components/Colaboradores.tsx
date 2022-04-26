import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../assets/theme'


const Colaboradores = ({datos}:any) => {
    
  return (
    <View>
        <FlatList
            data={datos}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>{
                return(
                    <View style={{width:350,height:200,backgroundColor:"#D7D6DC", marginHorizontal:30,borderRadius:10}}>
                       <Image source={{uri:item.foto_perfil.url}}
                       style={{width:120,height:120,borderRadius:100,marginVertical:10,alignSelf:"center",justifyContent:"center"}}/>
                        <Text style={{width:340,textAlign:"center",color:"black"}}>{item.nombre}</Text>
                        <Text style={{width:340,textAlign:"center",color:"black"}}>{item.biografia}</Text>
                    </View>
                )
            }}
           
        />
        
    </View>
  )
}

export default Colaboradores