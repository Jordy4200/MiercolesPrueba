import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

//FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function LoginScreen({ navigation }: any) {

    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')

    function login() {
        signInWithEmailAndPassword(auth, correo, contraseña)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigation.navigate("MyTabs")
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    
            let titulo=""; 
            let mensaje="";
    
            if (errorCode == 'auth/invalid-email'){
              titulo="Correo inválido"
              mensaje="Revisar que el email sea correcto"
            }else if(errorCode == "auth/user-not-found") {
              titulo="Error de usuario"
              mensaje="El usuario no se encuentra registrado"
            }else if(errorCode=="auth/wrong-password"){
              titulo="Error de contraseña"
              mensaje="Revisar si la contraseña está bien escrita"
            }else{
               titulo="Error"
              mensaje="Revisar credenciales"
            }
    
            console.log(errorCode);
            console.log(errorMessage);
            
            Alert.alert(titulo, mensaje)
          });
      }




    return (
        <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput
        style={styles.containerimput}
        placeholder="Ingrese correo"
        autoCorrect={false}
        keyboardType='email-address'
        onChangeText={(texto) => (setCorreo(texto))}
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Ingrese Contraseña"
        onChangeText={(texto) => (setContraseña(texto))}
        secureTextEntry
      />
       <Button title='Logearse' onPress={() => login()} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#587e63',
        alignItems: 'center',
        justifyContent: 'center',
      },
      containerB:{
        flexDirection:'row',
        marginTop:20,
        gap:20,
      },
      icon: { marginTop: -100, height: 150 },
      titulo: {
        color: 'rgba(255,255,255,.95)',
        fontSize: 17,
        marginBottom: 50,
        marginTop: 50
      },
      containerimput: {
        
        height: 50,
        fontSize: 17,
        marginBottom: 15,
        width: 300,
        textAlign: 'center',
        color: '#333',
        fontWeight: '400',
        backgroundColor: 'rgba(255,255,255,.95)',
        borderRadius: 40,
      },
      button:{
        backgroundColor:''
      },
      Botones: {
        backgroundColor: '#3e69e0',
        width: '50%',
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      Botones2: {
        width: '50%',
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      Botonestexto: {
        color: 'white',
        fontSize: 20,
      },
      Botonestexto2: {
        color: 'white',
        fontSize: 20,
      }
    });