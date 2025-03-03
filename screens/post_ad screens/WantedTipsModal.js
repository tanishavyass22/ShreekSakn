import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import CloseIcon from '../../assets/images/closeIcon.svg';
import You from '../../assets/images/SVGs/you.svg';
import Pets from '../../assets/images/SVGs/pets.svg';
import Interests from '../../assets/images/SVGs/interests.svg';

const images = [You, Pets, Interests];

const App = ({visible, onClose}) => (
  <Modal
    animationType="slide"
    transparent
    visible={visible}
    onRequestClose={onClose}>
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.title}>Tips</Text>
          <TouchableOpacity onPress={onClose}>
            <CloseIcon style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <Text style={styles.description}>   
Upload a photo of you, so potential housemates
know who they'll be meeting. If you're moving with a pet, include one of them. Consider showing off your hobbies and interests too!
        </Text>
        <View style={styles.imageContainer}>
          {images.map((Icon, index) => (
            <View key={index} style={styles.imageBox}>
              <Icon />
            </View>
          ))}
        </View>
      </View>
    </View>
    <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:10
  },
  title: {fontSize: 16, fontWeight: '500'},
  separator: {height: 1, backgroundColor: '#E0E0E0', marginVertical: 5},
  description: {
    fontSize: 14,
    color: '#6C757D',
    lineHeight: 22,
    marginHorizontal: 12,
  },
  imageContainer: {
    flexDirection: 'row',
    gap: 12,
    alignSelf: 'center',
    marginTop: 8,
  },
  imageBox: {
    width: 118,
    height: 102,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
