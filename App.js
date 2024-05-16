import React from 'react';
import { statusBar, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App(){
    return (
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    )
}