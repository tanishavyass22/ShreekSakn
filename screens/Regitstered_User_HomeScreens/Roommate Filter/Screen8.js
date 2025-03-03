import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setRoommateFilters } from '../../../Redux/RoommatefilterSlice';
import ArrowLeft from '../../../assets/images/arrow-left.svg';
import Nationality from '../../../assets/images/room filter icons/nationality.svg';
import RadioChecked from '../../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../../assets/images/radioUnchecked.svg';
import DropDown from '../../../assets/images/dropdownicon.svg';

const App = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [RoommateNationality, setRoommateNationality] = useState('');
  const [isNoPreference, setIsNoPreference] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
  const nationality = ['India', 'UK', 'Africa', 'Canada'];
  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  const selectroommateNationality = (selectedroommateNationality) => {
    setRoommateNationality(selectedroommateNationality);
    setIsNoPreference(false); 
    setDropdownVisible(false);
  };
  const toggleNoPreference = () => {
    setIsNoPreference(!isNoPreference);
    setRoommateNationality(''); 
  };
  const applyRoommateFilters = () => {
    if (!isNoPreference && !RoommateNationality) {
      Alert.alert("Selection Required", "Please select either 'No Preference' or choose a nationality.");
      return;
    }
    const Roommatefilters = {
      RoommateNationality: isNoPreference ? "No Preference" : RoommateNationality
    };
    console.log("Applying Filters:", Roommatefilters);
    dispatch(setRoommateFilters(Roommatefilters));
    navigation.goBack();
  };

  return (
    <View style={styles.Maincontainer}>
      <ImageBackground source={require('../../../assets/images/Frame.png')} style={styles.backgroundImage}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.orangeBox}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.text}>Nationality</Text>
        </View>
      </ImageBackground>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Nationality />
          </View>
          <Text style={styles.title}>Nationality</Text>
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>No Preference</Text>
          <TouchableOpacity onPress={toggleNoPreference}>
            {isNoPreference ? <RadioChecked /> : <RadioUnchecked />}
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subTitle}>Nationality</Text>
          <TouchableOpacity 
            onPress={toggleDropdown}
            style={styles.dropdownTrigger}
            disabled={isNoPreference} 
          >
            <Text>{RoommateNationality || "Select Nationality"}</Text>
            <DropDown />
          </TouchableOpacity>
        </View>
      </View>
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <ScrollView nestedScrollEnabled={true} style={styles.scrollView}>
            {nationality.map(nation => (
              <TouchableOpacity
                key={nation}
                style={styles.dropdownItem}
                onPress={() => selectroommateNationality(nation)}
              >
                <Text style={styles.itemText}>{nation}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
      <View style={styles.footer}>
        <TouchableOpacity 
          onPress={() => {
            setRoommateNationality('');
            setIsNoPreference(false);
          }}
          style={styles.resetButton}
        >
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={applyRoommateFilters} style={styles.applyButton}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: { flex: 1, backgroundColor: 'white' },
  backgroundImage: {
    width: '100%', height: 134, resizeMode: 'cover', overflow: 'hidden',
    alignSelf: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20
  },
  header: { flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 15 },
  text: { color: '#FD7E14', fontSize: 20, fontWeight: '500', marginLeft: 15 },
  orangeBox: { width: 46, height: 46, borderRadius: 12, backgroundColor: '#FD7E14', justifyContent: 'center', alignItems: 'center' },
  card: { width: 384, borderRadius: 16, backgroundColor: 'white', elevation: 3, alignSelf: "center", marginTop: 15, padding: 15 },
  row: { flexDirection: 'row', alignItems: 'center' },
  iconContainer: { width: 42, height: 42, borderRadius: 12, backgroundColor: '#FD7E141A', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  title: { fontSize: 16, fontWeight: '500', color: 'black' },
  subTitle: { fontSize: 14, fontWeight: '500', marginTop: 10 },
  optionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  optionText: { fontSize: 16, fontWeight: '400', color: 'black' },
  dropdownTrigger: {
    width: 356, height: 54, borderRadius: 12, borderWidth: .1, borderColor: '#0D0C22',
    alignSelf: 'center', marginTop: 10, justifyContent: 'space-between', alignItems: 'center',
    flexDirection: 'row', padding: 12, backgroundColor: '#FFF'
  },
  dropdown: {
    alignSelf: 'center',
    width: 384,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: 'white',
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: { fontSize: 16 },
  footer: {
    width: '100%', height: 80, borderTopLeftRadius: 12, borderTopRightRadius: 12,
    backgroundColor: 'white', elevation: 10, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center', gap: 15, marginTop: 'auto'
  },
  resetButton: { width: 183, height: 52, borderRadius: 12, borderWidth: 1, borderColor: '#6C757D', justifyContent: 'center', alignItems: 'center' },
  resetText: { fontSize: 16, fontWeight: '500', color: '#6C757D' },
  applyButton: { width: 183, height: 52, borderRadius: 12, backgroundColor: '#FD7E14', justifyContent: 'center', alignItems: 'center' },
  applyText: { fontSize: 16, fontWeight: '500', color: '#FFFFFF' }
});

export default App;
