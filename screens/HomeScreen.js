import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Favourite Screen"
        onPress={() => navigation.navigate('Favourite')}
      />
    </View>
  );
};

export default HomeScreen;
