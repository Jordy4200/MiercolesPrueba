import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

// La base de datos
import { db } from '../config/Config';
import { onValue, ref, } from "firebase/database";
import Informacion from '../components/Informacion';

export default function HistorialScreen() {

  const [id, setId] = useState("");
  const [monto, setMonto] = useState("");
  const [typeoperation, setTypeOperation] = useState("");
  const [comentario, setComentario] = useState("");
  const [lista, setlista] = useState([])


  function leer(){
    const starCountRef = ref(db, 'operaciones/');  
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  
    //CAMBIO DE FORMATO DE LOS DATOS
    const listaTemp:any =Object.keys(data).map((id)=>({
      key: id, ...data[id]
    }))
  
    console.log(listaTemp);
    setlista(listaTemp)
    
  });
  }

  useEffect(() => {
    leer()
  }, [])



  type Usuario = {
    id: string,
    monto: string,
    typeoperation: string,
    comentario: string
    key:string
  };

  return (
    <View style={styles.container}>
      <Text>Mi historial</Text>
      <FlatList
        data={lista}
        renderItem={({item}:{item:Usuario})=>
          <View style={styles.item}>
            <Informacion data={item} />
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    paddingTop: 50, 
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#ffffff', 
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5, 
    padding: 20, 
    marginVertical: 15, 
    marginHorizontal: 16, 
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'stretch', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, 
    shadowRadius: 3,
    elevation: 3, 
  },
  
});