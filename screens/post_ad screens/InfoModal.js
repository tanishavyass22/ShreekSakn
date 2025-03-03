import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';
import CloseIcon from '../../assets/images/closeIcon.svg'
import { windowHeight, windowWidth } from '../../Constants/Dimensions';

const CustomModal = ({visible, onClose}) => {
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
                <View style={{width:380, height:44, alignSelf:'center'}}>
                    <Text>Please specify the property type first, then choose the rooms you want to display for rent.</Text>
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
    width: windowWidth,
    height: windowHeight*0.15,
    backgroundColor: 'white',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    position:'absolute',
    bottom:0
  },
});

export default CustomModal;
