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
import Availability from '../../../assets/images/room filter icons/availability.svg';
import Price from '../../../assets/images/room filter icons/price.svg';
import Age from '../../../assets/images/room filter icons/age.svg';
import Gender from '../../../assets/images/room filter icons/gender.svg';
import Occupation from '../../../assets/images/room filter icons/occupation.svg';
import Smoking from '../../../assets/images/room filter icons/smoking.svg';
import Language from '../../../assets/images/room filter icons/language.svg';
import Nationality from '../../../assets/images/room filter icons/nationality.svg';
import Checked from '../../../assets/images/myAcc_images/checked';
import Unchecked from '../../../assets/images/myAcc_images/unchecked';
import { useSelector } from 'react-redux';


const App = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const selectedRoommateFilters = useSelector(state => state.Roommatefilters);
  const DATA = [
    { title: 'Availability', value: `${selectedRoommateFilters.RoommateselectedDate}` || 'No Preference', icon: <Availability/> },
    { title: 'Monthly Budget', value: `${selectedRoommateFilters.minbudget} SAR - ${selectedRoommateFilters.maxbudget} SAR` || 'No Preference', icon: <Price/> },
    { title: 'Age Range', value:  `${selectedRoommateFilters.RoommateminAge} Year - ${selectedRoommateFilters.RoommatemaxAge} Year` || 'No Preference', icon: <Age/> },
    { title: 'Gender', value: `${selectedRoommateFilters.RoommateGender}` || 'No Preference', icon: <Gender/> },
    { title: 'Occupation', value: `${selectedRoommateFilters.RoommateOccupation}` || 'No Preference', icon: <Occupation/> },
    { title: 'Smoking', value: `${selectedRoommateFilters.RoommateSmoking}` || 'No Preference', icon: <Smoking/> },
    { title: 'Language', value: `${selectedRoommateFilters.RoommateLanguage}` || 'No Preference', icon: <Language/> },
    { title: 'Nationality', value:`${selectedRoommateFilters.RoommateNationality}` || 'No Preference' , icon: <Nationality/> },
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
      'Availability': 'RoommateFilterAailabilityScreen',
      'Monthly Budget': 'RoommateMonthlyBudgetScreen',
      'Age Range': 'RoommateAgeScreen',
      'Gender': 'RoommateGenderScreen',
      'Occupation': 'RoommateOccupationScreen',
      'Smoking': 'RoommateSmokingScreen',
      'Language': 'RoommatelanguageScreen',
      'Nationality': 'RoommateNationalityScreen',
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
      <ImageBackground
        source={require('../../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Filters</Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
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
      <View
        style={{
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
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 20,
            color: 'black',
          }}>
          Ads With Photo
        </Text>
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          {checked ? <Checked /> : <Unchecked />}
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 428,
          height: 80,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: 'white',
          elevation: 10,
          marginTop: 5,
          overflow: 'visible',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
          marginLeft: -5,
        }}>
        <TouchableOpacity
          style={{
            width: 183,
            height: 52,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#6C757D',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 20,
              color: '#6C757D',
            }}>
            Reset
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 183,
            height: 52,
            borderRadius: 12,
            backgroundColor: '#FD7E14',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 20,
              color: '#FFFFFF',
            }}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: 134,
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
  container: {
    height: 592,
    width: 384,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    margin: 10,
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
});

export default App;
