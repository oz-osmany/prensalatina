import React from 'react';
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { VideoScreen } from '../screens/Principales/VideoScreen';
// import { RadioScreen } from '../screens/Principales/RadioScreen';
import { ScannerScreen } from '../screens/Principales/ScannerScreen';

import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { PortadaScreen } from '../screens/Principales';
import { COLORS } from '../assets/theme';
import { SearchScreen } from '../screens/Principales/SearchScreen';
import { OpinionScreen } from '../screens/Principales/OpinionScreen';
import { SearchNavigator, OpinionNavigator, PortadaNavigator, ScannerNavigator,RadioNavigator } from './StackNavigator';


LogBox.ignoreLogs(['Sending'])


const Tab = createMaterialBottomTabNavigator();

export const BotomNavigator = () => {

  const { top:paddingTop } = useSafeAreaInsets()


  return (
    <Tab.Navigator
      style={{ paddingTop }}
      barStyle={{ backgroundColor: COLORS.blueBottom }}
      
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
          switch( route.name ) {
            case 'Noticias':
              iconName = 'newspaper-outline'
            break;

            case 'Scanner':
              iconName = 'scan-outline'
            break;
            case 'Search':
              iconName = 'search-outline'
            break;
            case 'Opinion':
              iconName = 'chatbox-ellipses-outline'
            break;

            case 'Radio':
              iconName = 'mic-outline'
            break;
            case 'TV':
              iconName = 'videocam-outline'
            break;
          }

          return <Icon name={ iconName } size={ 20 } color={ color } />
        }
      })}
    >
      <Tab.Screen name="Noticias" component={ PortadaNavigator } />
      <Tab.Screen name="Scanner" component={ ScannerNavigator } />
      <Tab.Screen name="TV" component={ VideoScreen } /> 
      <Tab.Screen name="Radio" component={ RadioNavigator } />
      <Tab.Screen name="Opinion" component={ OpinionNavigator} />
      <Tab.Screen name="Search" component={ SearchNavigator } />
    </Tab.Navigator>
  );
}