import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Pressable} from 'react-native';
import Inputs from '../components/Login.js';

function LoginScreen({navigation}) {
    return (

      <inputs />
      
    );
}

const styles = StyleSheet.create({
  container: {
backgroundColor: 'blueviolet',
flex: 1,
  },
 logo: {
  resizeMode: 'contain',
  position: 'absolute',
  marginLeft: 150,
  marginTop: 10,
  width: 80,
  height: 80,
  },

myText: {
  flex: 0.5,
   position: 'absolute',
    textDecorationColor: '#0000ff',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 740,
    marginLeft: 10,
    marginRight: 10,
},
button: {
  width: '200',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  marginTop: 810,
  marginLeft: 150,
  backgroundColor: 'blueviolet',
},
loginText: {
    textDecorationColor: '#0000ff',    
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
},
})


export default LoginScreen;