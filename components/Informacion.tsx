import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Informacion(props:any) {
    
  return (
    <View>
    <Text>{props.data.comentario}</Text>
    <Text>{props.data.monto}</Text>
    <Text>{props.data.typeoperation}</Text>
  </View>
  )
}

const styles = StyleSheet.create({})