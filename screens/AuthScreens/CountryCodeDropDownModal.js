import React from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from "react-native";

const countries = [
    { flag: "🇺🇸", name: "US", code: "+1" },
    { flag: "🇬🇧", name: "UK", code: "+44" },
    { flag: "🇮🇳", name: "IN", code: "+91" },
    { flag: "🇨🇦", name: "CA", code: "+1" },
    { flag: "🇦🇺", name: "AU", code: "+61" },
    { flag: "🇩🇪", name: "DE", code: "+49" },
    { flag: "🇫🇷", name: "FR", code: "+33" },
    { flag: "🇯🇵", name: "JP", code: "+81" },
];

const CustomCountryDropdown = ({ visible, setVisible, setSelectedCountry }) => {
  const selectCountry = (country) => {
    setSelectedCountry(country);
    setVisible(false);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={countries}
            keyExtractor={(item) => item.name + item.code} // Ensuring unique key
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.option} onPress={() => selectCountry(item)}>
                <Text style={styles.optionText}>{item.flag} {item.name} ({item.code})</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 150,
    height:200,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginLeft:-220,
    marginTop:-70
  },
  option: {
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
  },
});

export default CustomCountryDropdown;
