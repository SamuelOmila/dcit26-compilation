import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Home from "../Screens/Home";
import Profile from "../Screens/Profile";


const Stack = createStackNavigator();

const Homestack = () => {

  return (
        
        <Stack.Navigator>

          <Stack.Screen name = "Home" component = {Home} 
            options={{
              headerStyle: {
                backgroundColor: '#237c2d',
                borderBottomWidth: 4
              },
            }}
          />

          <Stack.Screen name = "Profile" component = {Profile}
            options={{
              headerStyle: {
                backgroundColor: '#5b7e6a',
                borderBottomWidth: 4
              },
            }}
          />
          
        </Stack.Navigator>

    
  );

}
const styles = StyleSheet.create ({
});
export default Homestack;
