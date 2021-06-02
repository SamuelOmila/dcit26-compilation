import React from 'react';
import { View, StyleSheet, Button, ScrollView, Text, ImageBackground } from 'react-native';


const Profile = ({navigation}) => {

  return (

   <ImageBackground source={require('../Char.jpg')} style={styles.ImageBackground}>

    <View style={styles.container}>
      <Button color = '#5b7e6a' title= "GO BACK HOME" onPress = {() => navigation.navigate('Home')}
      style={styles.Button}
      />
      
    </View>

  </ImageBackground>
  );

}

export default Profile ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70%',
    padding: 8,
  },
  ImageBackground: {
    width: '100%',
    height: '100%'
  },
});
