import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import AgeModal from './AgeModal';
import CheckedBox from '../../assets/images/checked_box.svg';
import UncheckedBox from '../../assets/images/unchecked_box.svg';
import Dropdown from './SecondDropdown';

const EditScreen = ({ route, navigation }) => {
  const { userInfo, updateUserInfo } = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [formData, setFormData] = useState({
    firstName: userInfo?.firstName || '',
    lastName: userInfo?.lastName || '',
    email: userInfo?.email || '',
    phoneNumber: userInfo?.phoneNumber || '',
    birthdate: userInfo?.birthdate || '',
    nationality: userInfo?.nationality || '',
    occupation: userInfo?.occupation || '',
    language: userInfo?.language || '',
    status: userInfo?.status || '',
    gender: userInfo?.gender || 'N/A',
  });

  const options = {
    nationality: ['USA', 'India', 'Canada', 'UK'],
    occupation: ['Software Engineer', 'Teacher', 'Student', 'Entrepreneur'],
    language: ['Hindi', 'English', 'French', 'Japanese'],
    status: [
      'I’m looking for a room or house share.',
      'I have a room or house share.',
      'I’d like to find people to form a new share.',
    ],
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    updateUserInfo(formData);
    navigation.goBack();
  };

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={styles.container}>
      <ImageBackground source={require('../../assets/images/Frame.png')} style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <TouchableOpacity style={styles.orangeBox} onPress={() => navigation.goBack()}>
            <ArrowLeft width={24} height={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.Maintext}>Edit Information</Text>
        </View>
      </ImageBackground>

      <View style={styles.imgBox}>
        <Image source={require('../../assets/images/lady.png')} style={styles.image} />
        <TouchableOpacity style={styles.penContainer}>
          <Image source={require('../../assets/images/penIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {['firstName', 'lastName', 'email', 'phoneNumber'].map((field, index) => (
        <View key={index}>
          <Text style={styles.label}>
            {field.replace(/([A-Z])/g, ' $1').trim()} <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={formData[field]}
            onChangeText={text => handleChange(field, text)}
            keyboardType={field === 'email' ? 'email-address' : 'default'}
          />
        </View>
      ))}
      <Text style={styles.label}>Date of Birth <Text style={styles.required}>*</Text></Text>
      <View style={styles.dob}>
        <TextInput
          style={styles.input}
          value={formData.birthdate}
          onChangeText={text => handleChange('birthdate', text)}
          keyboardType="default"
        />
        <TouchableOpacity
          style={styles.calenderView}
          onPress={() => setIsModalVisible(true)}
        >
          <Image source={require('../../assets/images/calendar.png')} style={styles.icon} />
        </TouchableOpacity>
        <AgeModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onDateSelect={date => handleChange('birthdate', date)}
        />
      </View>
      <View style={styles.genderVieww}>
        {['Male', 'Female'].map((gender, index) => (
          <View key={index} style={styles.genderBox}>
            <TouchableOpacity style={styles.Checkbox} onPress={() => handleChange('gender', gender)}>
              {formData.gender === gender ? <CheckedBox width={20} height={20} fill="white" /> : <UncheckedBox width={20} height={20} fill="white" />}
            </TouchableOpacity>
            <Text style={styles.ling}>{gender}</Text>
            <Image source={gender === 'Male' ? require('../../assets/images/Male.png') : require('../../assets/images/Female.png')} style={styles.img} />
          </View>
        ))}
      </View>
      {Object.entries(options).map(([key, values]) => (
        <View key={key}>
          <Text style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)} <Text style={styles.required}>*</Text></Text>
          <Dropdown
            data={values}
            selectedValue={formData[key]}
            onValueChange={value => handleChange(key, value)}
            placeholder={`Select ${key}`}
            placeholderColor="#FFFFFFB2"
          />
        </View>
      ))}

      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text style={styles.btnTxt}>Save</Text>
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
    alignSelf: 'center',
    width: 415,
    height: 180,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
  },
  Maintext: {
    fontSize: 20,
    color: '#FD7E14',
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
  imgBox: {
    alignSelf: 'center',
    marginTop: -80,
    position: 'relative',
  },
  image: {
    width: 149,
    height: 149,
  },
  penContainer: {
    position: 'absolute',
    bottom: -2,
    right: 1,
  },
  icon: {
    width: 25,
    height: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0D0C22',
    marginTop: 15,
    lineHeight: 16.41,
    marginLeft: 15,
  },
  required: {
    color: 'red',
  },
  input: {
    width: 386,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 7,
    borderColor: '#0D0C221A',
    borderWidth: 1,
    marginLeft: 15,
    paddingHorizontal: 15,
    color: '#000000',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 386,
    height: 52,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginTop: 7,
    marginLeft: 15,
    paddingHorizontal: 10,
    position: 'relative',
  },
  logoInsideInput: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 5,
  },
  helloTextInsideInput: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    marginRight: 5,
  },
  phoneInput: {
    flex: 1,
    height: '100%',
    color: '#000000',
  },
  arrowIconInsideInput: {
    marginLeft: 5,
    marginRight: 10,
  },
  line: {
    width: 1,
    height: 25,
    backgroundColor: '#0D0C221A',
    marginHorizontal: 7,
  },
  dob: {
    flexDirection: 'row',
  },
  calenderView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 36,
    backgroundColor: '#FD7E141A',
    marginLeft: -50,
    marginTop: 16,
    borderRadius: 8,
  },
  genderVieww: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  genderBox: {
    width: 180,
    height: 89,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  Checkbox: {
    width: 22,
    height: 22,
    backgroundColor: '#FD7E14',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ling: {
    marginTop: 25,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 16.41,
    color: '#1F1F1F',
  },
  img: {
    width: 112,
    height: 80,
    marginLeft: 55,
    marginTop: -67,
  },
  btn:{
    width:384,
    height:54,
    borderRadius:12,
    backgroundColor:'#FD7E14',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:25,
    marginBottom:50
  },
  btnTxt:{
    color:'white',
    fontSize:20,
    fontWeight:'700',
    lineHeight:24,
    textAlign:'center'
  }
});

export default EditScreen;
