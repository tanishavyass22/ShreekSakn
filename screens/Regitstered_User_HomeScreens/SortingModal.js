import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import CloseIcon from '../../assets/images/closeIcon.svg';
import RadioChecked from '../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../assets/images/radioUnchecked.svg';
import { windowHeight, windowWidth } from '../../Constants/Dimensions';

const SORT_OPTIONS = [
  'Newest First',
  'Nearest First',
  'Lowest to Highest Price',
  'Highest to Lowest Price',
];

const SortingModal = ({visible, onClose}) => {
  const [selectedId, setSelectedId] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Info</Text>
              <TouchableOpacity onPress={onClose}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
            {SORT_OPTIONS.map(option => (
              <TouchableOpacity
                key={option}
                style={styles.option}
                onPress={() => setSelectedId(option)}>
                <Text>{option}</Text>
                {selectedId === option ? <RadioChecked /> : <RadioUnchecked />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />
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
    alignSelf: 'center',
    width: 410,
    height: windowHeight * 0.25,
    backgroundColor: 'white',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    //marginTop: 540,
    position:'absolute',
    bottom:0
  },
  content: {padding: 15},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {marginLeft: 9},
  divider: {
    height: 1,
    backgroundColor: '#0D0C221A',
    alignSelf: 'center',
    width: 500,
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default SortingModal;
