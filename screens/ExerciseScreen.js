import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ExerciseScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ExerciseScreen</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ExerciseScreen;
