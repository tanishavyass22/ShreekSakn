import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const LanguageSelectionModal = ({ visible, onClose, onLanguageSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = [
    {
      id: '1',
      name: 'Arabic',
      icon: require('../../assets/images/english.png'),
    },
    {
      id: '2',
      name: 'English',
      icon: require('../../assets/images/arabic.png'),
    },
  ];

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    onLanguageSelect(language);
    onClose();
  };

  const renderLanguageItem = ({ item }) => (
    <TouchableOpacity
      style={styles.languageItem}
      onPress={() => handleSelectLanguage(item.name)}
    >
      <Image source={item.icon} style={styles.flagIcon} />
      <Text style={styles.languageText}>{item.name}</Text>
      <View style={styles.radioButton}>
        {selectedLanguage === item.name && <View style={styles.radioSelected} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select Language</Text>
          <FlatList
            data={languages}
            keyExtractor={(item) => item.id}
            renderItem={renderLanguageItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop:280,
    marginLeft:230
  },
  modalContainer: {
    width: 170, 
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10, 
    elevation: 5,
    flex: 1, 
    maxHeight: '29%', 
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  flagIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  languageText: {
    flex: 1,
    fontSize: 16,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFA500', 
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 5,
  },
});
export default LanguageSelectionModal;
