import React, { useState } from "react"; 
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import ArrowLeft from '../../assets/images/arrow-left.svg';
const rooms = [
  {
    id: "1",
    title: "Modern room with nice view",
    rooms: "3 Rooms",
    type: "1 En-Suit",
    location: "Riyadh - Najran",
    price: "120 SAR",
    availability: "1 February",
    image: require("../../assets/images/room_img.png"),
  },
  {
    id: "2",
    title: "Modern room with nice view",
    rooms: "3 Rooms",
    type: "1 En-Suit",
    location: "Riyadh - Najran",
    price: "120 SAR",
    availability: "1 February",
    image: require("../../assets/images/room_img.png"),
  },
  {
    id: "3",
    title: "Modern room with nice view",
    rooms: "3 Rooms",
    type: "1 En-Suit",
    location: "Riyadh - Najran",
    price: "120 SAR",
    availability: "1 February",
    image: require("../../assets/images/room_img.png"),
  },
  {
    id: "4",
    title: "Modern room with nice view",
    rooms: "3 Rooms",
    type: "1 En-Suit",
    location: "Riyadh - Najran",
    price: "120 SAR",
    availability: "1 February",
    image: require("../../assets/images/room_img.png"),
  },
  {
    id: "5",
    title: "Modern room with nice view",
    rooms: "3 Rooms",
    type: "1 En-Suit",
    location: "Riyadh - Najran",
    price: "120 SAR",
    availability: "1 February",
    image: require("../../assets/images/room_img.png"),
  },
  {
    id: "6",
    title: "Modern room with nice view",
    rooms: "3 Rooms",
    type: "1 En-Suit",
    location: "Riyadh - Najran",
    price: "120 SAR",
    availability: "1 February",
    image: require("../../assets/images/room_img.png"),
  },
];

const SavedRooms = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("rooms");

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.row}>
          <Image source={require('../../assets/images/rooom.png')} style={styles.iconImage} />
          <Text style={styles.info}>{item.rooms}</Text>
          <View style={styles.seprator}></View>
          <Image source={require('../../assets/images/tub.png')} style={styles.iconImage} />
          <Text style={styles.info}>{item.type}</Text>
        </View>
        <View style={styles.row}>
          <Image source={require('../../assets/images/location.png')} style={styles.iconImage} />
          <Text style={styles.location}>{item.location}</Text>
        </View>
        <View style={styles.footer}>
  <Text style={styles.price}>{item.price}</Text> 
  <Text style={styles.month}>/month</Text>
  <View>
    <Text style={styles.availability}>
      <Text style={styles.availableText}>Available</Text>
    </Text>
    <Text style={styles.availabilityDate}>
      <Text style={{ fontWeight: "bold" }}>{item.availability}</Text>
    </Text>
  </View>
</View>
      </View>
      <TouchableOpacity style={styles.heartIcon}>
        <Image source={require("../../assets/images/heart.png")} style={styles.heartImage} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/images/Frame.png")} style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Saved List</Text>
        </View>
      </ImageBackground>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab("rooms")}>
          <Text style={[styles.tab, activeTab === "rooms" && styles.activeTab]}>Saved Rooms</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("roommates")}>
          <Text style={[styles.tab, activeTab === "roommates" && styles.activeTab]}>Saved Roommate</Text>
        </TouchableOpacity>
      </View>
      {activeTab === "rooms" ? (
        <FlatList data={rooms} renderItem={renderItem} keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false} />
      ) : (
        <View style={styles.redSquare}>
          <Text style={styles.redSquareText}>No Rooms Saved</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: 412,
    height: 110,
    resizeMode: "cover",
    overflow: "hidden",
    alignSelf: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: "#FD7E14",
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 15,
    lineHeight: 24,
    marginTop: 42,
  },
  smallView: {
    flexDirection: "row",
    marginTop:10
  },
  orangeBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: "#FD7E14",
    marginLeft: 15,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    marginTop:18
  },
  tab: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    paddingBottom: 10,
    color: "#6C757D",
  },
  activeTab: {
    color: "#FD7E14",
    borderBottomWidth: 2,
    borderBottomColor: "#FD7E14",
  },
  card: {
    alignSelf: "center",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    position: "relative",
    marginTop: 10,
  },
  image: {
    width: 392,
    height: 212,
    borderRadius: 14,
  },
  details: {
    backgroundColor: "white",
    padding: 10,
    marginTop: -35,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  seprator:{
    width:2,
    height:15,
    backgroundColor:'black',
    marginRight:10
  },
  info: {
    fontSize: 13,
    color: "#6C757D",
    marginLeft: 5,
    marginRight: 10,
  },
  location: {
    fontSize: 13,
    color: "#6C757D",
    marginLeft: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#005C9F",
  },
  month:{
    marginRight:170,
    marginTop:5,
    color:'#005C9F',
    fontSize:15,
    fontWeight:'400'

  },
  availability: {
    fontSize: 16,
    color: "#0D0C22",
  },
  availableText: {
    color: '#6C757D', 
    fontSize: 14, 
    fontWeight: '400', 
    marginBottom: 5,
    lineHeight:22, 
    textAlign:'center'
  },
  availabilityDate: {
    fontSize: 16,
    color: "#0D0C22",
    lineHeight:22
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  heartImage: {
    width: 20,
    height: 20,
  },
  redSquare: {
    width: "100%",
    height: '100%',
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  redSquareText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  iconImage: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
});

export default SavedRooms;