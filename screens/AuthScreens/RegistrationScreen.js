import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Modal,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Dropdown from '../../screens/RootScreens/DropDown';
import Calender from '../../assets/images/calendar.svg';
import CheckedBox from '../../assets/images/checked_box.svg';
import UncheckedBox from '../../assets/images/unchecked_box.svg';
import fonts from '../../Constants/Fonts';

const Registration = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    nationality: '',
    email: '',
    occupation: '',
    language: '',
    selectedDate: '',
    isChecked: false,
  });
  const [emailError, setEmailError] = useState('');
  const [errors, setErrors] = useState({});
  const options = {
    gender: ['Male', 'Female', 'Other', 'Prefer not to say'],
    nationality: ['USA', 'India', 'Canada', 'UK'],
    occupation: ['Software Engineer', 'Teacher', 'Student', 'Entrepreneur'],
    language: ['Hindi', 'English', 'French', 'Japanese'],
  };

  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const handleInputChange = (key, value) => {
    if (errors[key]) {
      setErrors(prevErrors => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[key]; 
        return updatedErrors;
      });
    }
  
    if (key === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  
    setFormData(prev => ({ ...prev, [key]: value }));
  };
  

  const handleSignUp = () => {
    let newErrors = {};
    ['firstName', 'lastName', 'gender', 'nationality'].forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    console.log(formData)
    navigation.navigate('MoreInformation', {
      ...formData,
      phoneNumber,
      selectedDate: formData.isChecked ? formData.selectedDate : '',
    });
  };
  return (
    <ImageBackground source={require('../../assets/images/main_bg.png')} style={styles.backgroundImage} resizeMode="cover">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.Welcomecontainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>Sign up to get started and find your perfect room.</Text>
          <Text style={styles.registration}>Registration Information</Text>

          {['firstName', 'lastName'].map(field => (
            <View key={field}>
               <Text style={styles.label}>
              {field === 'firstName' ? 'First Name' : 'Last Name'} <Text style={styles.required}>*</Text>
            </Text>
              <TextInput style={styles.input} value={formData[field]} onChangeText={value => handleInputChange(field, value)} />
              {errors[field] ? <Text style={{color:'red', fontSize:12, fontWeight:'800'}}>{errors[field]}</Text> : null}
            </View>
          ))}

          {['gender', 'nationality'].map(field => (
            <View key={field}>
              <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)} <Text style={styles.required}>*</Text></Text>
              <Dropdown data={options[field]} selectedValue={formData[field]} onValueChange={value => handleInputChange(field, value)} placeholder={`Select ${field}`} />
              {errors[field] ? <Text style={{color:'red', fontSize:12, fontWeight:'800'}}>{errors[field]}</Text> : null}
            </View>
          ))}
        </View>
        <View style={styles.otherInfoView}>
          <Text style={styles.otherInfo}>Other Information</Text>
          {['email', 'occupation', 'language'].map(field => (
  <View key={field}>
    <Text style={styles.label}>
      {field.charAt(0).toUpperCase() + field.slice(1)}
    </Text>
    {field === 'email' ? (
      <>
        <TextInput
          style={[styles.input, emailError ? styles.errorBorder : null]}
          value={formData[field]}
          onChangeText={value => handleInputChange(field, value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={{color:'red', fontSize:12, fontWeight:'800'}}>{emailError}</Text> : null}
      </>
    ) : (
      <Dropdown 
        data={options[field]} 
        selectedValue={formData[field]} 
        onValueChange={value => handleInputChange(field, value)} 
        placeholder={`Select ${field}`} 
      />
    )}
  </View>
))}
          <Text style={styles.label}>Datee of Birth</Text>
          <View style={styles.dob}>
          <TouchableOpacity style={styles.dateInput} onPress={() => setIsCalendarVisible(true)}>
            <Text style={[styles.dateText, { color: formData.selectedDate ? 'white' : 'gray' }]}>
              {formData.selectedDate || 'Select a date'}
            </Text>
            <View style={{width:36, height:36, borderRadius:8, backgroundColor:'#FFFFFF1A', justifyContent:'center', alignItems:'center'}}>
            <Calender style={styles.svgIcon} />
            </View>
          </TouchableOpacity>
            <Text style={styles.dobTxt}>Show my age on my profile</Text>
            <TouchableOpacity style={styles.box} onPress={() => handleInputChange('isChecked', !formData.isChecked)}>
              {formData.isChecked ? <CheckedBox width={24} height={24} fill="white" /> : <UncheckedBox width={24} height={24} fill="white" />}
            </TouchableOpacity>
          </View>

          <Text style={styles.txt}>The user must be 18 years or older to use the platform.</Text>
          <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={isCalendarVisible} transparent animationType="slide" onRequestClose={() => setIsCalendarVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              minDate={'2001-01-01'}
              current={'2001-01-01'}
              onDayPress={date => {
                handleInputChange('selectedDate', date.dateString);
                setIsCalendarVisible(false);
              }}
              markedDates={{ [formData.selectedDate]: { selected: true, selectedColor: 'blue' } }}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsCalendarVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  Welcomecontainer: {
    flex: 1,
    marginTop: 80,
    flexDirection:'column',
    gap:8
  },
  title: {
    fontSize: 28,
    color: '#FD7E14',
    //fontWeight: '500',
    fontFamily:fonts.Roboto_Medium
  },
  subtitle: {
    fontSize: 16,
    //fontWeight: '400',
    color: '#D4DEEB',
    fontFamily:fonts.Roboto_Regular
  },
  registration: {
    fontFamily:fonts.Roboto_Bold,
    fontSize: 20,
    //fontWeight: '600',
    marginTop: 25,
    color: '#FFFFFF',
  },
  label: {
    fontFamily:fonts.Roboto_Medium,
    fontSize: 14,
    //fontWeight: '500',
    color: '#FFFFFF',
    marginTop: 15,
  },
  required: {
    color: 'red',
  },
  input: {
    padding:10,
    color:'white',
    width: "100%",
    height: 54,
    backgroundColor: '#2D6BBB',
    borderWidth:1,
    borderColor:'#FFFFFF38',
    borderRadius: 12,
    marginTop: 7,
  },
  otherInfoView: {
    marginTop:20,
    marginBottom: 25,
  },
  otherInfo: {
    fontSize: 20,
    //fontWeight: '600',
    fontFamily:fonts.Roboto_Bold,
    color: '#FFFFFF',
  },
  dob: {
    width: '100%',
    height: 116,
    borderRadius: 12,
    backgroundColor: '#2D6BBB',
    marginTop: 6,
  },
  // date: {
  //   width: 332,
  //   height: 52,
  //   borderWidth: 1,
  //   borderRadius: 12,
  //   borderColor: '#FFFFFFB2',
  //   marginLeft: 14,
  //   marginTop: 10,
  // },
  dobTxt: {
    fontSize: 14,
    fontFamily:fonts.Roboto_Regular,
    //fontWeight: '400',
    color: '#FFFFFF',
    marginLeft: 15,
    marginTop: 12,
  },
  svgIcon: {
    width: 22,
    height: 22,
  },
  // calContainer: {
  //   width: 36,
  //   height: 36,
  //   borderRadius: 8,
  //   backgroundColor: '#FFFFFF1A',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginLeft: 285,
  //   marginTop: 6,
  // },
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
  txt: {
    fontSize: 14,
    fontFamily:fonts.Roboto_Regular,
    //fontWeight: '400',
    color: '#FFFFFF',
    marginTop: 10,
    marginLeft: 8,
  },
  box: {
    marginLeft: 335,
    marginTop: -30,
  },
  btn: {
    alignSelf:'center',
    width: 360,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#FD7E14',
    marginTop: 35,
    marginLeft: 15,
  },
  btnTxt: {
    fontFamily:fonts.Roboto_Bold,
    //fontWeight: '700',
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Registration;