//BSCS 3-2
//Omila, Samuel 
//Perol, Epifanio
//Dinson, Mark Vincent
//Acebuche, Laurence
import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Modal, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import SampleModal from './components/SampleModal';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
const [openmodal, setopenmodal] = useState(false);

  return (
    <View style={styles.container}>
      <Button color='#049ffc' title='CLICK ME' onPress = {() => setopenmodal(true)}/>
      <SampleModal visible={openmodal} onClose = {() => setopenmodal(false)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#50B3CF',
    padding: 8,
  },

});
