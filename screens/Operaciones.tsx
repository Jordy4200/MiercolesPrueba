import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { db } from '../config/Config';
import { ref, set } from "firebase/database";

export default function Operaciones() {
  const [id, setId] = useState("");
  const [monto, setMonto] = useState("");
  const [typeoperation, setTypeOperation] = useState("");
  const [comentario, setComentario] = useState("");



  function guardarOperacion(id:string, monto:string, typeoperation:string, comentario:string) {
    try {
      set(ref(db, 'operaciones/' + id), {
        monto: monto,
        typeoperation: typeoperation,
        comentario: comentario
      });
      Alert.alert('Mensaje', 'Operacion registrada');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo almacenar la operacion');
    }
  
    
    setId('');
    setMonto('');
    setTypeOperation('');
    setComentario('');
  }









  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Operaciones</Text>
      <TextInput
        style={styles.containerimput}
        placeholder="Id"
        keyboardType='number-pad'
        onChangeText={setId}
        value={id}
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Monto"
        keyboardType='numeric'
        onChangeText={setMonto}
        value={monto}
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Tipo de Operacion"
        onChangeText={setTypeOperation}
        value={typeoperation}
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Comentario"
        onChangeText={setComentario}
        value={comentario}
      />
      <TouchableOpacity style={styles.Botones} onPress={() => guardarOperacion(id, monto, typeoperation, comentario)}>
        <Text style={styles.Botonestexto}>Ejecutar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B68EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
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
  Botones: {
    backgroundColor: '#98FB98',
    width: '70%',
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Botones2: {
    width: '70%',
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Botonestexto: {
    color: 'black',
    fontSize: 20,
  }

})