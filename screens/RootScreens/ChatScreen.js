import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import Images from '../../Constants/Images';

const users = [
  {
    id: '1',
    name: 'Devon Lane',
    title: 'My name is Aria Wilson',
    image: Images.user, 
    tickImage: Images.tickGrey,
  },
  {
    id: '2',
    name: 'Jane Cooper',
    title: 'My name is Aria Wilson',
    image: Images.user1,
    tickImage: Images.tickGrey,
  },
  {
    id: '4',
    name: 'Darlene Robertson',
    title: 'My name is Aria Wilson',
    image: Images.user2,
    tickImage: Images.tickGrey,
  },
  {
    id: '5',
    name: 'Leslie Alexander',
    title: 'My name is Aria Wilson',
    image: Images.user3,
    tickImage: Images.tickGrey,
  },
  {
    id: '6',
    name: 'Savannah Nguyen',
    title: 'My name is Aria Wilson',
    image: Images.user4,
    tickImage: Images.tickGrey,
  },
  {
    id: '7',
    name: 'Floyd Miles',
    title: 'My name is Aria Wilson',
    image: Images.user,
    tickImage: Images.tickGrey,
  },
  {
    id: '8',
    name: 'Albert Flores',
    title: 'My name is Aria Wilson',
    image: Images.user1,
    tickImage: Images.tickGrey,
  },
  {
    id: '9',
    name: 'Cody Fisher',
    title: 'My name is Aria Wilson',
    image: Images.user2,
    tickImage: Images.tickGrey,
  },
  {
    id: '10',
    name: 'Wade Warren',
    title: 'My name is Aria Wilson',
    image: Images.user3,
    tickImage: Images.tickGrey,
  },
];

const App = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>s
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Messages</Text>
          <Text
            style={{
              color: '#D4DEEB',
              fontSize: 14,
              fontWeight: '500',
              marginLeft: -90,
              lineHeight: 24,
              marginTop: 60,
            }}>
            3 Unread
          </Text>
        </View>
      </ImageBackground>

      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.userContainer}>
            <Image source={item.image} style={styles.avatar} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.message}>{item.title}</Text>
            </View>
            <View style={{flexDirection: 'column', gap: 6, marginLeft: 'auto'}}>
              <Text style={styles.dateText}>Jan 23, 2024</Text>
              <Image
                source={item.tickImage}
                style={{width: 18, height: 18, marginLeft: 50}}
              />
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    overflow: 'hidden',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
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
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderColor: '#FD7E14',
    borderWidth: 2,
  },
  userName: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#1F1F1F',
    lineHeight: 20,
  },
  dateText: {
    color: '#5D637A',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 10,
  },
  message: {
    color: '#5D637A',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
});

export default App;
