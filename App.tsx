import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './src/components/FirstScreen';
import SecondScreen from './src/components/SecondScreen';
import Registration from './src/components/Registration Page.js';
import UserData from './src/components/UserData.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{headerShown: false}} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{headerShown: false}}/>
         <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}} />
         <Stack.Screen name="UserData" component={UserData} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
