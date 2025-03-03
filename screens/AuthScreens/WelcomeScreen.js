import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowDown from '../../assets/images/arrow-down.svg';
import Images from '../../Constants/Images';
import {CountryPicker} from "react-native-country-codes-picker";
import fonts from '../../Constants/Fonts';

const PhoneNumberLogIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');

  const isValidPhoneNumber = /^\d{7,15}$/.test(phoneNumber); 
  const handleContinue = () => {
    const fullPhoneNumber = countryCode + " " + phoneNumber;
    console.log("Full Phone Number:", fullPhoneNumber);
    navigation.navigate('OtpScreen', {phoneNumber:fullPhoneNumber});
  };

  return (
    <ImageBackground
      source={Images.background}
      style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>
          Enter your phone number to receive a verification code.
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputWrapper}>
            <TouchableOpacity 
            onPress={() => setShow(true)}
            style={{flexDirection:'row'}}>
            <Image
              source={Images.phoneLogo}
              style={styles.logo}
            />
            <Text style={styles.helloText}>{countryCode}</Text>
            <ArrowDown width={20} height={20} style={styles.arrowIcon} />
            </TouchableOpacity>
            <View style={styles.line} />
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={v => {
                setPhoneNumber(v);
              }}s
              keyboardType="phone-pad"
              placeholder="51253627"
              placeholderTextColor="#FFFFFF75"
            />
          </View>
          {!isValidPhoneNumber && phoneNumber.length > 0 && (
            <Text style={{fontSize:12, fontWeight:'500', color:'red', marginTop:5}}>Enter a valid phone number</Text>
          )}
        </View>
      </View>
      <CountryPicker
        show={show}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
        style={{
          modal:{
            height:550
          },
          backdrop:{
            backgroundColor:'transparent'
          }
        }}
      />
     <TouchableOpacity 
        style={[styles.continueButton, !isValidPhoneNumber && styles.disabledButton]} 
        onPress={handleContinue} 
        disabled={!isValidPhoneNumber} 
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  contentContainer: {
    marginTop: 100,
  },
  title: {
    fontFamily:fonts.Roboto_Medium,
    fontSize: 28,
    //fontWeight: '500',
    color: '#FD7E14',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily:fonts.Roboto_Regular,
    fontSize: 16,
    color: '#D4DEEB',
    //fontWeight: '400',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontFamily:fonts.Roboto_Medium,
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 10,
    //fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D6BBB',
    borderRadius: 8,
    paddingVertical: 12,
  },
  logo: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  helloText: {
    fontFamily:fonts.Roboto_Medium,
    fontSize: 16,
    marginLeft: 8,
    color: '#FFFFFF',
    //fontWeight: '500',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#FFFFFF',
  },
  continueButton: {
    width: '100%',
    height: 54,
    backgroundColor: '#FD7E14',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  continueButtonText: {
    fontFamily:fonts.Roboto_Bold,
    fontSize: 20,
    //fontWeight: '700',
    color: '#FFFFFF',
  },
  arrowIcon: {
    marginLeft: 5,
    marginTop: 1,
  },
  line: {
    width: 1,
    height: 25,
    backgroundColor: '#3897FF',
    marginHorizontal: 7,
  },
  disabledButton:{
    backgroundColor:'grey'
  }
});

export default PhoneNumberLogIn;
