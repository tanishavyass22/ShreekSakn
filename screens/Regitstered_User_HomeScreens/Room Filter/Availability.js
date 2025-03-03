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
import { setFilters } from '../../../Redux/FilterSlice'
import ActionButtons from '../../../Components/UiComponents/ResetApplyButton';
import Header from '../../../Components/UiComponents/Header';

const App = () => {
  const navigation = useNavigation();
   const [selectedDate, setSelectedDate] = useState('');
      const [isCalendarVisible, setIsCalendarVisible] = useState(false);
      const onDateSelect = date => {
        setSelectedDate(date.dateString);
        setIsCalendarVisible(false)
      };
      const dispatch = useDispatch();
       const applyFilters = () => {
          const filters = {
            selectedDate
          };
          console.log("Applying Filters:", filters);
          dispatch(setFilters(filters));
          navigation.goBack(); 
        };
  return (
    <View style={styles.Maincontainer}>
       <Header title="Availability" onBackPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={{flexDirection:'row', margin:10}}>
          <TouchableOpacity
          style={styles.iconContainer}>
          <Availability/>
          </TouchableOpacity>
          <View style={{flexDirection:'column', marginLeft:10}}>
          <Text style={styles.title}>Availability</Text>
          <Text style={styles.valueText}>value</Text>
          </View>   
        </View>
        <View>
          <TouchableOpacity
                    onPress={()=>{
                      setIsCalendarVisible(true)}} 
          style={styles.input}>
                  <Text style={{fontSize:15, fontWeight:'400', lineHeight:20, color:'black'}}>{selectedDate}</Text>
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
              onRequestClose={()=>{
                setIsCalendarVisible(false)
              }}>
              <View style={styles.modalContainer}>
                <View style={styles.calendarContainer}>
                  <Calendar
                    onDayPress={onDateSelect}
                    markedDates={{
                      [selectedDate]: {
                        selected: true,
                        selectedColor: 'blue',
                      },
                    }}
                  />
                  <TouchableOpacity style={styles.closeButton} onPress={()=>{
                    setIsCalendarVisible(false)
                  }}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <ActionButtons 
        onPressReset={() => {
          setSelectedDate('')
        }} 
        onPressApply={() => applyFilters()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input:{width:356, height:52, borderRadius:12, borderWidth:1,borderColor:'#0D0C221A', alignSelf:'center', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:8},
  Maincontainer: {flex: 1, backgroundColor: 'white'},
  container: {
    width: 384,
    height: 136,
    borderRadius: 16,
    backgroundColor: "white",
    elevation: 2,
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "column",
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FD7E141A',
    justifyContent: 'center',
    alignItems: 'center',
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
  title: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "black",
  },
  valueText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: "#FD7E14",
  }
});

export default App;
