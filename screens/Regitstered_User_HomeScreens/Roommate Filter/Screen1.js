import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native';
import ArrowLeft from '../../../assets/images/arrow-left.svg';
import { useNavigation } from '@react-navigation/native';
import Availability from '../../../assets/images/room filter icons/availability.svg';
import {Calendar} from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { setRoommateFilters } from '../../../Redux/RoommatefilterSlice'


const App = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
   const [RoommateselectedDate, setRoommateSelectedDate] = useState('');
   const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    
      const openCalendar = () => {
        setIsCalendarVisible(true);
      };
    
      const closeCalendar = () => {
        setIsCalendarVisible(false);
      };
    
      const onDateSelect = date => {
        setRoommateSelectedDate(date.dateString);
        closeCalendar();
      };
      const dispatch = useDispatch();
             const applyRoommateFilters = () => {
                const Roommatefilters = {
                  RoommateselectedDate
                };
              
                console.log("Applying Filters:", Roommatefilters);
                dispatch(setRoommateFilters(Roommatefilters));
                navigation.goBack(); 
              };
  return (
    <View style={styles.Maincontainer}>
      <ImageBackground source={require('../../../assets/images/Frame.png')} style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Availability</Text>
        </View>
      </ImageBackground>
      <View style={{width:384, height:136, borderRadius:16, backgroundColor:'white', elevation:2, alignSelf:'center', marginTop:10, flexDirection:'column'}}>
        <View style={{flexDirection:'row', margin:10}}>
          <TouchableOpacity
          style={styles.iconContainer}>
          <Availability/>
          </TouchableOpacity>
          <View style={{flexDirection:'column', marginLeft:10}}>
          <Text style={{fontSize:16, fontWeight:'500', lineHeight:20, color:'black'}}>Availability</Text>
          <Text style={{fontSize: 14,fontWeight: '400', lineHeight: 20, color: '#FD7E14',}}>{RoommateselectedDate}</Text>
          </View>
          
        </View>
        <View>
          <TouchableOpacity
                    onPress={openCalendar} 
          style={{width:356, height:52, borderRadius:12, borderWidth:1,borderColor:'#0D0C221A', alignSelf:'center', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:8}}>
                  <Text style={{fontSize:15, fontWeight:'400', lineHeight:20, color:'black'}}>{RoommateselectedDate}</Text>
                  <View style={styles.iconContainer}>
                      <Availability/>
                  </View>
                  </TouchableOpacity>
        </View>
      </View>
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
                      [RoommateselectedDate]: {
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
         <View style={{width:428, height:80, borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'white', elevation:10, marginTop:520,overflow: 'visible', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:15, marginLeft:-5}}>
                <TouchableOpacity 
                onPress={()=>{
                  setRoommateSelectedDate('')
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
  Maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: 134,
    resizeMode: 'cover',
    overflow: 'hidden',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
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
    marginTop: 12,
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
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FD7E141A',
    justifyContent: 'center',
    alignItems: 'center',
    //marginRight: 10,
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
