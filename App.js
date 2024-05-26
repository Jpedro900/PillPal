import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import registerNNPushToken from 'native-notify';

export default function App(){

  registerNNPushToken(21491, '8NA5PH0DKW15N7rSe9Jj3H');

    return (
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    )
}
