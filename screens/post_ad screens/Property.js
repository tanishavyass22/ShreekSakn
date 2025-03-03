import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setExistingRoommate } from '../../Redux/ExistingRoommateSlice';
import InfoModal from './InfoModal';
import RadioChecked from '../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../assets/images/radioUnchecked.svg';
import DropdownIcon from '../../assets/images/dropdownicon.svg';
import Checked from '../../assets/images/myAcc_images/checked';
import Unchecked from '../../assets/images/myAcc_images/unchecked';
import Header from '../../Components/UiComponents/Header';
const CustomDropdown = ({ label, showBoxes, onSelectValue }) => {
  const navigation = useNavigation(); 
    const [selectedValue, setSelectedValue] = useState('');
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const numbers = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
    const [boxCount, setBoxCount] = useState(0);

    const handleSelect = (item) => {
        setSelectedValue(item);
        setBoxCount(Number(item));
        setDropdownVisible(false);
        console.log(`${label}: ${item}`);  
        onSelectValue(item); 
    };

    
    const renderBoxes = () => {
        return Array.from({ length: boxCount }, (_, index) => (
            <View
                key={index}
                style={{
                    width: 384,
                    height: 52,
                    backgroundColor: 'white',
                    elevation:3,
                    margin: 10,
                    borderRadius:14,
                }}
            >     
            <View style={{flexDirection:'row', gap:230, margin:8}}>
            <Text style={{fontSize:16, fontWeight:'500'}}>Room {index + 1}</Text>
            <TouchableOpacity  onPress={()=>{
            navigation.navigate('RoomForRentScreen')
          }}>
            <Text style={{fontSize:14, fontWeight:'400', color:'#FD7E14'}}>Add info</Text>
            </TouchableOpacity>
            </View>
            </View>
        ));
    };

    return (
        <View style={styles.dropdownContainer}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity
                style={styles.inputWrapper}
                onPress={() => setDropdownVisible(!isDropdownVisible)}>
                <TextInput
                    style={styles.input}
                    value={selectedValue}
                    editable={false}
                />
                <DropdownIcon width={12} height={12} />
            </TouchableOpacity>

            {isDropdownVisible && (
                <View style={styles.dropdownMenu}>
                    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                        {numbers.map((item, index) => (
                            <TouchableOpacity
                                key={item}
                                style={styles.dropdownItem}
                                onPress={() => handleSelect(item)}>
                                <Text style={styles.dropdownText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )}
            {showBoxes && (
                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                    {renderBoxes()}
                </View>
            )}
        </View>
    );
};
const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [bedrooms, setBedrooms] = useState(""); 
  const [bathrooms, setBathrooms] = useState("");
  const [bathroomsAvail, setBathroomsAvail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [checkedAmenities, setCheckedItems] = useState([]);

  const handlePress = item => {
    setCheckedItems(prevItems =>
      prevItems.includes(item)
        ? prevItems.filter(i => i !== item)
        : [...prevItems, item],
    );
  };

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const navigation = useNavigation();
   const dispatch = useDispatch();
       const applyExisting = () => {
           const existing = {
             bedrooms,
             bathrooms,
             checkedAmenities,
           };
         
           console.log("Applying Preferences:", existing);
           dispatch(setExistingRoommate(existing)); 
         };

  return (
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
    <Header title="Property" onBackPress={() => navigation.goBack()} />
    <View style={styles.card}>
      <Text style={styles.heading}>Property Type</Text>

      <TouchableOpacity style={styles.option} onPress={() => setSelectedId('apartment')}>
        <Text>Apartment</Text>
        {selectedId === 'apartment' ? <RadioChecked /> : <RadioUnchecked />}
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => setSelectedId('house')}>
        <Text>House</Text>
        {selectedId === 'house' ? <RadioChecked /> : <RadioUnchecked />}
      </TouchableOpacity>
    </View>
    <View style={{ margin: 15 }}>
      <CustomDropdown label="Total Number of Bedrooms" showBoxes={false} onSelectValue={setBedrooms}/>
      <CustomDropdown label="Number of Bathrooms" showBoxes={false} onSelectValue={setBathrooms} />
    </View>

    <View style={styles.Secondcard}>
      <Text style={styles.heading}>Amenities</Text>

      <TouchableOpacity style={styles.option} onPress={() => handlePress('Wi-Fi')}>
        <Text>Wi-Fi</Text>
        {checkedAmenities.includes('Wi-Fi') ? <Checked /> : <Unchecked />}
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handlePress('shared living room')}>
        <Text>Shared Living room</Text>
        {checkedAmenities.includes('shared living room') ? <Checked /> : <Unchecked />}
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handlePress('shared Kitchen')}>
        <Text>Shared Kitchen</Text>
        {checkedAmenities.includes('shared Kitchen') ? <Checked /> : <Unchecked />}
      </TouchableOpacity>
    </View>
    <View style={{ margin: 15 }}>
      <CustomDropdown label="Number of bedrooms available" showBoxes={true} onSelectValue={setBathroomsAvail} />
    </View>
    <TouchableOpacity 
    onPress={()=>{
      applyExisting()
    }}
        style={{width:384, height:54, borderRadius:12, backgroundColor:'#FD7E14', justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:-20}}
        >
            <Text style={{fontSize:20, fontWeight:'700', lineHeight:24, color:'#FFFFFF'}}>Next</Text>
        </TouchableOpacity>
    <InfoModal visible={modalVisible} onClose={() => setModalVisible(false)} />
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  card: {
    width: 384,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 2,
    marginTop: 20,
    borderRadius: 16,
    padding: 16,
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
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#0D0C221A',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: 52,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 45,
    color: '#000',
  },
  dropdownMenu: {
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    maxHeight: 150,
    elevation: 2,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  Secondcard: {
    width: 384,
    height: 156,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 2,
    marginTop: -15,
    borderRadius: 16,
    padding: 10,
  },
});

export default App;
