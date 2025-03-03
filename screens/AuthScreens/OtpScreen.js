import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { ArrowLeft } from '../../Constants/Icon';
import Images from '../../Constants/Images';
import fonts from '../../Constants/Fonts';
const OTPVerification = ({ route,navigation }) => { 
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60); 
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputs = useRef([]); 

  // Countdown logic(yt)
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false); 
    }
  }, [timer]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (nativeEvent, index) => {
    if (nativeEvent.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        inputs.current[index - 1].focus();
        const newOtp = [...otp];
        newOtp[index - 1] = ''; 
        setOtp(newOtp);
      } else {
        const newOtp = [...otp];
        newOtp[index] = ''; 
        setOtp(newOtp);
      }
    }
  };
  const handleVerify = () => {
    console.log('Verifying OTP:', otp.join('')); 
    navigation.navigate('Registration', { phoneNumber });  
  };

  const handleResend = () => {
    console.log('Resending OTP');
    setTimer(60); 
    setIsResendDisabled(true);
  };
  const isVerifyButtonDisabled = otp.some((digit) => digit === '');

  return (
    <ImageBackground
      source={Images.background} 
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.arrowContainer}>
            <ArrowLeft  style={styles.svgIcon}/> 
          </TouchableOpacity>
          <View style={{marginTop:15, marginBottom:15}}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>
            Enter the code sent to your phone to verify your account.
          </Text>
          </View>
          <View style={styles.otpContainer}>
            {otp.map((_, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputs.current[index] = el)} 
                style={styles.otpInput}
                maxLength={1}
                color="white"
                selectionColor="#ffffff"
                keyboardType="number-pad"
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent, index)}
                value={otp[index]}
              />
            ))}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>
              {timer > 0 ? `${timer}s` : ''}
            </Text>
          </View>
          <Text style={styles.resendText}>
            Didn't get any code?{' '}
            <TouchableOpacity
              onPress={handleResend}
              disabled={isResendDisabled} 
            >
              <Text
                style={[styles.resendButtonText, isResendDisabled && { color: '#808080' }]}>
                Resend
              </Text>
            </TouchableOpacity>
          </Text>
          <TouchableOpacity
            style={[
              styles.verifyButton,
              isVerifyButtonDisabled && { backgroundColor: '#808080' }, 
            ]}
            onPress={handleVerify}
            disabled={isVerifyButtonDisabled} 
          >
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 10, 
  },
  topContainer: {
    marginTop: 70,
  },
  arrowContainer: {
    width: 46,
    height: 46,
    backgroundColor: '#FD7E14',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -10
  },
  svgIcon: {
    width: 24,               
    height: 24,              
    color: '#FFFFFF',       
  },
    
  title: {
    fontFamily:fonts.Roboto_Medium,
    fontSize: 28,
    //fontWeight: '500',
    color: '#FD7E14',
    marginBottom: 10,
    marginLeft: 1,
  },
  subtitle: {
    fontFamily:fonts.Roboto_Regular,
    fontSize: 16,
    color: '#D4DEEB',
    //fontWeight: '400',
    marginBottom: 20,
    marginLeft: 1,
  },
  otpContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 20,
  },
  otpInput: {
    width: 66,
    height: 68,
    borderWidth: 1,
    borderColor: '#FFFFFF38',
    borderRadius: 12,
    fontSize: 36,
    fontFamily:fonts.Roboto_Bold,
    backgroundColor:"#2D6BBB",
    color: '#FFFFFF',
    textAlign: 'center',
    marginHorizontal: 8,
  },
  bottomContainer: {
    marginBottom: 30,
  },
  timerContainer: {
    alignItems: 'flex-end',
    marginBottom: 1,
  },
  timerText: {
    fontFamily:fonts.Roboto_Regular,
    color: '#FD7E14',
    fontSize: 16,
    //fontWeight: '400',
    marginBottom:-25
  },
  resendText: {
    fontFamily:fonts.Roboto_Regular,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
    marginLeft: 22,
    //fontWeight: '400',
  },
  resendButtonText: {
    fontFamily:fonts.Roboto_Medium,
    color: '#FD7E14',
    fontSize: 16,
    //fontWeight: '500',
    marginLeft: 2,
    marginBottom: -5,
    textDecorationLine: 'underline',
    textDecorationColor: '#FD7E14',
    textDecorationStyle: 'solid',
    textDecorationThickness: 2,
  },
  verifyButton: {
    width: '100%',
    height: 54,
    backgroundColor: '#FD7E14',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },
  verifyButtonText: {
    fontFamily:fonts.Roboto_Bold,
    color: '#FFFFFF',
    fontSize: 20,
    //fontWeight: 'bold',
  },
});
export default OTPVerification;
