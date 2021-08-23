import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker, Alert} from 'react-native';

const Texto = () => {
  const [texto, setTexto] = useState("hello world")  
  const actualizaTexto = () => {
    setTexto('chao texto')
  }
  return (
    <Text style = {styles.text} onPress = {actualizaTexto}>{texto}</Text>
  ) 
}


const PickerList = () => {
  const [selectedValue, setSelectedValue] = useState("TODOS");
  return (
    <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >        
        <Picker.Item label="TODOS" value="all" />
        <Picker.Item label="SISTEMAS" value="sis" />
        <Picker.Item label="CONTABILIDAD" value="con" />  
        <Picker.Item label="MANTENIMIENTO" value="mnt" />

      </Picker>
    </View>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.callejero}>
          <StatusBar style="auto" />
          <TextInput
            placeholder = "Buscar empleado"
            placeholderTextColor = 'gray'
          />
          <PickerList /> 
          <Button title = "Fecha" > </Button>
        </View>

        <View style = {styles.buscar}>
          <Button title = "Buscar"></Button>

        </View>
 
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  callejero : {  
      alignItems: 'center',
      flexDirection: "row",
  },
  
  text:{
    color: 'red',
    fontSize: 24,
    height: 100,
    width: 100,
},
});
