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
const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId3, setSelectedId3] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);
 
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
          <Text style={styles.text}>Roommate Preference</Text>
        </View>
      </ImageBackground>
          {/* Gender */}
           <View style={styles.card}>
             <Text style={styles.heading}>Gender</Text>
             <OptionButton label="No Preference" isSelected={selectedId2 === 'No Preference'} onPress={() => setSelectedId2('No Preference')} isRadio />
             <OptionButton label="Male" isSelected={selectedId2 === 'Male'} onPress={() => setSelectedId2('Male')} isRadio />
             <OptionButton label="Female" isSelected={selectedId2 === 'Female'} onPress={() => setSelectedId2('Female')} isRadio />
           </View>
     
           {/* Occupation */}
           <View style={styles.card}>
             <Text style={styles.heading}>Occupation</Text>
             <OptionButton label="No Preference" isSelected={selectedId3 === 'No Preference'} onPress={() => setSelectedId3('No Preference')} isRadio />
             <OptionButton label="Student" isSelected={selectedId3 === 'Student'} onPress={() => setSelectedId3('Student')} isRadio />
             <OptionButton label="Professional" isSelected={selectedId3 === 'Professional'} onPress={() => setSelectedId3('Professional')} isRadio />
           </View>
           <View
             style={{
               width: 384,
               height: 135,
               backgroundColor: 'white',
               elevation: 2,
               borderRadius: 16,
               alignSelf: 'center',
               flexDirection: 'row',
               gap: 8,
               marginTop: 15,
             }}>
             <View style={{margin: 12, flexDirection: 'column', gap: 8}}>
               <Text style={{fontSize: 16, fontWeight: '500', color: '#1F1F1F'}}>
                 Age
               </Text>
               <View style={{flexDirection: 'column', gap: 5}}>
                 <Text style={{fontSize: 14, fontWeight: '500', color: '#1F1F1F'}}>
                   Minimum
                 </Text>
                 <TextInput
                   placeholder="18 year"
                   placeholderTextColor={'#0D0C2252'}
                   keyboardType="number-pad"
                   style={{
                     width: 170,
                     height: 52,
                     borderRadius: 12,
                     backgroundColor: 'white',
                     elavation: 3,
                     borderWidth: 1,
                     borderColor: '#0D0C221A',
                   }}
                 />
               </View>
             </View>
             <View style={{marginTop: 41, flexDirection: 'column', gap: 8}}>
               <View style={{flexDirection: 'column', gap: 5}}>
                 <Text style={{fontSize: 14, fontWeight: '500', color: '#1F1F1F'}}>
                   Maximum
                 </Text>
                 <TextInput
                   placeholder="99 year"
                   placeholderTextColor={'#0D0C2252'}
                   keyboardType="number-pad"
                   style={{
                     width: 170,
                     height: 52,
                     borderRadius: 12,
                     backgroundColor: 'white',
                     elavation: 3,
                     borderWidth: 1,
                     borderColor: '#0D0C221A',
                   }}
                 />
               </View>
             </View>
           </View>
           {/* Smoking */}
           <View style={styles.card}>
             <Text style={styles.heading}>Smoking</Text>
             <OptionButton label="No Preference" isSelected={selectedId === 'No Preference'} onPress={() => setSelectedId('No Preference')} isRadio />
             <OptionButton label="Smoker" isSelected={selectedId === 'Smoker'} onPress={() => setSelectedId('Smoker')} isRadio />
             <OptionButton label="Non-Smoker" isSelected={selectedId === 'Non-Smoker'} onPress={() => setSelectedId('Non-Smoker')} isRadio />
           </View>
    <TouchableOpacity 
            onPress={()=>{
              navigation.navigate('WantedLocationScreen')
            }}
            style={{width:380, height:54, backgroundColor:'#FD7E14', borderRadius:12, alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop:130, marginBottom:20}}>
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
    padding: 15,
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
});

export default App;
