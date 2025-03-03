import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import {useNavigation,} from '@react-navigation/native';
import ArrowLeft from '../../../assets/images/arrow-left.svg';
import Room from '../../../assets/images/room filter icons/room.svg';
import Amenities from '../../../assets/images/room filter icons/Amenities.svg';
import Furnished from '../../../assets/images/SVGs/sofa.svg';
import Checked from '../../../assets/images/myAcc_images/checked.svg';
import Unchecked from '../../../assets/images/myAcc_images/unchecked.svg';
import RadioChecked from '../../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../../assets/images/radioUnchecked.svg';
import DropDown from '../../../assets/images/dropdownicon.svg'
import { useDispatch } from 'react-redux';
import { setFilters } from '../../../Redux/FilterSlice'
import ActionButtons from '../../../Components/UiComponents/ResetApplyButton';
import Header from '../../../Components/UiComponents/Header';

const FilterOption = ({title, selected, onSelect}) => (
  <View style={styles.optionRow}>
    <Text style={styles.optionText}>{title}</Text>
    <TouchableOpacity onPress={() => onSelect(title)}>
      {selected === title ? <RadioChecked /> : <RadioUnchecked />}
    </TouchableOpacity>
  </View>
);
const AmenitiesOption = ({title, checkedAmenities, onPress}) => (
  <View style={styles.optionRow}>
    <Text style={styles.optionText}>{title}</Text>
    <TouchableOpacity onPress={() => onPress(title)}>
      {checkedAmenities.includes(title) ? <Checked /> : <Unchecked />}
    </TouchableOpacity>
  </View>
);
const App = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedFurnished, setSelectedFurnished] = useState('');
  const [checkedAmenities, setCheckedAmenities] = useState([]);

  const handlePress = item => {
    setCheckedAmenities(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item],
    );
  };
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const numbers = Array.from({ length: 10 }, (_, i) => i + 1); 

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const selectNumber = (num) => {
    setSelectedNumber(num.toString());
    setDropdownVisible(false);
  };
  const applyFilters = () => {
    const filters = {
      selectedRoom,
      selectedFurnished,
      checkedAmenities,
      selectedNumber,
    };
  
    console.log("Applying Filters:", filters);
    dispatch(setFilters(filters));
    navigation.goBack(); 
  };

  return (
    <View style={styles.Maincontainer}>
          <Header title="Room Type" onBackPress={() => navigation.goBack()} />
      <ScrollView  nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View style={styles.cardContainer}>
        {[
          {
            icon: <Room />,
            title: 'Room Type',
            value: selectedRoom,
            options: ['No Preference', 'Room', 'En-suite'],
            onSelect: setSelectedRoom,
          },
          {
            icon: <Amenities />,
            title: 'Amenities',
            value: checkedAmenities.join(', '),
            options: ['Wi-Fi', 'Shared Living Room'],
            onSelect: handlePress,
          },
          {
            icon: <Furnished />,
            title: 'Furnished',
            value: selectedFurnished,
            options: ['No Preference', 'Furnished', 'Unfurnished'],
            onSelect: setSelectedFurnished,
          },
        ].map(({icon, title, value, options, onSelect}, i) => (
          <View key={i}>
            <View style={styles.sectionHeader}>
              <View style={styles.iconContainer}>{icon}</View>
              <View>
                <Text style={styles.sectionTitle}>{title}</Text>
                <Text style={styles.sectionValue}>{value}</Text>
              </View>
            </View>
            {options.map(option =>
              title === 'Amenities' ? (
                <AmenitiesOption
                  key={option}
                  title={option}
                  checkedAmenities={checkedAmenities}
                  onPress={onSelect}
                />
              ) : (
                <FilterOption
                  key={option}
                  title={option}
                  selected={value}
                  onSelect={onSelect}
                />
              ),
            )}
            <View style={styles.divider} />
          </View>
        ))}
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={styles.iconContainer}>
            <Room/>
        </View>
        <Text style={[styles.sectionTitle, {marginTop:-2}]}>Number of Rooms</Text>
        </View>
        <Text>Number of Rooms</Text>
         <TouchableOpacity 
         onPress={toggleDropdown}
         style={{width:356, height:54, borderRadius:12, borderWidth:1,borderColor:'#0D0C221A', alignSelf:'center', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10}}>
          <Text>{selectedNumber}</Text>
                <DropDown/>
        </TouchableOpacity>
        {isDropdownVisible && (
        <View style={styles.dropdown}>
          <ScrollView  showsVerticalScrollIndicator={false} nestedScrollEnabled={true} style={styles.scrollView}>
            {numbers.map((num) => (
              <TouchableOpacity key={num} style={styles.dropdownItem} onPress={() => selectNumber(num)}>
                <Text style={styles.itemText}>{num}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )} 
      </View>
      <View style={{margin:30}}/>
    </ScrollView>
    <ActionButtons 
        onPressReset={() => {
          setSelectedRoom('');
                  setSelectedFurnished('');
                  setCheckedAmenities([]);
                  setSelectedNumber('');
        }} 
        onPressApply={() => applyFilters()} 
      />
    </View>
   
  );
};

const styles = StyleSheet.create({
  Maincontainer: {flex: 1, backgroundColor: 'white'},
  backgroundImage: {
    width: '100%',
    height: 134,
    resizeMode: 'cover',
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
  headerContainer: {flexDirection: 'row', marginTop: 12},
  orangeBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#FD7E14',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 30,
  },
  cardContainer: {
    width: 384,
    //height: 696,
    borderRadius: 16,
    backgroundColor: 'white',
    elevation: 3,
    alignSelf: 'center',
    padding: 20,
    marginTop:20,
    flexDirection:'column',
    gap:10,
    marginBottom:30
  },
  sectionHeader: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FD7E141A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: 'black',
    marginTop:7
  },
  sectionValue: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#FD7E14',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {fontSize: 16, fontWeight: '400', lineHeight: 22, color: 'black'},
  divider: {
    width: '100%',
    borderWidth: .7,
    borderColor: '#E7E7E9',
    marginVertical: 8,
  },
  dropdown: {
    alignSelf:'center',
    width:350,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: "white",
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
  },
});

export default App;


  

