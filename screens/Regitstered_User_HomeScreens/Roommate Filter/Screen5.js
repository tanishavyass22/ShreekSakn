import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowLeft from '../../../assets/images/arrow-left.svg';
import Occupation from '../../../assets/images/room filter icons/occupation.svg';
import RadioChecked from '../../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../../assets/images/radioUnchecked.svg';
import { useDispatch } from 'react-redux';
import { setRoommateFilters } from '../../../Redux/RoommatefilterSlice'

const App = () => {
  const navigation = useNavigation();
  const [RoommateOccupation, setRoommateOccupation] = useState('');
  const dispatch = useDispatch();
                  const applyRoommateFilters = () => {
                     const Roommatefilters = {
                       RoommateOccupation
                     };
                   
                     console.log("Applying Filters:", Roommatefilters);
                     dispatch(setRoommateFilters(Roommatefilters));
                     navigation.goBack(); 
                   };

  const options = ["No Preference", "Student", "Professional"];

  return (
    <View style={styles.Maincontainer}>
      <ImageBackground source={require('../../../assets/images/Frame.png')} style={styles.backgroundImage}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.orangeBox}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.text}>Occupation</Text>
        </View>
      </ImageBackground>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Occupation/>
          </View>
          <View>
            <Text style={styles.title}>Occupation</Text>
            <Text style={styles.selectedText}>{RoommateOccupation}</Text>
          </View>
        </View>

        {options.map(option => (
          <View key={option} style={styles.optionRow}>
            <Text style={styles.optionText}>{option}</Text>
            <TouchableOpacity onPress={() => setRoommateOccupation(option)}>
              {RoommateOccupation === option ? <RadioChecked /> : <RadioUnchecked />}
            </TouchableOpacity>
          </View>
        ))}
      </View>
       <View style={{width:428, height:80, borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'white', elevation:10, marginTop:490,overflow: 'visible', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:15, marginLeft:-5}}>
              <TouchableOpacity 
               onPress={()=>{
                setRoommateOccupation('')
               }}
              style={{width:183, height:52, borderRadius:12, borderWidth:1, borderColor:'#6C757D',justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontSize:16, fontWeight:'500',lineHeight:20, color:'#6C757D'}}>Reset</Text>
               </TouchableOpacity>
              <TouchableOpacity 
              onPress={applyRoommateFilters}
              style={{width:183, height:52, borderRadius:12, backgroundColor:'#FD7E14',justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontSize:16, fontWeight:'500',lineHeight:20, color:'#FFFFFF'}}>Apply</Text>
              </TouchableOpacity>
             </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: { flex: 1, backgroundColor: 'white' },
  backgroundImage: {
    width: '100%', height: 134, resizeMode: 'cover', overflow: 'hidden',
    alignSelf: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20
  },
  header: { flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 15 },
  text: { color: '#FD7E14', fontSize: 20, fontWeight: '500', marginLeft: 15 },
  orangeBox: { width: 46, height: 46, borderRadius: 12, backgroundColor: '#FD7E14', justifyContent: 'center', alignItems: 'center' },
  card: { width: 384, borderRadius: 16, backgroundColor: 'white', elevation: 3, alignSelf: "center", marginTop: 15, padding: 15 },
  row: { flexDirection: 'row', alignItems: 'center' },
  iconContainer: { width: 42, height: 42, borderRadius: 12, backgroundColor: '#FD7E141A', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  title: { fontSize: 16, fontWeight: '500', color: 'black' },
  selectedText: { fontSize: 14, fontWeight: '400', color: '#FD7E14' },
  optionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  optionText: { fontSize: 16, fontWeight: '400', color: 'black' }
});

export default App;
