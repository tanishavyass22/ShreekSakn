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
import { useDispatch } from 'react-redux';
import { setExistingRoommate } from '../../Redux/ExistingRoommateSlice';
import Checked from '../../assets/images/myAcc_images/checked';
import Unchecked from '../../assets/images/myAcc_images/unchecked';
import RadioChecked from '../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../assets/images/radioUnchecked.svg';
import DropdownIcon from '../../assets/images/dropdownicon.svg';

const Dropdown = ({ isVisible, setDropdownVisible, onSelect, options }) => {
  return (
    isVisible && (
      <View style={styles.dropdownContainer}>
        <View style={styles.dropdownMenu}>
          <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
            {options.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={() => {
                  onSelect(item);
                  setDropdownVisible(null); 
                }}
              >
                <Text style={styles.dropdownText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    )
  );
};

const App = () => {
   const [activeDropdown, setActiveDropdown] = useState(null);
   const [values, setValues] = useState({ nationality: '', intrest: ''});
   const handleSelect = (field, value) => {
      setValues((prev) => ({ ...prev, [field]: value }));
    };
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId1, setSelectedId1] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const[male, setMale] = useState("")
  const[female, setFemale] = useState("")
  const[minAge, setMinage] = useState("")
  const[maxAge, setMaxage] = useState("")
  const handlePress = item => {
    setCheckedItems(prevItems =>
      prevItems.includes(item)
        ? prevItems.filter(i => i !== item)
        : [...prevItems, item],
    );
  };
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
     const applyExisting = () => {
         const existing = {
           selectedId,
           selectedId1,
           checkedItems,
           male,
           female,
           minAge,
           maxAge,
           nationality: values.nationality
         };
       
         console.log("Applying Preferences:", existing);
         dispatch(setExistingRoommate(existing)); 
       };
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={styles.Mcontainer}>
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Existing Roommate</Text>
        </View>
      </ImageBackground>
      <Text
        style={{
          margin: 15,
          fontSize: 14,
          fontWeight: '400',
          lineHeight: 22,
          color: '#6C757D',
        }}>
        In case you just start renting the house you can leave the data of the
        existing roommate empty.
      </Text>
      <View style={styles.container}>
      {/* Number of Roommate Section */}
      <View style={styles.AGcard}>
        <View style={styles.section}>
          <Text style={styles.title}>Number of Roommate</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Male</Text>
            <TextInput value={male}onChangeText={setMale}keyboardType="number-pad"style={styles.input}/>
          </View>
        </View>
        <View style={styles.sectionRight}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Female</Text>
            <TextInput value={female}onChangeText={setFemale}keyboardType="number-pad"style={styles.input}
            />
          </View>
        </View>
      </View>
      {/* Age Section */}
      <View style={[styles.AGcard, styles.marginTop]}>
        <View style={styles.section}>
          <Text style={styles.title}>Age</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Minimum</Text>
            <TextInput value={minAge}onChangeText={setMinage}placeholder="18 year"placeholderTextColor="#0D0C2252"keyboardType="number-pad"style={styles.input}/>
          </View>
        </View>
        <View style={styles.sectionRight}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Maximum</Text>
            <TextInput value={maxAge} onChangeText={setMaxage} placeholder="99 year" placeholderTextColor="#0D0C2252" keyboardType="number-pad" style={styles.input}/>
          </View>
        </View>
      </View>
    </View>
      {/* Occupation */}
      <View style={styles.Secondcard}>
        <Text style={styles.heading}>Occupation</Text>
        <OptionButton label="Student" isSelected={checkedItems.includes('Student')} onPress={() => handlePress('Student')} />
        <OptionButton label="Professional" isSelected={checkedItems.includes('Professional')} onPress={() => handlePress('Professional')} />
      </View>
      {/* Smoking */}
      <View style={styles.card}>
        <Text style={styles.heading}>Smoking</Text>
        <OptionButton label="No Preference" isSelected={selectedId === 'No Preference'} onPress={() => setSelectedId('No Preference')} isRadio />
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
      <Text style={{fontSize: 16, fontWeight: '500', color: 'black', margin:15}}>Nationality</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'nationality' ? null : 'nationality')}>
            <TextInput value={values.nationality} editable={false} style={styles.Ninput} />
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
        <TextInput value={values.intrest} editable={false} style={styles.Ninput} />
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
      options={['dancing', 'singing', 'cooking', 'sleeping']} 
    />
    <TouchableOpacity 
            onPress={()=>{
              applyExisting()
              navigation.navigate('NewRoommateScreen')
            }}
            style={styles.btn}>
                <Text style={{fontSize:20, fontWeight:'700', lineHeight:24, color:'#FFFFFF'}}>Next</Text>
            </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Mcontainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    width: 412,
    height: 134,
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
    marginTop:20
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
  container: {
    alignItems: 'center',
  },
  AGcard: {
    width: 384,
    height: 135,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 16,
    flexDirection: 'row',
    gap: 8,
    alignSelf: 'center',
  },
  section: {
    margin: 12,
    flexDirection: 'column',
    gap: 8,
  },
  sectionRight: {
    marginTop: 41,
    flexDirection: 'column',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F1F1F',
  },
  inputContainer: {
    flexDirection: 'column',
    gap: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F1F1F',
  },
  input: {
    width: 170,
    height: 52,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#0D0C221A',
  },
  Ninput: {
    width: 380,
    height: 52,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    marginLeft:15
  },
  marginTop: {
    marginTop: 13,
  },
  btn:{
    width:380, 
    height:54, 
    backgroundColor:'#FD7E14', 
    borderRadius:12, 
    alignSelf:'center', 
    justifyContent:'center', 
    alignItems:'center', 
    marginTop:20,
    marginBottom:20
  }
});

export default App;
