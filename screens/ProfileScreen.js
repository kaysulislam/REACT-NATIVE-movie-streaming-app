import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'white', fontSize: 24}}>ProfileScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ProfileScreen;
