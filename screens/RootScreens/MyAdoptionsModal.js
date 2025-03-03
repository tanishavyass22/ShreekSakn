import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, StatusBar, FlatList } from 'react-native';
import { CloseIcon, Share, Edit, Reactivate, Trash } from '../../Constants/Icon';
import { windowHeight, windowWidth } from '../../Constants/Dimensions';


const AdOptionsModal = ({ visible, onClose, onSelect }) => {
  const data = [
    { icon: <Share/>, title: 'Share' },
    { icon: <Edit/>, title: 'Edit' },
    { icon: <Reactivate/>, title: 'Re-activate' },
    { icon: <Trash/>, title: 'Delete' },
  ];

  const RenderItem = ({ title, icon }) => (
    <View style={{ flexDirection: 'column', margin: 10 }}>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={() => {
          onSelect(title); 
          onClose(); 
        }}>
        <View
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            backgroundColor: '#FD7E141A',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          {icon}
        </View>
        <Text style={{fontSize:16, fontWeight:'500', lineHeight:20, color:'black'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={{ flexDirection: 'column', margin: 15, gap: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: '600', lineHeight: 22, color: 'black' }}>Options</Text>
              <TouchableOpacity onPress={onClose}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <View style={{ width: 500, height: 1, backgroundColor: '#0D0C221A', alignSelf: 'center' }}></View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <RenderItem title={item.title} icon={item.icon} />}
              ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#0D0C221A', margin: 5 }} />}
            />
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
    height: windowHeight * 0.4,
    backgroundColor: 'white',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 520,
  },
});

export default AdOptionsModal;
