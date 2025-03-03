import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../Constants/Dimensions";

const ActionButtons = ({ onPressReset, onPressApply }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.resetButton} onPress={onPressReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyButton} onPress={onPressApply}>
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 428,
    height: 80,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "white",
    elevation: 10,
    overflow: "visible",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    position:'absolute',
    bottom:0,
  },
  resetButton: {
    width: 183,
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#6C757D",
    justifyContent: "center",
    alignItems: "center",
  },
  resetText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "#6C757D",
  },
  applyButton: {
    width: 183,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#FD7E14",
    justifyContent: "center",
    alignItems: "center",
  },
  applyText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "#FFFFFF",
  },
});

export default ActionButtons;
