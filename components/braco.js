import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';

export default function Treinoa(){
  return (
    <ScrollView>
    <View style={style.container}>
      <Text style={style.titulo}>Treino de superiores</Text>
      <Image style= {style.img} source={require('../assets/braco.jpg')}/>
      
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
  {nome:'Puxada alta', serie:'3',repete:'12', descan: '1 minuto'},
  {nome:'Remada infeior', serie:'3',repete:'15', descan: '1 minuto'},
  {nome:'Bícepes martelo', serie:'3',repete:'12', descan: '1 minuto'},
  {nome:'Elevação lateral', serie:'3',repete:'15', descan: '30 segundos'},
  {nome:'Trícepes pulley', serie:'3',repete:'12', descan: '30 segundos'},
  {nome:'Crussifixo invertido', serie:'3',repete:'15', descan: '1 minuto'}

]