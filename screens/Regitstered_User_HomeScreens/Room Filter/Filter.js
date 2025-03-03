import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ArrowLeft from '../../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import ArrowRight from '../../../assets/images/arrow-right.svg';
import Search from '../../../assets/images/room filter icons/radius.svg';
import Room from '../../../assets/images/room filter icons/room.svg';
import Availability from '../../../assets/images/room filter icons/availability.svg';
import Price from '../../../assets/images/room filter icons/price.svg';
import Suitable from '../../../assets/images/room filter icons/suitable.svg';
import Sharing from '../../../assets/images/room filter icons/sharing.svg';
import Checked from '../../../assets/images/myAcc_images/checked';
import Unchecked from '../../../assets/images/myAcc_images/unchecked';
import { useSelector } from 'react-redux';
import ActionButtons from '../../../Components/UiComponents/ResetApplyButton';
import Header from '../../../Components/UiComponents/Header';

const App = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  const selectedFilters = useSelector(state => state.filters);
  const getDisplayValue = (values) => {
    const filteredValues = values.filter(value => value && value !== 'undefined' && value !== 'null');
    return filteredValues.length > 0 ? filteredValues.join(' ●  ') : 'No Preference Yet';
  };
  const DATA = [
    { title: 'Search Radius', value: 'No Preference Yet', icon: <Search /> },
    {
      title: 'Room Type',
      value: getDisplayValue([
        selectedFilters.selectedRoom,
        selectedFilters.selectedFurnished,
        selectedFilters.checkedAmenities,
        selectedFilters.selectedNumber
      ]),
      icon: <Room />,
    },
    {
      title: 'Availability',
      value: getDisplayValue([selectedFilters.selectedDate]),
      icon: <Availability />,
    },
    {
      title: 'Price Range',
      value: getDisplayValue([
        selectedFilters.selectedDuration,
        selectedFilters.checkedItems,
        selectedFilters.minPrice,
        selectedFilters.maxPrice
      ]),
      icon: <Price />,
    },
    {
      title: 'Suitable For',
      value: getDisplayValue([
        selectedFilters.gender,
        selectedFilters.minage,
        selectedFilters.maxage,
        selectedFilters.occupation,
        selectedFilters.smoking
      ]),
      icon: <Suitable />,
    },
    {
      title: 'Sharing With',
      value: getDisplayValue([
        selectedFilters.sharinggender,
        selectedFilters.sharingminage,
        selectedFilters.sharingmaxage,
        selectedFilters.sharinglanguage,
        selectedFilters.sharingsmoking,
        selectedFilters.sharingNationality
      ]),
      icon: <Sharing />,
    },
  ];
  const ListItem = ({title, value, icon, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <ArrowRight />
    </TouchableOpacity>
  );
  const handleItemPress = title => {
    const screenMap = {
      'Search Radius': 'SearchRadiusScreen',
      'Room Type': 'RoomTypeScreen',
      'Availability': 'AvailabilityFilterScreen',
      'Price Range': 'PriceRangeScreen',
      'Suitable For': 'SuitableForScreen',
      'Sharing With': 'SharingWithScreen',
    };
    const screenName = screenMap[title];
    if (screenName) {
      navigation.navigate(screenName);
    } else {
      console.log(`No screen found for: ${title}`);
    }
  };
  return (
    <View style={styles.Maincontainer}>
     <Header title="Filters" onBackPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <FlatList showsVerticalScrollIndicator={false}
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              value={item.value}
              icon={item.icon}
              onPress={() => handleItemPress(item.title)}
            />
          )}
        />
      </View>
      <View>
      <View style={styles.adsContainer}>
        <Text style={styles.adsText}>Ads With Photo</Text>
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          {checked ? <Checked /> : <Unchecked />}
        </TouchableOpacity>
      </View>      
    </View>
    <ActionButtons 
        onPressApply={() =>{
          navigation.navigate("SearchResultScreen")
        }}
        onPressReset={() => Alert.alert("Apply Button Pressed")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    height: 495,
    width: 384,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    margin: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FD7E141A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  value: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FD7E14',
    marginTop: 4,
  },
  adsContainer: {
    width: 384,
    height: 52,
    borderRadius: 16,
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  adsText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: 'black',
  },
});

export default App;
