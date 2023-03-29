import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import AppLoading  from 'expo-app-loading';
import {useFonts, Lato_400Regular, Allan_700Bold, Ubuntu_700Bold} from '@expo-google-fonts/dev';

export default function Home(props) {

  let [fontsLoaded] =useFonts({
    Lato_400Regular, Allan_700Bold, Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }
  
  else{ 
    return(
      <ScrollView>
    <View style={style.container}>
      <Text style={style.titulo}>Divisão de treino{'\n'}</Text>
      <Image style= {style.img} source={require('../assets/academia.jpg')}/>
      
      <TouchableOpacity style={style.button} onPress={()=>{props.navigation.navigate('TreinoA')}}>
        <Text style={style.palavras}>1. Treino A</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={()=>{props.navigation.navigate('TreinoB')}}>
        <Text style={style.palavras}>2. Treino B</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={()=>{props.navigation.navigate('TreinoC')}}>
        <Text style={style.palavras}>3. Treino C</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    );
}
}

const style = StyleSheet.create({
  img:{
    borderRadius: 10,
    height: 200,
    width: 400,
    marginTop: 15,
    marginBottom: 20
  },

  titulo:{
    fontSize: 25,
    color: '#09EAD9',
    marginTop: 20,
    marginBottom: 10,
    textAlign:'center',
    fontWeight: 'bold',
    fontFamily: 'Allan_700Bold'
    },

    container:{
    justifyContent: 'center',
    backgroundColor: '#09033B',
    alignItems:'center'
  },

  button:{
    textAlign:'left',
    alignSelf: 'flex-start'
  },

  palavras:{
    fontSize: 18,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: 'bold',
    marginLeft: 50,
    color: '#09EAD9',
    fontFamily: 'Lato_400Regular'
  }
});