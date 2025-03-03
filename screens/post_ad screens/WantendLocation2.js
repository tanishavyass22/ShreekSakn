import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import ArrowRight from '../../assets/images/arrow-right.svg'

const cities = [
    "Riyadh",
    "Jeddah",
    "Mecca (Makkah)",
    "Medina (Al Madinah)",
    "Dammam",
    "Khobar",
    "Dhahran",
    "Abha",
  ];

const App = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.text}>{item}</Text>
      <ArrowRight width={18} height={18} />
    </TouchableOpacity>
  );
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
          <Text style={styles.Maintext}>Location(City)</Text>
        </View>
      </ImageBackground>
      <FlatList
        data={cities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity
            onPress={()=>{
              navigation.navigate('WantedLocation3Screen')
            }}
              style={{
                width: 380,
                height: 54,
                backgroundColor: '#FD7E14',
                borderRadius: 12,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom:22
              }}>
              <Text style={{fontSize: 20, fontWeight: '700', color: '#FFFFFF'}}>
                Confirm
              </Text>
            </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  Maintext: {
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
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  text: {
    fontSize: 16,
    fontWeight:'500',
    color: "#000",
  },
});

export default App;
