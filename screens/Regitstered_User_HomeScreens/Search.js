import React,{useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Dropdown from '../../assets/images/dropdownicon.svg'
import CityModal from './CityDropdownModal'
import DistrictModal from './DistrictDropdownModal'
import CustomButton from '../../Components/UiComponents/Button';
import Header from '../../Components/UiComponents/Header';

const App = () => {
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [cityModalVisible, setCityModalVisible] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("Select District");
  const [districtModalVisible, setDistrictModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Header title="Search" onBackPress={() => navigation.goBack()} />
      <View style={styles.selectionContainer}>
        <Text style={styles.label}>City</Text>
        <TouchableOpacity 
          onPress={() => setCityModalVisible(true)} 
          style={styles.selectionBox}
        >
          <Text style={styles.selectionText}>{selectedCity}</Text>
          <Dropdown />
        </TouchableOpacity>
      </View>
      <View style={styles.selectionContainer}>
        <Text style={styles.label}>District</Text>
        <TouchableOpacity 
          onPress={() => setDistrictModalVisible(true)} 
          style={styles.selectionBox}
        >
          <Text style={styles.selectionText}>{selectedDistrict}</Text>
          <Dropdown />
        </TouchableOpacity>
      </View>
      <CustomButton
        title="Next"
        onPress={() => navigation.navigate("SearchResultScreen")}
        style={{marginTop:100}}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  selectionContainer: {
    width: 384,
    height: 76,
    flexDirection: 'column',
    gap: 8,
    alignSelf: 'center',
    margin: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.41,
    color: 'black',
  },
  selectionBox: {
    width: 384,
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  selectionText: {
    fontSize: 16,
    color: 'black',
  },
});

export default App;