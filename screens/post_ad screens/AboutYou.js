import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import Checked from '../../assets/images/myAcc_images/checked';
import Unchecked from '../../assets/images/myAcc_images/unchecked';
import RadioChecked from '../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../assets/images/radioUnchecked.svg';
import DropdownIcon from '../../assets/images/dropdownicon.svg';
import { useDispatch } from 'react-redux';
import { setWantedInformation } from '../../Redux/RoommateWantenSlice';

const Dropdown = ({ isVisible, setDropdownVisible, onSelect, options, selectedValues = [], allowMultiple }) => {
  return (
    isVisible && (
      <View style={styles.dropdownContainer}>
        <View style={styles.dropdownMenu}>
          <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
            {options.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.dropdownItem,
                  selectedValues.includes(item) && { backgroundColor: '#d3d3d3' } // Highlight selected
                ]}
                onPress={() => onSelect(item)}
              >
                <Text style={styles.dropdownText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {allowMultiple && (
            <TouchableOpacity>
              
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  );
};

const App = () => {
   const [activeDropdown, setActiveDropdown] = useState(null);
    const [values, setValues] = useState({ nationality: '', intrest: '', Age: ''});
    const handleSelect = (field, value) => {
      setValues((prev) => {
        const currentValues = prev[field] || []; 
    
        if (field === 'intrest') {
          const updatedValues = currentValues.includes(value)
            ? currentValues.filter((item) => item !== value) 
            : [...currentValues, value]; 
    
          return { ...prev, [field]: updatedValues };
        } else {
          return { ...prev, [field]: value }; 
        }
      });
    };
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId1, setSelectedId1] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);
  const [selectedId3, setSelectedId3] = useState(null);
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const OptionButton = ({ label, isSelected, onPress, isRadio = false }) => (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Text>{label}</Text>
      {isRadio ? (isSelected ? <RadioChecked /> : <RadioUnchecked />) : 
        isSelected ? <Checked /> : <Unchecked />}
    </TouchableOpacity>
  );

  const dispatch = useDispatch();
       const applyWanted = () => {
           const wanted = {
             selectedId,
             selectedId1,
             selectedId2,
             selectedId3,
             Age: values.Age,
             intrest: values.intrest,
             nationality: values.nationality
           };
         
           console.log("Applying Preferences:", wanted);
           dispatch(setWantedInformation(wanted)); 
         };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>About You</Text>
        </View>
      </ImageBackground>
      {/* Gender */}
      <View style={styles.Secondcard}>
        <Text style={styles.heading}>Gender</Text>
        <OptionButton label="Male" isSelected={selectedId2 === 'Male'} onPress={() => setSelectedId2('Male')} isRadio />
        <OptionButton label="Female" isSelected={selectedId2 === 'Female'} onPress={() => setSelectedId2('Female')} isRadio />
      </View>

      {/* Occupation */}
      <View style={styles.Secondcard}>
        <Text style={styles.heading}>Occupation</Text>
        <OptionButton label="Student" isSelected={selectedId3 === 'Student'} onPress={() => setSelectedId3('Student')} isRadio />
        <OptionButton label="Professional" isSelected={selectedId3 === 'Professional'} onPress={() => setSelectedId3('Professional')} isRadio />
      </View>

      {/* Smoking */}
      <View style={styles.Secondcard}>
        <Text style={styles.heading}>Smoking</Text>
        <OptionButton label="Smoker" isSelected={selectedId === 'Smoker'} onPress={() => setSelectedId('Smoker')} isRadio />
        <OptionButton label="Non-Smoker" isSelected={selectedId === 'Non-Smoker'} onPress={() => setSelectedId('Non-Smoker')} isRadio />
      </View>

      {/* Language */}
      <View style={styles.card}>
        <Text style={styles.heading}>Language</Text>
        <OptionButton label="Both" isSelected={selectedId1 === 'Both'} onPress={() => setSelectedId1('Both')} isRadio />
        <OptionButton label="English" isSelected={selectedId1 === 'English'} onPress={() => setSelectedId1('English')} isRadio />
        <OptionButton label="Arabic" isSelected={selectedId1 === 'Arabic'} onPress={() => setSelectedId1('Arabic')} isRadio />
      </View>
      <Text style={{fontSize: 16, fontWeight: '500', color: 'black', margin:15}}>Age</Text>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'Age' ? null : 'Age')}>
        <TextInput value={values.Age} editable={false} style={styles.input} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'Age' ? null : 'Age')}>
        <DropdownIcon
          width={14}
          height={13}
          color="black"
          style={{marginLeft: -25, marginTop: 20}}
        />
      </TouchableOpacity>
    </View>
    <Dropdown
      isVisible={activeDropdown === 'Age'}
      setDropdownVisible={setActiveDropdown}
      onSelect={(value) => handleSelect('Age', value)}
      options={['18-25', '25-35', '35-50', '50-70']} 
    />
      <Text style={{fontSize: 16, fontWeight: '500', color: 'black', margin:15}}>Nationality</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'nationality' ? null : 'nationality')}>
            <TextInput value={values.nationality} editable={false} style={styles.input} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'nationality' ? null : 'nationality')}>
            <DropdownIcon
              width={14}
              height={13}
              color="black"
              style={{marginLeft: -25, marginTop: 20}}
            />
          </TouchableOpacity>
        </View>
        <Dropdown
    isVisible={activeDropdown === 'nationality'}
    setDropdownVisible={setActiveDropdown}
    onSelect={(value) => handleSelect('nationality', value)}
    options={['USA', 'India', 'Canada', 'UK']} 
  />
  <Text style={{fontSize: 16, fontWeight: '500', color: 'black', margin:15}}>Intrests</Text>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'intrest' ? null : 'intrest')}>
        <TextInput value={values.intrest ? values.intrest.join(', ') : ''}  editable={false} style={styles.input} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'intrest' ? null : 'intrest')}>
        <DropdownIcon
          width={14}
          height={13}
          color="black"
          style={{marginLeft: -25, marginTop: 20}}
        />
      </TouchableOpacity>
    </View>
    <Dropdown
      isVisible={activeDropdown === 'intrest'}
      setDropdownVisible={setActiveDropdown}
      onSelect={(value) => handleSelect('intrest', value)}
      options={[
        'Music', 'Cooking', 'Reading', 'Sports', 'Gym', 'Socializing', 
        'Films', 'Food', 'Running', 'Theatre', 'Swimming', 'Fashion']} 
        selectedValues={values.intrest || []}
        allowMultiple={true}
    />
    <TouchableOpacity 
            onPress={()=>{
              applyWanted()
              navigation.navigate('AboutYourSearchScreen')
            }}
            style={{width:380, height:54, backgroundColor:'#FD7E14', borderRadius:12, alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop:20, marginBottom:20}}>
                <Text style={{fontSize:20, fontWeight:'700', lineHeight:24, color:'#FFFFFF'}}>Next</Text>
            </TouchableOpacity>
    </ScrollView>
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
  Secondcard: {
    width: 380,
    height: 100,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 2,
    marginTop: 15,
    borderRadius: 16,
    padding: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginTop: -5,
  },
  card: {
    width: 380,
    height: 125,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 2,
    marginTop: 15,
    borderRadius: 16,
    padding: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    marginTop: 15,
  },
  input:{
    width: '380',
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 10,
    marginLeft:15
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownMenu: {
    width:380,
    marginTop: 8,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    maxHeight: 200, 
    overflow: 'hidden',
    borderRadius:14,
    alignSelf:'center'
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
  },
});

export default App;
