import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';

export default function Treinoc(){
  return (
    <ScrollView>
    <View style={style.container}>
      <Text style={style.titulo}>Treino isolado de glúteos</Text>
      <Image style= {style.img} source={require('../assets/bumbum.jpg')}/>
     
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
  {nome:'Agachamento sumô', serie:'3',repete:'15', descan: '30 segundos'},
  {nome:'Elevação pélvica', serie:'4',repete:'12', descan: '1 minuto'},
  {nome:'Elevação pélvica unilateral', serie:'3',repete:'12', descan: '1 minuto'},
  {nome:'Agachamento búlgaro', serie:'3',repete:'15', descan: '30 segundos'},
  {nome:'Coice na polia', serie:'3',repete:'12', descan: '1 minuto'}

]