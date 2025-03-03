import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CheckedBox from '../../assets/images/checked_box.svg';
import UncheckedBox from '../../assets/images/unchecked_box.svg';
import { Calendar } from 'react-native-calendars';

const AgeModal = ({ visible, onClose, onDateSelect }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handleDateSelect = (date) => {
    const formattedDate = `${date.day}-${date.month}-${date.year}`; 
    setSelectedDate(formattedDate); 
    setIsCalendarVisible(false);
  };

  const handleSave = () => {
    onDateSelect(selectedDate); 
    onClose(); 
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.box}>
            <View style={styles.ageView}>
              <Text style={styles.age}>Age</Text>
              <TouchableOpacity onPress={onClose}>
                <Image source={require('../../assets/images/cross.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.dobBox}>
              <TouchableOpacity style={styles.dateView} onPress={() => setIsCalendarVisible(true)}>
                <Image source={require('../../assets/images/calendar.png')} style={styles.icon} />
                <Text style={styles.selectedDateText}>
                  {selectedDate || 'Select Date'}
                </Text>
              </TouchableOpacity>
              <Text style={styles.show}>Show my age on my profile</Text>
              <TouchableOpacity
                style={styles.Checkbox}
                onPress={() => setIsChecked(!isChecked)}>
                {isChecked ? (
                  <CheckedBox width={20} height={20} fill="white" />
                ) : (
                  <UncheckedBox width={20} height={20} fill="white" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleSave}>
            <Text style={styles.btntxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isCalendarVisible && (
        <View style={styles.calendarModal}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={handleDateSelect}
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: 'red' },
              }}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsCalendarVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 390,
    height: 292,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  box: {
    flexDirection: 'column',
  },
  divider: {
    height: 1,
    backgroundColor: '#0D0C221A',
    marginVertical: 10,
  },
  age: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
    color: '#0D0C22',
    marginTop: 8,
    marginLeft: 10,
  },
  dobBox: {
    width: 380,
    height: 116,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0D0C221A',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop:10
  },
  dateView: {
    width: 356,
    height: 52,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0D0C221A',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection:'row'
  },
  show: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#1F1F1F',
  },
  Checkbox: {
    width: 22,
    height: 22,
    backgroundColor: '#FD7E14',
    marginLeft: 330,
    marginTop: -20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    width:22,
    height:22,
    marginLeft:320,
    marginTop:10
  },
  selectedDateText:{
    fontSize:16,
    fontWeight:'500',
    lineHeight:20,
    marginLeft:-330,
    marginTop:12
  },
  calendarModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    width: 350,
    height: 400,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  btn:{
    width:375,
    height:54,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FD7E14',
    borderRadius:12,
    marginTop:40
  },
  btntxt:{
    fontSize:20,
    fontWeight:'700',
    lineHeight:24,
    color:'#FFFFFF'
  },
  ageView:{
    flexDirection:'row'
  }
});

export default AgeModal;
