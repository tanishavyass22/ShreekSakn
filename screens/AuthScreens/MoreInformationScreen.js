import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckedBox from '../../assets/images/SVGs/NewChecked';
import UncheckedBox from '../../assets/images/SVGs/NewUnchecked';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import { useDispatch } from 'react-redux';
import { setUserLoggedIn } from '../../Redux/UserSlice';
import { useNavigation } from '@react-navigation/native';

const App = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { phoneNumber, firstName, lastName, gender, nationality, email, occupation, language, selectedDate, isChecked } = route.params;
  
  const [checkedState, setCheckedState] = useState(Array(8).fill(false));
  const handleCheckboxChange = (index) => {
    setCheckedState(prev => prev.map((item, i) => (i === index ? !item : item)));
  };

  const handleSubmit = () => {
    const options = ['Looking for a Room', 'Have a Room', 'Interested in New Share'];
    const selectedOptions = checkedState.slice(0, 3).map((val, i) => val && options[i]).filter(Boolean);
    if (isChecked) selectedOptions.push('');
    
    dispatch(setUserLoggedIn({
      phoneNumber, firstName, lastName, gender, nationality, email, occupation, language,
      checkedFields: selectedOptions, birthdate: isChecked ? selectedDate : '',
    }));
    setTimeout(() => {
      navigation.replace("RootStack");
    }, 500); 
  };

  const checkBoxLabels = [
    "I'm looking for a room or house share.", "I have a room or house share.", "I'd like to find people to form a new share."
  ];
  const sourceLabels = ["Social Media", "Search Engines", "Word of Mouth", "Paid Ads", "Other"]; 
  
  return (
    <ImageBackground source={require('../../assets/images/main_bg.png')} style={styles.backgroundImage} resizeMode="cover">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <TouchableOpacity 
        onPress={navigation.goBack}
        style={styles.iconView}><ArrowLeft width={24} height={24} /></TouchableOpacity>
        <View style={styles.tContainer}><Text style={styles.txt1}>Tell us a bit more about you</Text><Text style={styles.txt2}>Choose all that apply to you</Text></View>
        <View style={{width:'100%', height:165, backgroundColor:'#2D6BBB', borderRadius:12, marginTop:15, padding:8}}>
        {checkBoxLabels.map((label, index) => (
          <View style={styles.textContainer} key={index}>
            <Text style={styles.text}>{label}</Text>
            <TouchableOpacity style={styles.CheckBox} onPress={() => handleCheckboxChange(index)}>
              {checkedState[index] ? <CheckedBox width={24} height={24}/> : <UncheckedBox width={24} height={24}/>}
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
        ))}
        </View>        
        <View style={styles.smallView}><Text style={styles.smalltxt}>You'll be able to change your choices anytime from the settings screen.</Text></View>
        <Text style={styles.whereTxt}>Where Did You Hear About Us? (Optional)</Text>
        <View style={{width:'100%', height:400, backgroundColor:'#2D6BBB', borderRadius:12, marginTop:15, padding:8}}>
        {sourceLabels.map((label, index) => (
          <View style={styles.textContainer} key={index + 3}>
            <Text style={styles.text}>{label}</Text>
            <TouchableOpacity style={styles.CheckBox} onPress={() => handleCheckboxChange(index + 3)}>
              {checkedState[index + 3] ? <CheckedBox width={24} height={24}/> : <UncheckedBox width={24} height={24}/>}
            </TouchableOpacity>
            {label === 'Other' && <TextInput style={styles.inputBox} placeholder="Type here..." placeholderTextColor="#D4DEEB" />}

            <View style={styles.Secondline} />
          </View>
        ))}
        </View>   
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}><Text style={styles.btnTxt}>Submit</Text></TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    paddingHorizontal: 20,
  },
  iconView: {
    width: 46,
    height: 46,
    borderRadius: 12,
    marginLeft: 12,
    marginTop: 62,
    backgroundColor: '#FD7E14',
    justifyContent:'center',
    alignItems:'center'
  },
  tContainer: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 12,
  },
  txt1: {
    fontSize: 28,
    fontWeight: '500',
    color: '#FD7E14',
    lineHeight: 32.81,
  },
  txt2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#D4DEEB',
    lineHeight: 22,
    marginTop: 3,
  },
  box1: {
    width: 375,
    height: 165,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF38',
    backgroundColor: '#2D6BBB',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'column',
    paddingVertical: 10,
  },
  textContainer: {
    marginVertical: 5,
    alignItems: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginLeft: 12,
    lineHeight: 18.75,
  },
  Mediatext: {
    color: 'white',
    fontSize: 16,
    marginLeft: 12,
    lineHeight: 18.75,
    marginTop: 10,
  },
  line: {
    width: 352,
    height: 1,
    backgroundColor: '#5B8CCA',
    marginTop: 15,
    alignSelf: 'center',
  },
  smallView: {
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 5,
  },
  smalltxt: {
    fontSize: 14,
    fontWeight: 400,
    color: '#FFFFFF',
    lineHeight: 22,
  },
  whereTxt: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 18.75,
    color: '#FFFFFF',
    marginTop: 22,
    marginLeft: 5,
  },
  secondBox: {
    width: 370,
    height: 430,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF38',
    backgroundColor: '#2D6BBB',
    alignSelf: 'center',
    marginTop: 10,
  },
  Secondline: {
    width: 352,
    height: 1,
    backgroundColor: '#5B8CCA',
    marginTop: 25,
    marginBottom: 3,
    alignSelf: 'center',
  },
  inputBox: {
    width: 352,
    height: 90,
    borderRadius: 10,
    borderColor: '#FFFFFF38',
    borderWidth: 1,
    backgroundColor: '#1C5298',
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'left',
    textAlignVertical: 'top',
    paddingLeft: 10,
    paddingTop: 6,
    marginTop: 15,
  },
  btn: {
    width: 370,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#FD7E14',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  CheckBox: {
    marginLeft: 318,
    marginTop: -20,
  },
});
export default App;
