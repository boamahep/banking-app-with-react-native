import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function ReceiptScreen(props) {
    return (
       <ImageBackground 
       style={styles.background}
       source={require('../assets/background.jpg')}
       >
    
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
 background: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 loginButton: {
width: '100%',
height:70,
backgroundColor: colors.primary,
 },
 registerButton: {
    width: '100%',
    height:70,
    backgroundColor: colors.secondary,
     },
logo: {
width: 100,
height: 100,
},
logoContainer: {
position: 'absolute',
top: 70,
alignItems: 'center',
},
myText: {
    textDecorationColor: colors.black,
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
},
})


export default ReceiptScreen;