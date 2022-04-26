import React from 'react';

 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { AfricaNavigator, CentroNavigator, CienciaNavigator, CubaNavigator, CulturaNavigator, DeporteNavigator, EconomiaNavigator, EuropaNavigator, NorteamericaNavigator, SuramericaNavigator } from './StackNavigator';
 import { AsiaNavigator } from './StackNavigator';
import { LogBox, Text, useWindowDimensions, View } from 'react-native';
import { BotomNavigator } from './BottomNavigator';

  const Drawer = createDrawerNavigator();
 LogBox.ignoreLogs(['Sending'])
export const MenuLateral=()=> {
  const dimensions = useWindowDimensions();
  //Hide Splash screen on app load.
  
  return (
    
     <Drawer.Navigator 
         screenOptions={{
         headerShown:false,
         drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
         drawerStyle:{
         backgroundColor:"#0D0C21",width:350 },
         drawerLabelStyle:{color:"white",fontSize:18}

    }} >
    <Drawer.Screen name="Portada" component={ BotomNavigator }options={{ drawerLabel: 'Noticias' }} />
    <Drawer.Screen name="Cuba" component={ CubaNavigator } /> 
      <Drawer.Screen name="Norteamerica" component={ NorteamericaNavigator } options={{ drawerLabel: 'Norteamérica | ONU'}}/>
      <Drawer.Screen name="Centroamerica" component={ CentroNavigator } options={{ drawerLabel: 'Centroamérica | México | Caribe' }}/>
      <Drawer.Screen name="Europa" component={ EuropaNavigator } />
      <Drawer.Screen name="Suramerica" component={ SuramericaNavigator } options={{ drawerLabel: 'Sudamérica' }}/>
      <Drawer.Screen name="Asia" component={ AsiaNavigator } options={{ drawerLabel: 'Asia | Oceanía' }}/>
      <Drawer.Screen name="Africa" component={ AfricaNavigator} options={{ drawerLabel: 'África | Medio Oriente' }}/>
      <Drawer.Screen name="Deportes" component={ DeporteNavigator } />
      <Drawer.Screen name="Cultura" component={ CulturaNavigator } />
      <Drawer.Screen name="Ciencia" component={ CienciaNavigator } />
      <Drawer.Screen name="Economia" component={ EconomiaNavigator } options={{ drawerLabel: 'Economía' }}/> 
    </Drawer.Navigator>
  );
}