import React from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput, StyleSheet } from 'react-native';
import  ArrowDown from '../../assets/images/arrow-down.svg'; 

const Dropdown = ({ label, data, selectedValue, onValueChange, placeholder, placeholderColor = '#FFFFFF' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsOpen(!isOpen)}
      >
        <View style={styles.inputContainer}>
          <Text style={[styles.buttonText, { color: selectedValue ? 'black' : placeholderColor }]}>
            {selectedValue || placeholder}
          </Text>
          <ArrowDown fill={'black'}/> 
        </View>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search..."
            />
            <FlatList
              data={filteredData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onValueChange(item);
                    setIsOpen(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 15,
  },
  dropdownButton: {
    padding: 10,
    width: 360,
    height: 54,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: -25,
    borderColor: '#0D0C221A',
    borderWidth: 1,
    alignSelf:'center',
    marginBottom: -9,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  inputContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  buttonText: {
    color: '#FFFFFF', 
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
  },
  searchInput: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 12,
  },
  option: {
    padding: 10,
  },
});

export default Dropdown;