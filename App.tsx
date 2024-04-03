import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Screen/Home'; // Replace with the actual path to your component
import Movie from './app/Screen/Movie';
import MoviesByCast from './app/Screen/MoviesByCast';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Movie" component={Movie} />
        <Stack.Screen name="MoviesByCast" component={MoviesByCast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
