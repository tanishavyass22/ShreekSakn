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
import { useDispatch } from 'react-redux';
import { setWantedInformation } from '../../Redux/RoommateWantenSlice';
const App = () => {
  const [budget, setBudget] = useState("")
  const [selectedId, setSelectedId] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
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
       const applyWanted = () => {
           const wanted = {
             budget
           };
         
           console.log("Applying Preferences:", wanted);
           dispatch(setWantedInformation(wanted)); 
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
          <Text style={styles.text}>About your search</Text>
        </View>
      </ImageBackground>
      <View style={{width:384, height:76, flexDirection:'row', gap:10, alignSelf:'center', margin:20}}>
        <View style={{flexDirection:'column', gap:10}}>
        <Text style={styles.heading}>Budget</Text>
        <TextInput
        value={budget}
        onChangeText={setBudget}
        placeholder='0 SAR'
        placeholderTextColor={'#0D0C2252'}
         style={{width:184, height:52, borderWidth:1, borderColor:'#0D0C221A', borderRadius:12, backgroundColor:'white', elevation:5}}/>
        </View>
        <View style={{flexDirection:'column', gap:10}}>
        <Text style={styles.heading}>Rent Contract Duration</Text>
        <TextInput
        placeholder='2 years'
        placeholderTextColor={'#0D0C2252'}
         style={{width:184, height:52, borderWidth:1, borderColor:'#0D0C221A', borderRadius:12, backgroundColor:'white', elevation:5}}/>
        </View>
      </View>
        {/* RoomType */}
        <View style={styles.card}>
        <Text style={styles.heading}>Room Type</Text>
        <OptionButton label="Both" isSelected={selectedId === 'Both'} onPress={() => setSelectedId('Both')} isRadio />
        <OptionButton label="Room" isSelected={selectedId === 'Room'} onPress={() => setSelectedId('Room')} isRadio />
        <OptionButton label="En-suite" isSelected={selectedId === 'En-suite'} onPress={() => setSelectedId('En-suite')} isRadio />
      </View>
      {/* Amenities */}
      <View style={styles.card}>
        <Text style={styles.heading}>Proffered amenities</Text>
        <OptionButton label="Furnished" isSelected={checkedItems.includes('Furnished')} onPress={() => handlePress('Furnished')} />
        <OptionButton label="Internet" isSelected={checkedItems.includes('Internet')} onPress={() => handlePress('Internet')} />
        <OptionButton label="Common Living Area" isSelected={checkedItems.includes('Common Living Area')} onPress={() => handlePress('Common Living Area')} />
      </View>
    <TouchableOpacity 
            onPress={()=>{
              applyWanted()
              navigation.navigate('WantedAvailScreen')
            }}
            style={{width:380, height:54, backgroundColor:'#FD7E14', borderRadius:12, alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop:230, marginBottom:20}}>
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
    height: 158,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 2,
    marginTop: 15,
    borderRadius: 16,
    padding: 20,
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
