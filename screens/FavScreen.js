import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const FavScreen = ({navigation}) => {
  const [list, setList] = useState([
    {
      image: 'https://drnorth.files.wordpress.com/2011/12/oblivion-poster.jpg',
      key: '1',
    },
    {
      image: 'https://usercontent1.hubstatic.com/14499834_f520.jpg',
      key: '2',
    },
    {
      image:
        'https://lh6.googleusercontent.com/proxy/sy8oArO_VKoNyIFNsUKKSE2AbeN7IfngWliXETeMLHw7CdhOu1Cx4vy8jVQg-DDmMkVntto2vfQPdYjHR-eEwHDB3Vg6_2t_5IiACQDDb2rdFlykgJ0GIgu9-8O73CTEFu2IhARPAlGXgNruIGkqn6s',
      key: '3',
    },
    {
      image:
        'https://images.jdmagicbox.com/movies/centralized_123398532019_12_25_09_45_47_220.jpg',
      key: '4',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD',
      key: '5',
    },
  ]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          marginLeft: 10,
          marginVertical: 20,
        }}>
        MY MOVIES
      </Text>

      <FlatList
        style={{marginBottom: 30}}
        data={list}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={{marginRight: 20}}>
              <Image
                source={{uri: item.image}}
                style={{height: 520, width: 240}}
              />
              <View
                style={{
                  position: 'absolute',
                  height: 5,
                  width: '100%',
                  backgroundColor: '#02ad94',
                  opacity: 0.8,
                }}></View>
              <View
                style={{
                  ...styles.playIconContainer,
                  position: 'absolute',
                  top: '50%',
                  right: '35%',
                  opacity: 0.9,
                }}>
                <Icon name="play" size={18} color="#02AD94" />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default FavScreen;

const styles = StyleSheet.create({
  playIconContainer: {
    backgroundColor: '#212121',
    padding: 18,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderWidth: 4,
    borderColor: 'rgba(2,173,148,0.2)',
    marginBottom: 14,
  },
});
