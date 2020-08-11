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

const MyHome = ({navigation}) => {
  const [background, setBackground] = useState({
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStY893W6Ihm3px1v-iJu3s0qVaAcyXdiE2ICo9bShiQgpCSbx',
    name: 'Deadpool 2',
    stat: '2018 Action/Sci-fi 2h 14m',
    desc:
      'Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travelling mercenary from killing Russell.',
  });

  const [gallery, setgallery] = useState([
    {
      image:
        'https://cdn3.volusion.com/sobge.mzrea/v/vspfiles/photos/NOTIT10764-2T.jpg',
      title: 'Deadpool 2',
      stat: '2018 Action/Sci-fi 2h 14m',
      desc:
        'Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travelling mercenary from killing Russell.',
    },
    {
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      title: 'Avengers: End Game',
      stat: '2019 Action/Sci-fi 3h 2m',
      desc:
        'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.',
    },
    {
      image:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvGNXRmC76GfZrgM7P_oY0nZqg00bsjC7E5zu4dZBReXiHD_kt',
      title: 'Venom',
      stat: '2018 ‧ Action/Sci-fi ‧ 2h 20m',
      desc:
        'While trying to take down Carlton, the CEO of Life Foundation, Eddie, a journalist, investigates experiments of human trials. Unwittingly, he gets merged with a symbiotic alien with lethal abilities.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStY893W6Ihm3px1v-iJu3s0qVaAcyXdiE2ICo9bShiQgpCSbx',
      title: 'Spider Man',
      stat: '2019 ‧ Action/Adventure ‧ 2h 9m',
      desc:
        'As Spider-Man, a beloved superhero, Peter Parker faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD',
      title: 'Joker',
      stat: '2019 ‧ Drama/Crime ‧ 2h 2m',
      desc:
        'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he is part of the world around him.',
    },
  ]);

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
          <Icon name="add" color="#fff" size={30} style={styles.carouselIcon} />
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
                placeholder="Search Movies"
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
      <View style={{marginHorizontal: 14}}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 24,
            marginTop: 24,
          }}>
          Continue Watching
        </Text>
        <ImageBackground
          source={{
            uri:
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyyCYy3OZeCzFfY71jjpeavzbKjXsXjHiUiyOlvPYht81UR9lp',
          }}
          style={{height: 250, width: '100%', backgroundColor: '#000'}}
          resizeMode="cover">
          <Text style={{color: 'white', padding: 14}}>Batman Vs Superman</Text>
          <TouchableOpacity
            style={{
              ...styles.playIconContainer,
              position: 'absolute',
              top: '40%',
              right: '40%',
            }}>
            <Icon
              name="play"
              size={22}
              color="#02AD94"
              style={{marginLeft: 4}}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            marginTop: 36,
          }}>
          <Text
            style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}
            onPress={() => navigation.navigate('Favourite')}>
            My Favourite
          </Text>
          <Text
            style={{color: 'white', fontSize: 14, fontWeight: 'normal'}}
            onPress={() => navigation.navigate('Favourite')}>
            View All
          </Text>
        </View>

        <FlatList
          style={{marginBottom: 30}}
          data={list}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={{marginRight: 20}}>
                <Image
                  source={{uri: item.image}}
                  style={{height: 300, width: 200}}
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
                    top: '40%',
                    right: '30%',
                    opacity: 0.9,
                  }}>
                  <Icon name="play" size={18} color="#02AD94" />
                </View>
              </TouchableOpacity>
            );
          }}
        />
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
    marginVertical: 15,
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
