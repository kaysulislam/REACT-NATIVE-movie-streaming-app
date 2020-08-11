import * as React from 'react';
import {View, Text, Button} from 'react-native';

//for the navigator
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens for stack navigator
import MainTabScreen from './screens/MainTabScreen';
import FavScreen from './screens/FavScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Favourite" component={FavScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
