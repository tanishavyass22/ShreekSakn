import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';
import CloseIcon from '../../assets/images/closeIcon.svg'

const RoommateModal = ({visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
            <View style={{flexDirection:'column', gap:5}}>
                <View style={{flexDirection:'row', gap:330, margin:10, alignSelf:'center'}}>
                    <Text style={{marginLeft:9, marginTop:5}}>Info</Text>
                    <TouchableOpacity onPress={onClose}>
                    <CloseIcon style={{marginTop:5}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:428, height:1, backgroundColor:"#0D0C221A"}}></View>
                <View style={{width:384, height:66, marginLeft:15}}>
                    <Text style={{textAlign:'left', fontSize:16, fontWeight:'400', lineHeight:22}}>You can contact potential roommates to search for accommodation together or invite them to live with you. Add yourself so other users can contact you.</Text>
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
    width: 410,
    height: 166,
    backgroundColor: 'white',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 725,
  },
});

export default RoommateModal;
