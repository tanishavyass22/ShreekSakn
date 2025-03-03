import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Switch } from "react-native-switch";
import Edit from "../../assets/images/SVGs/edit.svg";
import Furnished from "../../assets/images/SVGs/furnished.svg";
import Room from "../../assets/images/SVGs/room.svg";

const RoomCardComponent = ({ item, onEdit, hideElements, customStyles = {} }) => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <View style={[styles.card, customStyles.card]}>
      <View style={styles.header}>
        <Text style={styles.roomTitle}>{item.name}</Text>
        <Text style={styles.availableText}>Available</Text>
        <Switch
          value={isAvailable}
          onValueChange={(val) => setIsAvailable(val)}
          disabled={false}
          activeText={""}
          inActiveText={""}
          circleSize={20}
          barHeight={25}
          backgroundActive={"#1C5298"}
          backgroundInactive={"#6C757D"}
          circleBorderWidth={0}
        />
        <Text style={styles.takenText}>Taken</Text>
         {!hideElements && <TouchableOpacity style={styles.editButton} onPress={() => onEdit(item)}>
          <Edit size={20} />
          <Text>Edit</Text>
        </TouchableOpacity>}
      </View>
      
      <View style={[styles.separator, customStyles.separator]}></View>

      <Text style={styles.roomType}>{item.type}</Text>
      <Text style={styles.price}>
        {item.price} SAR/Months • {item.deposit} SAR Deposit
      </Text>

      <View style={styles.footer}>
        <View style={styles.iconText}>
          <Furnished size={16} />
          <Text style={styles.footerText}> {item.furnishing}</Text>
        </View>
        <View style={styles.iconText}>
          <Room size={16} />
          <Text style={styles.footerText}> {item.type}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    gap: 10,
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  availableText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16.41,
    color: "#FD7E14",
  },
  takenText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16.41,
    color: "#1C5298",
  },
  editButton: {
    flexDirection: "row",
    gap: 3,
    marginLeft: 70,
  },
  separator: {
    width: 366,
    height: 1,
    backgroundColor: "#E7E7E9",
    marginVertical: 4,
    marginLeft: -15,
  },
  roomType: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  price: {
    fontSize: 16,
    color: "#666",
    marginVertical: 5,
  },
  footer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 5,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "black",
    marginLeft: 5,
  },
});

export default RoomCardComponent;
