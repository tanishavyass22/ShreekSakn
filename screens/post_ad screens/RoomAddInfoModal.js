import React,{useState} from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet, TextInput,StatusBar} from 'react-native';
import CloseIcon from '../../assets/images/closeIcon.svg'
import RadioChecked from '../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../assets/images/radioUnchecked.svg';
import { windowHeight, windowWidth } from '../../Constants/Dimensions';

const CustomModal = ({isVisible, onClose, onConfirm }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId1, setSelectedId1] = useState(null);
  const [rent, setRent] = useState('');
  const [contractDuration, setContractDuration] = useState('');
  const [deposit, setDeposit] = useState('');
  const [roomCount, setRoomCount] = useState(1); 

  const handleConfirm = () => {
    const newRoom = {
      name: `Room ${roomCount}`,  
      type: selectedId,
      furnishing: selectedId1,
      price: rent,
      deposit: deposit,
    };
    onConfirm(newRoom); 
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
            <View style={{flexDirection:'column', gap:5}}>
                <View style={{flexDirection:'row', gap:330, margin:10, alignSelf:'center'}}>
                    <Text style={{marginLeft:9, marginTop:5}}>Rooms</Text>
                    <TouchableOpacity onPress={onClose}>
                    <CloseIcon style={{marginTop:5}}/>
                    </TouchableOpacity>
                </View>
                 <View style={{width:428, height:1, backgroundColor:"#0D0C221A"}}></View>
            </View>
            <View style={{flexDirection:'row', gap:10, alignSelf:'center', marginTop:12}}>
                <View style={{width:184, height:76, flexDirection:'column', gap:7}}>
                    <Text>Rent</Text>
                    <TextInput 
                    value={rent}
                    placeholder='0 SAR'
                    placeholderTextColor={'#0D0C2252'}
                    keyboardType='number-pad'
                    onChangeText={(text) => setRent(text)} 
                    style={{width:184, height:52, borderRadius:12, borderWidth:1, borderColor:'#0D0C221A', backgroundColor:'white', elevation:2}}/>
                </View>
                <View style={{width:184, height:76, flexDirection:'column', gap:7}}>
                    <Text>Rent Contract Duration</Text>
                    <TextInput 
                    value={contractDuration}
                    placeholder='2 years'
                    placeholderTextColor={'#0D0C2252'}
                    keyboardType='name-phone-pad'
                    onChangeText={(text) => setContractDuration(text)}
                    style={{width:184, height:52, borderRadius:12, borderWidth:1, borderColor:'#0D0C221A', backgroundColor:'white', elevation:2}}/>
                </View>
            </View>
            <View style={{flexDirection:'column', gap:1, margin:10}}>
                <Text> Deposit</Text>
                <TextInput 
                     value={deposit}
                    placeholder='0 SAR'
                    placeholderTextColor={'#0D0C2252'}
                    keyboardType='numeric'
                    onChangeText={(text) => setDeposit(text)}
                    style={{width:384, height:52, borderRadius:12, borderWidth:1, borderColor:'#0D0C221A', backgroundColor:'white', elevation:2}}/>
                    <Text style={{fontSize:14, fontWeight:'400', color:'#6C757D',marginLeft:5, marginTop:5}}>Deposit paid by tenants might be capped by the Tenant Fees Act. Tap here to find out more.</Text>
                     <View style={styles.card}>
                          <Text style={styles.heading}>Room Type</Text>
                    
                          <TouchableOpacity style={styles.option} onPress={() => setSelectedId('Room')}>
                            <Text>Room</Text>
                            {selectedId === 'Room' ? <RadioChecked /> : <RadioUnchecked />}
                          </TouchableOpacity>
                    
                          <TouchableOpacity style={styles.option} onPress={() => setSelectedId('En-suite')}>
                            <Text>En-suite</Text>
                            {selectedId === 'En-suite' ? <RadioChecked /> : <RadioUnchecked />}
                          </TouchableOpacity>
                        </View>
                        <View style={styles.card}>
                          <Text style={styles.heading}>Furnishing</Text>
                    
                          <TouchableOpacity style={styles.option} onPress={() => setSelectedId1('furnished')}>
                            <Text>Furnished</Text>
                            {selectedId1 === 'furnished' ? <RadioChecked /> : <RadioUnchecked />}
                          </TouchableOpacity>
                    
                          <TouchableOpacity style={styles.option} onPress={() => setSelectedId1('unfurnished')}>
                            <Text>Unfurnished</Text>
                            {selectedId1 === 'unfurnished' ? <RadioChecked /> : <RadioUnchecked />}
                          </TouchableOpacity>
                        </View>
            </View>
             <TouchableOpacity 
                         onPress={handleConfirm}
                    style={{width:384, height:54, borderRadius:12, backgroundColor:'#FD7E14', justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:15}}
                    >
                        <Text style={{fontSize:20, fontWeight:'700', lineHeight:24, color:'#FFFFFF'}}>Confirm</Text>
                    </TouchableOpacity>
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
    height: windowHeight*0.73,
    backgroundColor: 'white',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    //marginTop: 170,
    position:'absolute',
    bottom:0
  },
  card: {
    width: 384,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 2,
    marginTop: 20,
    borderRadius: 16,
    padding: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});

export default CustomModal;  