import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker, FlatList} from 'react-native';

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
            style={{ height: 40, width: 150 }}
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
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setUser(data)
      setLoading(false)
    })
  }, [])

  if(loading){
    return <View style = {styles.center}><Text>Cargando...</Text></View>
  }

  return (
    <View style={styles.container}>

          <StatusBar style="auto" />
          <View style={styles.pricipalMenu}>
              <PickerList /> 
              <Button title= "Enviar"></Button>
           </View>
            <FlatList   style = {styles.flatlist}
              data = {user} 
              renderItem = {({item}) =>   <Text style = {styles.item}> {item.id}.- {item.title}  </Text>   }
              keyExtractor = {item => String(item.id)}
            />

    </View>
  );
}

const styles = StyleSheet.create({
   
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch'
    
  },

  pricipalMenu: {
    flexDirection: "row",
    paddingTop:30,
  },
  day: {
    backgroundColor:  "red",
    color: "white"
  },

  
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },

 


});
