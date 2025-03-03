import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import CloseIcon from '../../assets/images/closeIcon.svg';
import RadioChecked from '../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../assets/images/radioUnchecked.svg';
import { windowHeight,windowWidth } from '../../Constants/Dimensions';

const BillModal = ({isVisible, onClose, onSelect}) => {
   const [checkedItems, setCheckedItems] = useState([]);
   const handlePress = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((i) => i !== item)); 
    } else {
      setCheckedItems([item]); 
      onSelect(item); 
    }
    onClose();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
        <View style={{flexDirection: 'row', gap:340, margin:10}}>
          <Text>Bills</Text>
          <TouchableOpacity onPress={onClose}>
            <CloseIcon/>
          </TouchableOpacity>
        </View>
         <View style={{width:428, height:1, backgroundColor:"#0D0C221A"}}></View>
         <View style={{margin:12}}>
         <TouchableOpacity style={styles.option} onPress={() => handlePress('Included')}>
                <Text>Included</Text>
                {checkedItems.includes('Included') ? <RadioChecked /> : <RadioUnchecked />}
              </TouchableOpacity>
        
              <TouchableOpacity style={styles.option} onPress={() => handlePress('Not Included')}>
                <Text>Not Included</Text>
                {checkedItems.includes('Not Included') ? <RadioChecked /> : <RadioUnchecked />}
              </TouchableOpacity>
        
              <TouchableOpacity style={styles.option} onPress={() => handlePress('Some Included')}>
                <Text>Some included</Text>
                {checkedItems.includes('Some Included') ? <RadioChecked /> : <RadioUnchecked />}
              </TouchableOpacity>
              </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    flexDirection:'column',
    alignSelf: 'center',
    width: windowWidth,
    height: windowHeight*0.19,
    backgroundColor: 'white',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    position:'absolute',
    bottom:0
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});

export default BillModal;
