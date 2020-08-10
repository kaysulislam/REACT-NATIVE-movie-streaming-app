import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {createStackNavigator} from '@react-navigation/stack';

//for different screens
import HomeScreen from './HomeScreen';
import ExerciseScreen from './ExerciseScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';

//for carousel
import MyHome from './MyHome';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#fff', //#01637c
    }}>
    <Tab.Screen
      name="Home"
      component={MyHome} // replace with HomeStackScreen if menu is  needed
      options={{
        tabBarLabel: 'HOME',
        tabBarColor: '#01637c',
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Exercise"
      component={ExerciseScreen} // replace with ExerciseScreen if menu is not needed
      options={{
        tabBarLabel: 'EXERCISE',
        tabBarColor: '#293c47',
        tabBarIcon: ({color}) => (
          <Icon name="fitness" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#001b26',
        tabBarIcon: ({color}) => <Icon name="person" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="SETTINGS"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'SETTINGS',
        tabBarColor: '#01394a',
        tabBarIcon: ({color}) => (
          <Icon name="settings" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#01637c',
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
        title: 'HOME',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="#01637c" //#009387
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ExerciseStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="EXERCISE"
      component={ExerciseScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="#1f65ff"
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
