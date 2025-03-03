import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import { Switch } from 'react-native-switch';
import { useNavigation } from '@react-navigation/native';

const App = () => {
    const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const [switchStates, setSwitchStates] = useState({
    accountInfo: false,
    promotions: false,
    liveRentFree: false,
    newInterest: false,
    newMatchingAds: false,
    messages: false,
  });

  const data = [
    { id: '1', label: 'Account Information', key: 'accountInfo' },
    { id: '2', label: 'Advice, Promotion, Tips', key: 'promotions' },
    { id: '3', label: 'Live Rent Free', key: 'liveRentFree' },
    { id: '4', label: 'New Interest Shown', key: 'newInterest' },
    { id: '5', label: 'New Matching Ads Instant', key: 'newMatchingAds' },
    { id: '6', label: 'Messages', key: 'messages' },
  ];

  const handleToggle = (key) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.label}>{item.label}</Text>
      <Switch
        value={switchStates[item.key]}
        onValueChange={() => handleToggle(item.key)}
        activeText={''}
        inActiveText={''}
        backgroundActive={'#1C5298'}
        backgroundInactive={'#6C757D'}
        circleActiveColor={'#FFFFFF'}
        circleInActiveColor={'#FFFFFF'}
        switchWidthMultiplier={1.7}
      />
    </View>
  );
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
                <ArrowLeft/>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Settings</Text>
        </View>
      </ImageBackground>
      <View style={styles.chotaView}>
        <Text style={styles.not}>Notification</Text>
        <View style={styles.box}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: 412,
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
  not: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.09,
    color: '#0D0C22',
    marginTop: 20,
    marginLeft: 10,
  },
  chotaView: {
    backgroundColor: 'white',
    height: 1000,
  },
  box: {
    marginTop: 30,
    width: 352,
    height: 350,
    borderRadius: 14,
    alignSelf: 'center',
    marginVertical: -12,
    elevation: 2,
    backgroundColor: 'white',
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  label: {
    fontSize: 15,
    color: '#333333',
    fontWeight:'600',
    lineHeight:22,
    color:'#1F1F1F'
  },
  separator: {
    width:352,
    height: 1,
    borderWidth:1,
    borderColor:'#0D0C221A'
  },
});

export default App;
