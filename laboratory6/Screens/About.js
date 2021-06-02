import React from 'react';
import { View, StyleSheet, Button, ImageBackground } from 'react-native';


const About = ({navigation}) => {

  return (


    <View style={styles.container}>

      <Button color='#b62c13' title= "GO BACK" onPress = {() => navigation.goBack()}/>
      
    </View>

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
  }
});
