import * as React from 'react';
import {View, Text, Button} from 'react-native';

//for the navigator
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import icon from 'react-native-vector-icons/Ionicons';

//for different screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'OVERVIEW',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
