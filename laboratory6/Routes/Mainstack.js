import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import Homestack from "./Homestack";
import Aboutstack from "./Aboutstack";


const Drawer = createDrawerNavigator();

const MainStack = () => {

  return (

    <NavigationContainer>

        <Drawer.Navigator>

          <Drawer.Screen name = "Home" component = {Homestack} 
              options={{
              drawerIcon: () => (
                <Ionicons name="home-outline" size={24} color="black" />
              ),
            }}
          />

          <Drawer.Screen name = "About" component = {Aboutstack}
              options={{
                  drawerIcon: () => (
                   <Feather name="book-open" size={24} color="black" />
                  ),
                }}
          />
          
        </Drawer.Navigator>

    </NavigationContainer>
    
  );

}

export default MainStack;

const styles = StyleSheet.create({
});
