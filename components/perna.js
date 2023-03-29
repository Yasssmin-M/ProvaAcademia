import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';

export default function Treinob(){
  return (
    <ScrollView>
    <View style={style.container}>
      <Text style={style.titulo}>Treino de pernas</Text>
      <Image style= {style.img} source={require('../assets/perna.jpg')}/>
      
      <FlatList data={arrayExerc} renderItem={({item})=>
      <View style={style.container}>
      <Text style={style.fala}>
              <Text style={style.subTitulo}>Exercício:</Text> {item.nome}{'\n'}                  
              <Text style={style.subTitulo}>Séries: </Text> {item.serie}{'\n'}
              <Text style={style.subTitulo}>Repetições: </Text> {item.repete} {'\n'}
              <Text style={style.subTitulo}>Tempo de descanso: </Text> {item.descan}{'\n'}
              </Text>
      </View>
      }/>
    </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  img:{
    borderRadius: 10,
    height: 400,
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
    alignItems:'center',
    padding: 8,
    flex: 1
  },

    subTitulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Lato_700Regular'
  },

  fala:{
    fontSize: 16,
    color: 'white',
    fontFamily: 'Lato_400Regular',
  }
});

const arrayExerc = [
  {nome:'Agachamento livre', serie:'3',repete:'8-12-15', descan: '1 minuto'},
  {nome:'Cadeira abdutora', serie:'3',repete:'15', descan: '1 minuto'},
  {nome:'Cadeira adutora', serie:'3',repete:'12', descan: '30 segundos'},
  {nome:'Leg press', serie:'3',repete:'15', descan: '30 segundos'},
  {nome:'Afundo', serie:'3',repete:'8', descan: '30 segundos'},
  {nome:'Cadeira extensora', serie:'3',repete:'15', descan: '30 segundos'},
  {nome:'Stiff', serie:'3',repete:'12', descan: '1 minuto'}

]