//BSCS 3-2
//Omila, Samuel 
//Perol, Epifanio
//Dinson, Mark Vincent
//Acebuche, Laurence
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {


const [inputitem, setinputitem] = useState ('');
const [inputitem1, setinputitem1] = useState([]);


const inputitemhandler = (userinput) => {
  setinputitem(userinput);
}


const addinputitem = () => {
  setinputitem1 (updateditem => [...updateditem, inputitem]);
  setinputitem('');
}


  return (
    <View style={styles.elements}>
      <View style={styles.elementscontainer}>
          <TextInput style={styles.textbox} 
              placeholder='Enter Item'
              value = {inputitem}
              onChangeText={inputitemhandler}/>

          <TouchableOpacity>
              <Button style={styles.button} title='ADD' onPress={addinputitem}/>
          </TouchableOpacity>
      </View>


      <View>
        {inputitem1.map((items) => <View style={styles.item}><Text>{items}</Text></View>)}
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  elements: {
    padding: "5%",
    height: "100%",
    backgroundColor: "#3778C2"
  },
  elementscontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textbox: {
    borderColor: 'black',
    borderWidth: 2,
    padding: '3%',
    width: "80%",
    color: "white",
  },
  button: {
  },
  item: {
    backgroundColor: '#CAE7DF',
    padding: "2%",
    borderRadius: "4%",
    marginTop: "2%",
    borderColor: "black",
    borderWidth: 2
  }
});
