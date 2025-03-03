import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import CloseIcon from '../../assets/images/closeIcon.svg';
import Circletick from '../../assets/images/SVGs/tick-circle.svg';

const descriptions = [
  'About the room',
  'About shared areas of room',
  'Getting Around',
  'Current roommate',
  'Payment period description'
];

const App = ({ visible, onClose }) => {
  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Info</Text>
              <TouchableOpacity onPress={onClose}>
                <CloseIcon style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <Text style={styles.heading}>Things to include in your description</Text>
            {descriptions.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Circletick style={styles.tickIcon} />
                <Text style={styles.listText}>{item}</Text>
              </View>
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
    width: '100%',
    height: 287,
    backgroundColor: 'white',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 650,
  },
  content: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  icon: {
    marginTop: 5,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#0D0C221A',
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 5,
  },
  tickIcon: {
    width: 16,
    height: 16,
  },
  listText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
});

export default App;
