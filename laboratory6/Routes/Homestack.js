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
                backgroundColor: '#009dff',
                borderBottomWidth: 4,
                borderBottomColor: '#0c7898'
              },
            }}
          />

          <Stack.Screen name = "Profile" component = {Profile}
            options={{
              headerStyle: {
                backgroundColor: '#009dff',
                borderBottomWidth: 4,
                borderBottomColor: '#0c7898'
              },
            }}
          />
          
        </Stack.Navigator>

    
  );

}
const styles = StyleSheet.create ({
});
export default Homestack;
