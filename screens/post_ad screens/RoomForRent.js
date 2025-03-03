import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomModal from './RoomAddInfoModal';
import BillModal from './BillsModal';
import DropdownIcon from '../../assets/images/dropdownicon.svg';
import RoomCardComponent from "../../Components/UiComponents/RoomCard"
import { useDispatch } from 'react-redux';
import { setExistingRoommate } from '../../Redux/ExistingRoommateSlice';
import Header from '../../Components/UiComponents/Header';

const App = () => {
  const [modalVisible, setModalVisible] = useState(true); 
  const [billModalVisible, setBillModalVisible] = useState(false);
  const [selectedBill, setSelectedBill] = useState('');
  const navigation = useNavigation();
  const [rooms, setRooms] = useState([]);
  const [editingRoom, setEditingRoom] = useState(null);
  
  const handleAddRoom = (newRoom) => {
    setRooms((prevRooms) => {
      if (editingRoom) {
        return prevRooms.map((room) =>
          room.id === editingRoom.id ? newRoom : room
        );
      } else {
        return [...prevRooms, { ...newRoom, id: newRoom.id || Date.now().toString() }];
      }
    });

    setEditingRoom(null);
    setModalVisible(false);
  };

  const handleEditClick = (room) => {
    setEditingRoom(room);
    setModalVisible(true);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleDropdownPress = () => {
    setBillModalVisible(!billModalVisible);
  };

  const handleSelect = (selectedValue) => {
    setSelectedBill(selectedValue);
    setModalVisible(false);
  };

  const dispatch = useDispatch();
  const applybill = () => {
    const existing = { selectedBill };
    console.log('Applying Preferences:', existing);
    dispatch(setExistingRoommate(existing));
  };

  return (
    <View style={styles.container}>
      <Header title="Room For Rent" onBackPress={() => navigation.goBack()} />
      <Text style={styles.description}>
        Specify whether bills are included as part of the rent. If so, you can provide more details in your ad description.
      </Text>

      <View style={styles.inputContainer}>
        <Text>Bills</Text>
        <TouchableOpacity onPress={handleDropdownPress} style={{ flexDirection: 'row' }}>
          <TextInput style={styles.input} value={selectedBill} editable={false} />
          <TouchableOpacity onPress={handleDropdownPress}>
            <DropdownIcon width={14} height={13} color="black" style={{ marginLeft: -25, marginTop: 15 }} />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.description}>
          For each room to rent, you'll need to specify details like the rental amount, room size, etc.
        </Text>
      </View>
      <CustomModal isVisible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={handleAddRoom} />
      <BillModal isVisible={billModalVisible} onClose={() => setBillModalVisible(false)} onSelect={handleSelect} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={rooms}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => <RoomCardComponent item={item} onEdit={handleEditClick} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity
        onPress={() => {
          applybill();
          navigation.navigate('LocationScreen');
        }}
        style={{
          width: 384,
          height: 54,
          borderRadius: 12,
          backgroundColor: '#FD7E14',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '700', lineHeight: 24, color: '#FFFFFF' }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    width: '100%',
    height: 110,
    resizeMode: 'cover',
    overflow: 'hidden',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: '#FD7E14',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 15,
    lineHeight: 24,
    marginTop: 42,
  },
  smallView: {
    flexDirection: 'row',
  },
  orangeBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#FD7E14',
    marginLeft: 15,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6C757D',
    lineHeight: 22,
    margin: 15,
  },
  inputContainer: {
    flexDirection: 'column',
    margin: 15,
    gap: 10,
  },
  input: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0D0C221A',
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    gap:10
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  roomType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    gap: 8,
    //justifyContent: "space-between",
    marginTop: 5,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
});

export default App;
