import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ProfileScreen</Text>
      <Button
        title="Explore Screen"
        onPress={() => alert('ProfileScreen button clicked')}
      />
    </View>
  );
};

export default ProfileScreen;
