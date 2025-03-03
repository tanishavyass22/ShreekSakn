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
import Default from '../../assets/images/SVGs/default.svg';
import ArrowRight from '../../assets/images/arrow-right.svg';
import Delete from '../../assets/images/SVGs/delete.svg';

const App = ({visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Options</Text>
              <TouchableOpacity onPress={onClose}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.optionContainer}>
              <View style={styles.optionRow}>
                <Default />
                <Text style={styles.optionText}>Mark as Default</Text>
                <ArrowRight style={styles.arrowRight} />
              </View>
              <View style={styles.divider}></View>
              <View style={styles.optionRow}>
                <Delete />
                <Text style={styles.optionText}>Delete</Text>
                <ArrowRight style={styles.arrowRightDelete} />
              </View>
            </View>
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
    height: 208,
    backgroundColor: 'white',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 656,
  },
  modalContent: {
    flexDirection: 'column',
    margin: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    width: '100%',
    borderWidth: 0.8,
    borderColor: '#0D0C221A',
    marginTop: 10,
  },
  optionContainer: {
    width: 384,
    height: 112,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'column',
    gap: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  arrowRight: {
    marginLeft: 205,
  },
  arrowRightDelete: {
    marginLeft: 270,
  },
});

export default App;
