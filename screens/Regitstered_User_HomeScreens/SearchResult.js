import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Sorting from '../../assets/images/SVGs/sorting.svg';
import Filter from '../../assets/images/SVGs/filter.svg';
import Map from '../../assets/images/SVGs/map.svg';
import Lock from '../../assets/images/SVGs/lock.svg';
import Rocket from '../../assets/images/SVGs/rocket.svg';
import SortingModal from './SortingModal';
import {useSelector} from 'react-redux';
import Header from '../../Components/UiComponents/Header';

const RoomCard = ({item}) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              width: 165.25,
              height: 26,
              borderRadius: 8,
              paddingTop: 6,
              paddingRight: 10,
              paddingBottom: 6,
              paddingLeft: 10,
              backgroundColor: '#1C52981A',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Lock />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 14.06,
                color: '#1C5298',
              }}>
              UPGRADE TO CONTACT
            </Text>
          </View>
          {item.tag && (
            <View style={styles.tagContainer}>
              <Rocket width={16} height={16} fill="#fff" style={styles.icon} />
              <Text style={styles.tagText}>{item.tag}</Text>
            </View>
          )}
        </View>
        <View style={{marginTop: 10, marginBottom: -20}}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/rooom.png')}
              style={styles.iconImage}
            />
            <Text style={styles.info}>{item.rooms}</Text>
            <View style={styles.seprator}></View>
            <Image
              source={require('../../assets/images/tub.png')}
              style={styles.iconImage}
            />
            <Text style={styles.info}>{item.type}</Text>
          </View>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/location.png')}
              style={styles.iconImage}
            />
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.month}>/{item.duration}</Text>
          <View>
            <View style={{marginLeft: -40}}>
              <Text style={styles.availableText}>Available</Text>
              <Text style={{fontWeight: 'bold'}}>{item.availability}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.heartIcon} onPress={toggleLike}>
        <Image
          source={
            isLiked
              ? require('../../assets/images/heart.png')
              : require('../../assets/images/emptyHeart.png')
          }
          style={styles.heartImage}
        />
      </TouchableOpacity>
    </View>
  );
};
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const selectedFilters = useSelector(state => state.filters);
  const rooms = [
    {
      id: '1',
      tag: 'Featured',
      title: 'Rooms in Elm Street',
      rooms: selectedFilters.selectedNumber + ' Rooms',
      type: selectedFilters.selectedFurnished,
      location: 'Riyadh - Najran',
      price: selectedFilters.minPrice + ' SAR',
      duration: selectedFilters.selectedDuration,
      availability: selectedFilters.selectedDate,
      image: require('../../assets/images/room_img.png'),
    },
    {
      id: '2',
      title: 'Rooms in Elm street',
      rooms: '3 Rooms',
      type: '1 En-Suit',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      duration: 'Yearly',
      availability: '1 February',
      image: require('../../assets/images/room_img.png'),
    },
    {
      id: '3',
      title: 'Rooms in Elm street',
      rooms: '3 Rooms',
      type: '1 En-Suit',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      duration: 'Yearly',
      availability: '1 February',
      image: require('../../assets/images/room_img.png'),
    },
    {
      id: '4',
      title: 'Rooms in Elm street',
      rooms: '3 Rooms',
      type: '1 En-Suit',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      availability: '1 February',
      image: require('../../assets/images/room_img.png'),
    },
    {
      id: '5',
      title: 'Rooms in Elm street',
      rooms: '3 Rooms',
      type: '1 En-Suit',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      availability: '1 February',
      image: require('../../assets/images/room_img.png'),
    },
    {
      id: '6',
      title: 'Rooms in Elm street',
      rooms: '3 Rooms',
      type: '1 En-Suit',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      availability: '1 February',
      image: require('../../assets/images/room_img.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <Header title="Riyadh-Nirjan" onBackPress={() => navigation.goBack()} />
      <View style={styles.Ncontainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.Nbutton}>
          <Sorting />
          <Text style={styles.NText}>Sorting</Text>
        </TouchableOpacity>
        <View style={styles.Nseprator}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RoomFilterScreen');
          }}
          style={styles.Nbutton}>
          <Filter />
          <Text style={styles.NText}>Filter</Text>
        </TouchableOpacity>
        <View style={styles.Nseprator}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MapScreen');
          }}
          style={styles.Nbutton}>
          <Map />
          <Text style={styles.NText}>Map</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={rooms}
        renderItem={({item}) => <RoomCard item={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <SortingModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Ncontainer: {
    width: 348,
    height: 46,
    alignSelf: 'center',
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    borderRadius: 12,
    marginTop: 15,
  },
  Nbutton: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  NText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: 'black',
    marginLeft: -13,
  },
  Nseprator: {
    width: 1,
    height: 20,
    backgroundColor: '#0D0C221A',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: 134,
    resizeMode: 'cover',
    overflow: 'hidden',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C5298',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  icon: {
    marginRight: 5,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
  },
  text: {
    color: '#FD7E14',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 15,
    lineHeight: 24,
    marginTop: 42,
  },
  smallView: {
    flexDirection: 'row',
    marginTop: 12,
  },
  orangeBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#FD7E14',
    marginLeft: 15,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 380,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    position: 'relative',
    marginTop: 8,
  },
  defaultTag: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  image: {
    alignSelf: 'center',
    width: 400,
    height: 212,
    borderRadius: 14,
  },
  details: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: -35,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  seprator: {
    width: 2,
    height: 15,
    backgroundColor: 'black',
    marginRight: 10,
  },
  info: {
    fontSize: 13,
    color: '#6C757D',
    marginLeft: 5,
    marginRight: 10,
  },
  location: {
    fontSize: 13,
    color: '#6C757D',
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#005C9F',
    marginTop: 15,
  },
  month: {
    marginRight: 190,
    marginTop: 5,
    color: '#005C9F',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 18,
  },
  availableText: {
    color: '#6C757D',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: -3,
  },
  availabilityDate: {
    fontSize: 16,
    color: '#0D0C22',
    lineHeight: 22,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  heartImage: {
    width: 20,
    height: 20,
  },
  redSquare: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redSquareText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  iconImage: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
});

export default App;
