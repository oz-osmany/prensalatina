import React from 'react';

import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { PortadaScreen } from '../screens/Principales/PortadaScreen';
import { RadioScreen } from '../screens/Principales/RadioScreen';
import { NorteamericaScreen } from '../screens/Principales/NorteamericaScreen';
import Details from '../screens/Details/Details';
// import { HeaderTitle } from '../../../RN-Componentes-0.12.0/RN-Componentes-0.12.0/src/components/HeaderTitle';
import { AfricaScreen, AsiaScreen, CentroamericaScreen, CienciaScreen, CulturaScreen, DeportesScreen, EconomiaScreen, EuropaScreen, ScannerScreen, SuramericaScreen } from '../screens/Principales';
import { SearchScreen } from '../screens/Principales/SearchScreen';
import { OpinionScreen } from '../screens/Principales/OpinionScreen';
import Redes from '../components/Redes';
import RadioDetail from '../screens/Details/RadioDetail';

// export type RootStackParams = {
  
//   RadioScreen: undefined,
//   Details: undefined,
  
// }

const Stack = createStackNavigator();

export const CubaNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="RadioScreen"
      
      screenOptions={{
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
      
    >
     
      <Stack.Screen name="RadioScreen" options={{headerShown:false}} component={ RadioScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const RadioNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="RadioScreen"
      
      screenOptions={{
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
      
    >
     
      <Stack.Screen name="RadioScreen" options={{headerShown:false}} component={ RadioScreen } />
      <Stack.Screen name="RadioDetail" component={ RadioDetail } />
    </Stack.Navigator>
  );
}
export const CulturaNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="CulturaScreen"      
      screenOptions={{        
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="CulturaScreen" options={{headerShown:false}} component={ CulturaScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const DeporteNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="DeporteScreen"      
      screenOptions={{       
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="DeporteScreen" options={{headerShown:false}} component={ DeportesScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const CienciaNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="CienciaScreen"      
      screenOptions={{       
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="CienciaScreen" options={{headerShown:false}} component={ CienciaScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const EconomiaNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="EconomiaScreen"      
      screenOptions={{        
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="EconomiaScreen" options={{headerShown:false}} component={ EconomiaScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const EuropaNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="EuropaScreen"      
      screenOptions={{      
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="EuropaScreen" options={{headerShown:false}} component={ EuropaScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const AsiaNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="AsiaScreen"      
      screenOptions={{    
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="AsiaScreen" options={{headerShown:false}} component={ AsiaScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const AfricaNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="AfricaScreen"      
      screenOptions={{        
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="AfricaScreen" options={{headerShown:false}} component={ AfricaScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const NorteamericaNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="NorteamericaScreen"      
      screenOptions={{        
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="NorteamericaScreen" options={{headerShown:false}} component={ NorteamericaScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const CentroNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="CentroamericaScreen"      
      screenOptions={{     
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="CentroamericaScreen"  component={ CentroamericaScreen } />
      <Stack.Screen name="Details"  component={ Details } />
    </Stack.Navigator>
  );
}
export const SuramericaNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="SuramericaScreen"      
      screenOptions={{        
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
          
        },
        
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="SuramericaScreen" options={{headerShown:false}} component={ SuramericaScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const SearchNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="NotaScreen"      
      screenOptions={{        
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="SearchScreen" options={{headerShown:false}} component={ SearchScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const PortadaNavigator = () => {
  
  return (
    <Stack.Navigator
   
       initialRouteName="PortadaScreen"      
      screenOptions={{   
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
       
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="PortadaScreen" options={{headerShown:false}} component={ PortadaScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const ScannerNavigator = () => {
  return (
    <Stack.Navigator
   
       initialRouteName="ScannerScreen"      
      screenOptions={{   
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="ScannerScreen" options={{headerShown:false}} component={ ScannerScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}
export const OpinionNavigator = () => {
 
  return (
    <Stack.Navigator
   
       initialRouteName="OpinionScreen"      
      screenOptions={{   
        headerShown: true,  
        headerTitle:"Noticias",
        headerTintColor:"white",
       
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#263DB4",
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}      
    >     
      <Stack.Screen name="OpinionScreen" options={{headerShown:false}} component={ OpinionScreen } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
}