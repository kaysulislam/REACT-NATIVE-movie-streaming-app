import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
      <Button
        title="Settings Screen"
        onPress={() => alert('Settings Screen button clicked')}
      />
    </View>
  );
};

export default SettingsScreen;
