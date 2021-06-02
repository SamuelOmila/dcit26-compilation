import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from "../Screens/About";

const Stack = createStackNavigator();

const Aboutstack = () => {

  return (

        <Stack.Navigator>

          <Stack.Screen name = "About" component = {About}
            options={{
              headerStyle: {
                backgroundColor: '#b62c13',
                borderBottomWidth: 4
              },
            }}
          />
          
        </Stack.Navigator>
    
  );

}

export default Aboutstack;
