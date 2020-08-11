import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.mainbody}>
      <Image
        source={require('../assets/images/profile-pic.jpg')}
        style={styles.imgProfile}
      />
      <Text style={styles.name}>Jack Richard</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="user" color="#fff" size={20} style={styles.nameTextIcon} />
        <Text style={styles.userName}>@jrichard</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          name="facebook-square"
          color="#fff"
          size={20}
          style={styles.nameTextIcon}
        />
        <Text style={styles.userName}>facebook.com/jrichard</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          name="twitter"
          color="#fff"
          size={20}
          style={styles.nameTextIcon}
        />
        <Text style={styles.userName}>@jrichard</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainbody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  imgProfileCover: {
    height: 100,
    width: '100%',
  },
  imgProfile: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  name: {
    paddingTop: 14,
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  nameTextIcon: {
    paddingRight: 10,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
  },
});
