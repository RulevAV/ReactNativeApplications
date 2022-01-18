// In App.js in a new project

import * as React from 'react';
import Navigate from './navigate';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import * as Font from 'expo-font';

const fonts = () => Font.loadAsync({
  'mt-bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-light' : require('./assets/fonts/Montserrat-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);
  if(font){
    return (
      <Navigate />
    );
   }else{
      return (
          <AppLoading 
          startAsync = {fonts} 
          onFinish={() => setFont(true)} 
          onError={console.warn}
          />
      )
  }
 
}

