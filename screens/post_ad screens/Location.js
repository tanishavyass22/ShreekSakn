import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-switch';
import DropdownIcon from '../../assets/images/dropdownicon.svg';
import GpsIcon from '../../assets/images/SVGs/gps.svg';
import Header from '../../Components/UiComponents/Header';

const cities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Ahmedabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Jaipur',
  'Lucknow',
];
const districts = [
  'Thane',
  'North Delhi',
  'Bengaluru Urban',
  'Rangareddy',
  'Gandhinagar',
  'Chengalpattu',
  'North 24 Parganas',
  'Pimpri-Chinchwad',
  'Jaipur',
  'Lucknow',
];

const App = () => {
  const navigation = useNavigation();
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [isCityDropdownVisible, setCityDropdownVisible] = useState(false);
  const [isDistrictDropdownVisible, setDistrictDropdownVisible] =
    useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleSelect = (item, setter, toggle) => {
    setter(item);
    toggle(false);
  };

  return (
    <ScrollView style={styles.container}>
    <Header title="Location" onBackPress={() => navigation.goBack()} />

      <View style={styles.content}>
        {[
          {
            label: 'City',
            value: selectedCity,
            setValue: setSelectedCity,
            toggle: setCityDropdownVisible,
            visible: isCityDropdownVisible,
            options: cities,
          },
          {
            label: 'District',
            value: selectedDistrict,
            setValue: setSelectedDistrict,
            toggle: setDistrictDropdownVisible,
            visible: isDistrictDropdownVisible,
            options: districts,
          },
        ].map(({label, value, setValue, toggle, visible, options}, index) => (
          <View key={index}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity
              onPress={() => toggle(!visible)}
              style={styles.inputWrapper}>
              <TextInput
                value={value}
                placeholder={`Select a ${label.toLowerCase()}`}
                editable={false}
                style={styles.input}
              />
              <DropdownIcon
                width={14}
                height={13}
                color="black"
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
            {visible && (
              <View style={styles.dropdownMenu}>
                <ScrollView
                  nestedScrollEnabled
                  showsVerticalScrollIndicator={false}>
                  {options.map((item, idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={styles.dropdownItem}
                      onPress={() => handleSelect(item, setValue, toggle)}>
                      <Text style={styles.dropdownText}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}
          </View>
        ))}

        <Text style={styles.label}>Location</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.gpsButton}>
            <GpsIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find Address</Text>
        </TouchableOpacity>
        <View style={{width: 384, height: 66}}>
          <Text style={styles.description}>
            Search the areas you're open to living in. You must choose at least
            one, but there's no limit on how many you add. You will also be able
            to change them any time.
          </Text>
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Hide Exact Location</Text>
          <Switch
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
            activeText=""
            inActiveText=""
            backgroundActive="#1C5298"
            backgroundInactive="#6C757D"
            circleActiveColor="#FFFFFF"
            circleInActiveColor="#FFFFFF"
            switchWidthMultiplier={1.6}
            circleSize={30}
          />
        </View>
        <Text style={styles.description}>
          We’ll show approximate location to seekers
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AvailabilityScreen')}
          style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  backgroundImage: {
    width: '100%',
    height: 110,
    resizeMode: 'cover',
    overflow: 'hidden',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 15,
  },
  text: {color: '#FD7E14', fontSize: 20, fontWeight: '500', marginLeft: 15},
  orangeBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#FD7E14',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {margin: 20, gap: 15},
  label: {fontSize: 17, fontWeight: '700', color: 'black'},
  inputWrapper: {flexDirection: 'row', alignItems: 'center'},
  input: {
    flex: 1,
    height: 52,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0D0C221A',
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 10,
  },
  dropdownIcon: {position: 'absolute', right: 10, top: 15},
  dropdownMenu: {
    marginTop: 1,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 14,
    maxHeight: 200,
    backgroundColor: 'white',
    elevation: 3,
  },
  dropdownItem: {paddingVertical: 10, paddingHorizontal: 15},
  dropdownText: {fontSize: 16, color: 'black'},
  gpsButton: {
    width: 36,
    height: 36,
    backgroundColor: '#FD7E141F',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 8,
  },
  button: {
    width: '100%',
    height: 54,
    backgroundColor: '#FD7E14',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {fontSize: 20, fontWeight: '700', color: '#FFFFFF'},
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#6C757D',
  },
  switchContainer: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 14,
    paddingHorizontal: 10,
    marginTop: 100,
  },
  switchLabel: {fontSize: 16, fontWeight: '600', color: '#1F1F1F'},
});

export default App;
