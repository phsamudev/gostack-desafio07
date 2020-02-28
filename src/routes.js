import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: 'Carrinho' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
