import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {
  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
    <View>
   <Text style={styles.titulo}>WelcomeScreen</Text>
   </View>
   <TouchableOpacity style={styles.Botones2} onPress={()=> navigation.navigate("Login")}>
     <Text style={styles.Botonestexto2}>Login</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.Botones2} onPress={()=> navigation.navigate("Registro")}>
     <Text style={styles.Botonestexto2}>Registro</Text>
   </TouchableOpacity>
 </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#587e63',
        alignItems: 'center',
        justifyContent: 'center',
      },
      titulo: {
        color: 'rgba(255,255,255,.95)',
        fontSize: 17,
        marginBottom: 50,
        marginTop: 50
      },
      Botones2: {
        width: '50%',
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      Botonestexto2: {
        color: 'white',
        fontSize: 20,
      }
})