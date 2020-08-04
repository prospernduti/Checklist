import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Cleaner from './Screens/cleaner';
import Fulops from './Screens/fulops';

import Fumigation from './Screens/afterFumigation';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Register from './Screens/Register';
import Login from './Screens/Login/index';
import Home from './Screens/Login/home'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
function MyTab() {
  return (
    <Tab.Navigator initialRouteName="Cleaner">
      <Tab.Screen name="Cleaner" component={Cleaner} />
      <Tab.Screen name="Fulops" component={Fulops} />
      <Tab.Screen name="Fumigation" component={Fumigation} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Cleaner" component={Cleaner} />
        <Stack.Screen name="Fulops" component={Fulops} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Fumigation" component={Fumigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
