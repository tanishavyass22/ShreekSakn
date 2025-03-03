import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import DropdownIcon from '../../assets/images/dropdownicon.svg';
import CalendarIcon from '../../assets/images/SVGs/calendar.svg';
import {Calendar} from 'react-native-calendars';

const CustomDropdown = ({ isVisible, setDropdownVisible, onSelect }) => {
  const numbers = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  return (
    isVisible && (
      <View style={styles.dropdownContainer}>
        <View style={styles.dropdownMenu}>
          <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
            {numbers.map((item) => (
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
  const [isChecked, setIsChecked] = useState(false); 
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [values, setValues] = useState({ days: '', minStay: '', maxStay: '' });

  const handleSelect = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  }
  const [selectedDate, setSelectedDate] = useState('');
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  
    const openCalendar = () => {
      setIsCalendarVisible(true);
    };
  
    const closeCalendar = () => {
      setIsCalendarVisible(false);
    };
  
    const onDateSelect = date => {
      setSelectedDate(date.dateString);
      closeCalendar();
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
          <Text style={styles.text}>Availability</Text>
        </View>
      </ImageBackground>
      <View style={{margin: 20, gap: 15}}>
  <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>Days Available</Text>
  <View style={{flexDirection: 'row'}}>
    <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'days' ? null : 'days')}>
      <TextInput value={values.days} editable={false} style={styles.input} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'days' ? null : 'days')}>
      <DropdownIcon
        width={14}
        height={13}
        color="black"
        style={{marginLeft: -25, marginTop: 20}}
      />
    </TouchableOpacity>
  </View>
  <CustomDropdown
    isVisible={activeDropdown === 'days'}
    setDropdownVisible={setActiveDropdown}
    onSelect={(value) => handleSelect('days', value)}
  />

  <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>Available From</Text>
  <View style={{flexDirection: 'row'}}>
    <TouchableOpacity onPress={openCalendar}>
      <TextInput value={selectedDate} style={styles.input} />
    </TouchableOpacity>
    <TouchableOpacity onPress={openCalendar}>
      <View
        style={{
          width: 36,
          height: 36,
          backgroundColor: '#FD7E141F',
          marginLeft: -45,
          marginTop: 9,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CalendarIcon />
      </View>
    </TouchableOpacity>
  </View>

  <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>Minimum Stay</Text>
  <View style={{flexDirection: 'row'}}>
    <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'minStay' ? null : 'minStay')}>
      <TextInput value={values.minStay} editable={false} style={styles.input} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'minStay' ? null : 'minStay')}>
      <DropdownIcon
        width={14}
        height={13}
        color="black"
        style={{marginLeft: -25, marginTop: 20}}
      />
    </TouchableOpacity>
  </View>
  <CustomDropdown
    isVisible={activeDropdown === 'minStay'}
    setDropdownVisible={setActiveDropdown}
    onSelect={(value) => handleSelect('minStay', value)}
  />

  <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>Maximum Stay</Text>
  <View style={{flexDirection: 'row'}}>
    <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'maxStay' ? null : 'maxStay')}>
      <TextInput value={values.maxStay} editable={false} style={styles.input} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setActiveDropdown(activeDropdown === 'maxStay' ? null : 'maxStay')}>
      <DropdownIcon
        width={14}
        height={13}
        color="black"
        style={{marginLeft: -25, marginTop: 20}}
      />
    </TouchableOpacity>
  </View>
  <CustomDropdown
    isVisible={activeDropdown === 'maxStay'}
    setDropdownVisible={setActiveDropdown}
    onSelect={(value) => handleSelect('maxStay', value)}
  />
</View>
        <TouchableOpacity 
        onPress={()=>{
          navigation.navigate('RoommatePreferenceScreen')
        }}
        style={{width:380, height:54, backgroundColor:'#FD7E14', borderRadius:12, alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop:260}}>
            <Text style={{fontSize:20, fontWeight:'700', lineHeight:24, color:'#FFFFFF'}}>Next</Text>
        </TouchableOpacity>
      <Modal
        visible={isCalendarVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeCalendar}>
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={onDateSelect}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: 'blue',
                },
              }}
            />
            <TouchableOpacity style={styles.closeButton} onPress={closeCalendar}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  input: {
    width: '380',
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownMenu: {
    marginTop: 1,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    maxHeight: 200, 
    overflow: 'hidden',
    borderRadius:14
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
  },
  svgIcon: {
    width: 22,
    height: 22,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#FFFFFFB2',
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  calendarContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
