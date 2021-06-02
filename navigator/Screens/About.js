import React from 'react';
import { View, StyleSheet, Button, ImageBackground } from 'react-native';


const About = ({navigation}) => {

  return (


   <ImageBackground source={require('../library.jpg')} style={styles.ImageBackground}>


    <View style={styles.container}>

      <Button color='#b62c13' title= "GO BACK" onPress = {() => navigation.goBack()}/>
      
    </View>

  </ImageBackground>
  );

}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70%',
    padding: 8,
  },
   ImageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'stretch',
  },
});
