import React,{useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import Dropdown from '../../assets/images/dropdownicon.svg'
import CityModal from './CityDropdownModal'
import DistrictModal from './DistrictDropdownModal'
import CustomButton from '../../Components/UiComponents/Button';

const App = () => {
  const [selectedCity, setSelectedCity] = useState("Select City"); 
   const [cityModalVisible, setCityModalVisible] = useState(false);
   const [selectedDistrict, setSelectedDistrict] = useState("Select District"); 
   const [districtModalVisible, setDistrictModalVisible] = useState(false);
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
          <Text style={styles.text}>Search</Text>
        </View>
      </ImageBackground>
      <View style={{width:384, height:76, flexDirection:'column', gap:8, alignSelf:'center', margin:10}}>
        <Text style={{fontSize:14, fontWeight:'500', lineHeight:16.41, color:'black'}}>City</Text>
        <TouchableOpacity 
        onPress={()=>setCityModalVisible(true)}
        style={{width:384,height:52, borderRadius:12, borderWidth:1, borderColor:'#0D0C221A', backgroundColor:'white', elevation:3, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10}}>
          <Text style={{fontSize:16, color:'black'}}>{selectedCity}</Text>
              <Dropdown/>
        </TouchableOpacity>
      </View>
      <View style={{width:385, height:76, flexDirection:'column', gap:8, alignSelf:'center', margin:10}}>
        <Text style={{fontSize:14, fontWeight:'500', lineHeight:16.41, color:'black'}}>District</Text>
        <TouchableOpacity 
        onPress={()=>setDistrictModalVisible(true)}
        style={{width:384,height:52, borderRadius:12, borderWidth:1, borderColor:'#0D0C221A', backgroundColor:'white', elevation:3, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10}}>
          <Text style={{fontSize:16, color:'black'}}>{selectedDistrict}</Text>
              <Dropdown/>
        </TouchableOpacity>
      </View>
      <CustomButton
      title="Next"
      onPress={() => navigation.navigate("SearchRoommateResult")} 
      />
      <CityModal
        isVisible={cityModalVisible}
        onClose={() => setCityModalVisible(false)}
        onSelectCity={(city) => setSelectedCity(city)}
      />
      <DistrictModal
      isVisible={districtModalVisible}
      onClose={() => setDistrictModalVisible(false)}
      onSelectDistrict={(district) => setSelectedDistrict(district)}
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
});

export default App;
