import 'react-native-gesture-handler';

import React from 'react';
import SplashScreen from 'react-native-splash-screen'

import { NavigationContainer } from '@react-navigation/native';
// import { Navigator } from './src/navigator/Navigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { LogBox } from 'react-native';
import { StatusBar } from 'react-native';
import { COLORS } from './src/assets/theme';
import { GradientProvider } from './src/context/GradientContext';


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  //Hide Splash screen on app load.
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <AppState> 
      <StatusBar barStyle={'light-content'} hidden={false} backgroundColor="#00004B"/>
       <MenuLateral/>      
       </AppState>  
    </NavigationContainer>
  )
}
const AppState = ({ children }: any) => {

  return (
    <GradientProvider>
      { children }
    </GradientProvider>
  )

}
export default App;
