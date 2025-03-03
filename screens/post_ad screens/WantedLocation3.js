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
import Checked from '../../assets/images/myAcc_images/checked';
import Unchecked from '../../assets/images/myAcc_images/unchecked';

const cities = [
    "Al olaya",
    "Al Malaz",
    "King Fahd District",
    "Medina (Al Madinah)",
    "Al Sulimaniyah",
    "Al Diriyah(Historical Area)"
  ];

const App = () => {
  const [checkedItems, setCheckedItems]=useState([])
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handlePress = (item) => {
    setCheckedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item]
    );
  };
  const handleSelectAll = () => {
    if (checkedItems.length === cities.length) {
      setCheckedItems([]); 
    } else {
      setCheckedItems(cities); 
    }
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
      <Text style={styles.text}>{item}</Text>
      {checkedItems.includes(item) ? <Checked/> : <Unchecked/>}
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
          <Text style={styles.Maintext}>Location(District)</Text>
        </View>
      </ImageBackground>
      <View style={{flexDirection:'row', margin:15, gap:290, marginBottom:-2}}>
        <Text style={{fontSize:16, fontWeight:'600', lineHeight:22}}>Select all</Text>
        <TouchableOpacity onPress={handleSelectAll}>
          {checkedItems.length === cities.length ? <Checked /> : <Unchecked />}
        </TouchableOpacity>
      </View>
      <FlatList
        data={cities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ width:380, borderColor: '#0D0C221A', borderWidth:.6, alignSelf:'center'}} />}
        />
      <TouchableOpacity
            onPress={()=>{
              navigation.navigate('WantedSummaryScreen')
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
    //borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop:10
  },
  text: {
    fontSize: 16,
    fontWeight:'500',
    color: "#000",
  },
});

export default App;
