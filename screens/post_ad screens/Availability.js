import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';
import DropdownIcon from '../../assets/images/dropdownicon.svg';
import CalendarIcon from '../../assets/images/SVGs/calendar.svg';
import Checked from '../../assets/images/myAcc_images/checked';
import Unchecked from '../../assets/images/myAcc_images/unchecked';
import Header from '../../Components/UiComponents/Header';
const Dropdown = ({isVisible, setDropdownVisible, onSelect}) =>
  isVisible && (
    <View style={styles.dropdownContainer}>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        {Array.from({length: 10}, (_, i) => (i + 1).toString()).map(item => (
          <TouchableOpacity
            key={item}
            style={styles.dropdownItem}
            onPress={() => {
              onSelect(item);
              setDropdownVisible(null);
            }}>
            <Text style={styles.dropdownText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [values, setValues] = useState({days: '', minStay: '', maxStay: ''});
  const [selectedDate, setSelectedDate] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const navigation = useNavigation();

  const handleSelect = (field, value) =>
    setValues(prev => ({...prev, [field]: value}));

  const toggleDropdown = field =>
    setActiveDropdown(activeDropdown === field ? null : field);

  const onDateSelect = date => {
    setSelectedDate(date.dateString);
    setIsCalendarVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Availability" onBackPress={() => navigation.goBack()} />
      <View style={styles.formContainer}>
        {[
          {label: 'Days Available', field: 'days'},
          {label: 'Minimum Stay', field: 'minStay'},
          {label: 'Maximum Stay', field: 'maxStay'},
        ].map(({label, field}) => (
          <View key={field}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity onPress={() => toggleDropdown(field)}>
              <TextInput
                value={values[field]}
                editable={false}
                style={styles.input}
              />
            </TouchableOpacity>
            <DropdownIcon width={14} height={13} style={styles.icon} />
            <Dropdown
              isVisible={activeDropdown === field}
              setDropdownVisible={setActiveDropdown}
              onSelect={value => handleSelect(field, value)}
            />
          </View>
        ))}
        <Text style={styles.label}>Available From</Text>
        <TouchableOpacity onPress={() => setIsCalendarVisible(true)} style={{flexDirection:'row'}}>
          <TextInput
            value={selectedDate}
            style={styles.input}
            editable={false}
          />
         <View style={{width:36, height:36, backgroundColor:'#FD7E141A', borderRadius:8, justifyContent:'center', alignItems:'center', marginLeft:-40, alignSelf:'center'}}>
        <CalendarIcon/>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.shortTermView}>
        <CalendarIcon />
        <Text style={styles.shortTermText}>Short term lets considered</Text>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          {isChecked ? <Checked style={{marginLeft: 90}}/> : <Unchecked style={{marginLeft: 90}}/>}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ExistingRoommateScreen')}
        style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <Modal
        visible={isCalendarVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsCalendarVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={onDateSelect}
              markedDates={{
                [selectedDate]: {selected: true, selectedColor: 'blue'},
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsCalendarVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  backgroundImage: {
    width: '100%',
    height: 134,
    resizeMode: 'cover',
    overflow: 'hidden',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {flexDirection: 'row', alignItems: 'center', padding: 15, marginTop:30},
  orangeBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#FD7E14',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#FD7E14', fontSize: 20, fontWeight: '500', marginLeft: 15},
  formContainer: {margin: 20, gap: 15},
  label: {fontSize: 14, fontWeight: '500', color: 'black'},
  input: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  icon: {position: 'absolute', right: 15, top: 40},
  calendarIcon: {position: 'absolute', right: 15, top: 10},
  dropdownContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 14,
    maxHeight: 200,
    overflow: 'hidden',
  },
  dropdownItem: {paddingVertical: 10, paddingHorizontal: 15},
  dropdownText: {fontSize: 16, color: 'black'},
  shortTermView: {
    width: 384,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 14,
    alignSelf: 'center',
    padding: 10,
    marginVertical: 10,
    gap: 5,
    marginTop:220,
    marginBottom:25
  },
  shortTermText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F1F1F',
    marginLeft: 10,
  },
  nextButton: {
    width: '90%',
    height: 54,
    backgroundColor: '#FD7E14',
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {fontSize: 20, fontWeight: '700', color: '#FFFFFF'},
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
  closeButtonText: {color: '#fff', fontSize: 16},
});

export default App;
