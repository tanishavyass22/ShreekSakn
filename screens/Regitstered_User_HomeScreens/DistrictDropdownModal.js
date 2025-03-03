import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const DistrictModal = ({ isVisible, onClose, onSelectDistrict }) => {
  const district = [
    "Dubai",
    "Abu dhabi",
    "Nirjan",
    "Mecca",
    "Dammam",
    "Al Khobar",
    "Sharjah",
    "Giza",
    "Dallas",
    "San Jose",
  ];

  const [selectedDistrict, setSelectedDistrict] = useState(null);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {
                onSelectDistrict(selectedDistrict); 
                onClose();
              }}
            >
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator}></View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={district}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.districtItem,
                  selectedDistrict === item && styles.selectedDistrictItem,
                ]}
                onPress={() => setSelectedDistrict(item)}
              >
                <Text
                  style={[
                    styles.DistrictText,
                    selectedDistrict === item && styles.selectedDistrictText,
                  ]}
                >
                  {item}
                </Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: 410,
    height: 280,
    backgroundColor: "white",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 583,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FD7E14",
  },
  applyText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FD7E14",
  },
  separator: {
    width: "100%",
    borderWidth: 0.8,
    borderColor: "#0D0C221A",
  },
  districtItem: {
    marginTop:5,
    padding: 6,
    alignItems:'center'
  },
  DistrictText: {
    fontSize: 16,
    color: "#333",
  },
  selectedDistrictItem: {
    backgroundColor: "#1C52980F",
  },
  selectedDistrictText: {
    color: "#1C5298",
    fontWeight: "bold",
  },
});

export default DistrictModal;
