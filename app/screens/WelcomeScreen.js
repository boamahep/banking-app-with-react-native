import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Pressable} from 'react-native';

function WelcomeScreen({navigation}) {
    return (
      <View
      style={styles.container}
      >
      <Image 
      style={styles.myimage}
      source={require('../assets/image.png')}
      >
      </Image>
       <ImageBackground 
       style={styles.background}
       source={require('../assets/shape.png')}
       >
       </ImageBackground>
       <Image 
      style={styles.logo}
      source={require('../assets/logo.png')}
      ></Image>

  <Text style={styles.myTitle}>
BANKING APPS
  </Text>
  
  <Text style={styles.myText}>
  Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod.
  </Text>

    <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
   <Text style={styles.loginText}> LOGIN </Text>
    </Pressable>
       </View>
    );
}

const styles = StyleSheet.create({
  container: {
backgroundColor: 'blueviolet',
flex: 1,
  },
 background: {
  flex: 1,
 },
 myimage: {
  width: 500,
    height: 500,
    resizeMode: 'center',
    position: 'absolute',
    marginTop: 140,
 },
 logo: {
  resizeMode: 'contain',
  position: 'absolute',
  marginLeft: 300,
  marginTop: 10,
  width: 80,
  height: 80,
  },
myTitle: {
  flex: 0.5,
   position: 'absolute',
    textDecorationColor: '#0000ff',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 660,
    marginLeft: 100,
},
myText: {
  flex: 0.5,
   position: 'absolute',
    textDecorationColor: '#0000ff',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 710,
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
  marginTop: 780,
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


export default WelcomeScreen;