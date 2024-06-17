import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import foto5 from "./assets/foto5.png";
import Foto4 from "./assets/foto4.png";
import Foto from './assets/Foto.png';
import Foto3 from "./assets/foto3.png";


const titulo = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundo: {
    marginTop:-10,
    width: 400,
    height: 800,
    borderTopColor: '#000',
    position: 'relative',
  },
  textoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop:95,
    margin: 10,
    padding: 5,
    fontFamily:"Saved by Zero Rg"
  },
  texto: {
    fontSize: 40, 
    color: '#000', 
    fontFamily:"Saved by Zero Rg"
  },

  texto2Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 60,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#fff",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  
  },
  texto1: {
    fontSize: 23, 
    color: '#000',
    textAlign: "left", 
    fontFamily:"Saved by Zero Rg"
  },

  texto3Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 120,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#fff",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  
  },

  texto4Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 180,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#fff",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  
  },

  texto5Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 290,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#0DCCC0",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  },

  texto6Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 350,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#0DCCC0",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  },

  texto7Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 410,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#0DCCC0",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  },

  texto8Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 470,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#0DCCC0",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  
  },
 
  foto5Container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%', 
     
  },
  foto5: {
    width: '100%',
    height: '100%',
   
  },
 
});


const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },
  fundo: {
    width: 480,
    height: 897,
    borderTopColor: '#000',
  },
  fundo3: {
    width: 480,
    height: 897,
    borderTopColor: '#000',
  },
  fundo4: {
    width: 480,
    height: 897,
    borderTopColor: '#000',
  },
  titulo: {
    fontSize: 55,
    textAlign: 'center',
    color: 'white',
    marginTop: 100,
    position: 'absolute',
    zIndex: 5,
    fontFamily:"Saved by Zero Rg"
  },
  titulo2: {
    fontSize: 55,
    textAlign: 'center',
    color: 'white',
    marginTop: 160,
    position: 'absolute',
    zIndex: 5,
    fontFamily:"Saved by Zero Rg"
  },
});

const sobre = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  titulo:{
    marginTop:20,
    fontSize: 50,
    color: '#fff',
    marginLeft:50,
    fontFamily:"Saved by Zero Rg"
    
  },
  fundo: {
    marginVertical: 10,
    width: 400,
    height: 800,
    borderTopColor: '#000',
  },
  texto:{
    marginTop:15,
    fontSize: 15,
    textAlign: 'center',
    paddingLeft:50,
    paddingRight: 50,
    textAlign:"justify", 
    color: '#fff'

  }

});


function Inicio() {
  return (
    <View style={estilos.container}>
      <View style={estilos.content}>
        <Image source={Foto} style={estilos.fundo} />
        <Text style={estilos.titulo}>LEWIS</Text>
        <Text style={estilos.titulo2}>HAMILTON</Text>          
      </View>
    </View>
  );
}

function Sobre() {
  return (
    <View >
       <ImageBackground
      source={Foto3} style={sobre.fundo}
    >
        <Text style={sobre.titulo}>Carreira</Text>
        <Text style={sobre.texto}>  
          Lewis Hamilton, nascido em 7 de janeiro de 1985, é um piloto britânico de Fórmula 1. Reconhecido como um dos maiores da história, Hamilton estreou na F1 em 2007 pela McLaren. Ao longo de sua carreira, conquistou 7 títulos mundiais, igualando o recorde de Michael Schumacher. Além de seu sucesso nas pistas, Hamilton é conhecido por seu ativismo e influência cultural.
        </Text>
    </ImageBackground>
    </View>
  );
}


function Titulos() {
  return (
    <View style={titulo.container}>
      <ImageBackground source={Foto4} style={titulo.fundo}>
        <View style={titulo.textoContainer}>
          <Text style={titulo.texto}>TÍTULOS</Text>
        </View>
        <View style={titulo.texto2Container} >
          <Text style={titulo.texto1}>2008</Text>
        </View>
        <View style={titulo.texto3Container} >
          <Text style={titulo.texto1}>2014</Text>
        </View>
        <View style={titulo.texto3Container} >
          <Text style={titulo.texto1}>2014</Text>
        </View>
        <View style={titulo.texto4Container} >
          <Text style={titulo.texto1}>2015</Text>
        </View>
        <View style={titulo.texto5Container} >
          <Text style={titulo.texto1}>2017</Text>
        </View>
        <View style={titulo.texto6Container} >
          <Text style={titulo.texto1}>2018</Text>
        </View>
        <View style={titulo.texto7Container} >
          <Text style={titulo.texto1}>2019</Text>
        </View>
        <View style={titulo.texto8Container} >
          <Text style={titulo.texto1}>2020</Text>
        </View>
        <View style={titulo.foto5Container}>
          <ImageBackground source={foto5} style={titulo.foto5}></ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
  screenOptions={{
    tabBarLabelStyle: {
      fontSize: 18,
      fontWeight: "bold",
     
    },
    tabBarStyle: {
      height: 60,
      
    },
    tabBarActiveTintColor: '#0DCCC0', // Cor do texto da guia ativa
  }}
>
        <Tab.Screen  name="Início" component={Inicio}options={{
          
         tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color="black" />
        )
        
        }} />
        <Tab.Screen name="Sobre" component={Sobre}  
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="text" size={24} color="black" />
         )
         
         }} />
      
        <Tab.Screen name="Títulos" component={Titulos}
             options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="trophy" size={24} color="black" />)
            }} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}
