import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
//FIREBASE
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';
import { db } from '../config/Config';
import { ref, set } from "firebase/database";

export default function RegistroScreen({ navigation }: any) {
  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')



  function guardarRegistro(id:string,correo:string,contraseña:string) {
    try {
      set(ref(db, 'usuarios/' + id), {
        correo: correo,
        contraseña: contraseña,
      });
      Alert.alert('Mensaje', 'Operacion registrada');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo almacenar la operacion');
    }
  
    
    setCorreo('');
    setContraseña('');
  }







  function registro() {
      createUserWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        Alert.alert("Registro Exitoso", "¡Te has registrado exitosamente!");
        guardarRegistro(user.uid, correo, contraseña); // Llamada a guardarRegistro
        navigation.navigate("Login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        Alert.alert(errorCode, errorMessage)
      });
  }

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      <TextInput
        style={styles.containerimput}
        placeholder="Ingrese correo"
        autoCorrect={false}
        onChangeText={(texto) => (setCorreo(texto))}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Ingrese Contraseña"
        onChangeText={(texto) => (setContraseña(texto))}
        secureTextEntry
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Ingrese usuario"
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Numero de celular"
        keyboardType='number-pad'
      />
      <Button title='Registrar' onPress={() => registro()} />
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
  containerB: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
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
  button: {
    backgroundColor: ''
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
})
