import React from 'react';
import { View, StyleSheet, Button, ImageBackground, Text} from 'react-native';


const Home = ({navigation}) => {

  return (
  <ImageBackground source={require('../Home.jpg')} style={styles.ImageBackground}>


    <View style={styles.container}>

      <Button color= '#237c2d' title= "PROFILE" onPress = {() => navigation.navigate('Profile')}
      style={styles.Button}
      />

    </View>

    
  </ImageBackground>

  );

}

export default Home;

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
    height: '100%'
  },
});
