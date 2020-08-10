import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';

import Carousel from 'react-native-anchor-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

//import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';

const MyHome = ({navigation}) => {
  const [background, setBackground] = useState({
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStY893W6Ihm3px1v-iJu3s0qVaAcyXdiE2ICo9bShiQgpCSbx',
    name: 'Deadpool 2',
    stat: '2019 Action/Sci-fi 3h 2m',
    desc: 'Marvel....',
  });

  const [gallery, setgallery] = useState([
    {
      image:
        'https://cdn3.volusion.com/sobge.mzrea/v/vspfiles/photos/NOTIT10764-2T.jpg',
      title: 'Venom',
      stat: '2019 Action/Sci-fi 3h 2m',
      desc: 'Marvel....',
    },
    {
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      title: 'Avengers: End Game',
      stat: '2019 Action/Sci-fi 3h 2m',
      desc: 'Again Thanos....',
    },
    {
      image:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvGNXRmC76GfZrgM7P_oY0nZqg00bsjC7E5zu4dZBReXiHD_kt',
      title: 'Venom',
      stat: '2019 Action/Sci-fi 3h 2m',
      desc: 'Marvel',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStY893W6Ihm3px1v-iJu3s0qVaAcyXdiE2ICo9bShiQgpCSbx',
      title: 'Spider Man',
      stat: '2019 Action/Sci-fi 3h 2m',
      desc: 'Marvel',
    },
  ]);

  const carouselRef = useRef(null);

  const {width, height} = Dimensions.get('window');

  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.stat,
              desc: item.desc,
            });
          }}>
          <Image source={{uri: item.image}} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <Icon
            name="add"
            color="white"
            size={30}
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#000'}}>
      <View style={styles.carouselContentcontainer}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
          <ImageBackground
            source={{uri: background.uri}}
            style={styles.ImageBg}
            blurRadius={10}>
            <View style={styles.searchBoxContainer}>
              <TextInput
                placeholder="Search Exercise Program"
                placeholderTextColor="#666"
                style={styles.SearchBox}
              />
              <Icon
                name="search"
                color="#666"
                size={22}
                style={styles.searchBoxIcon}
              />
            </View>

            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                marginLeft: 10,
                marginVertical: 10,
              }}>
              Top picks this week
            </Text>

            <View style={styles.carouselContainerView}>
              <Carousel
                style={styles.Carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>
            <View style={styles.movieInfoContainer}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <Icon
                  name="play"
                  size={22}
                  color="#02AD94"
                  style={{marginLeft: 4}}
                />
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 14, marginTop: 14}}>
              <Text style={{color: 'white', opacity: 0.8, lineHeight: 20}}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContentcontainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14,
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start',
  },
  searchBoxContainer: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  searchBoxIcon: {
    position: 'absolute',
    right: 20,
    top: 14,
  },
  carouselContainerView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Carousel: {
    flex: 1,
    overflow: 'visible',
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  carouselText: {
    padding: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold',
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8,
  },
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
