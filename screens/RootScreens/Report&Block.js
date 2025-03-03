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
import { useNavigation } from '@react-navigation/native';

const users = [
  { id: '1', name: 'Bessie Cooper', image: require("../../assets/images/user.jpg")},
  { id: '2', name: 'Jane Cooper', image: require("../../assets/images/user.jpg")},
  { id: '4', name: 'Darlene Robertson', image: require("../../assets/images/user.jpg")},
  { id: '5', name: 'Leslie Alexander', image: require("../../assets/images/user.jpg")},
  { id: '6', name: 'Savannah Nguyen',image: require("../../assets/images/user.jpg")},
  { id: '7', name: 'Floyd Miles', image: require("../../assets/images/user.jpg")},
  { id: '8', name: 'Albert Flores',image: require("../../assets/images/user.jpg")},
  { id: '9', name: 'Cody Fisher', image: require("../../assets/images/user.jpg")},
  { id: '10', name: 'Wade Warren', image: require("../../assets/images/user.jpg")},
];

const App = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Report & Block</Text>
        </View>
      </ImageBackground>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Image source={item.image} style={styles.avatar} />
            <Text style={styles.userName}>{item.name}</Text>
            <TouchableOpacity>
              <Text style={styles.unblockText}>Unblock</Text>
            </TouchableOpacity>
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
    height: 110,
    resizeMode: 'cover',
    overflow: 'hidden',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    marginTop: 8,
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
  },
  userName: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color:'#1F1F1F',
    lineHeight:20
  },
  unblockText: {
    color: '#FD7E14',
    fontSize: 14,
    fontWeight: '500',
    lineHeight:20
  },
  separator: {
    height: 1,
    backgroundColor: '#D3D3D3', 
    marginHorizontal: 10,
  },
});

export default App;
