import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Treinoa from './braco';
import Treinob from './perna';
import Treinoc from './bumbum';
import Home from './home';


const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component={Home}/>
        <Stack.Screen name ="TreinoA" component={Treinoa}/>
        <Stack.Screen name ="TreinoB" component={Treinob}/>
        <Stack.Screen name ="TreinoC" component={Treinoc}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}