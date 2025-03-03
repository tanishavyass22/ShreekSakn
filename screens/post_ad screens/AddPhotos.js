import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import PenIcon from '../../assets/images/SVGs/edit.svg'
import OptionsModal from './OptionsModal'
import TipsModal from './TipsModal';

const DATA = [
  {
    id: "1",
    caption: " ",
    image: require("../../assets/images/room1.png"), 
  },
  {
    id: "2",
    caption: " ",
    image: require("../../assets/images/room2.png"),
  },
  {
    id: "3",
    caption: " ",
    image: require("../../assets/images/room3.png"),
  },
  {
    id: "4",
    caption: " ",
    image: require("../../assets/images/room4.png"),
  },
];
const Card = ({ item, isExpanded, onExpand, onCaptionChange }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={[styles.captionContainer, isExpanded && { height: 92 }]}>
        <View style={{ flexDirection: 'row', position: 'absolute', top: 12, left: 12 }}>
          <TouchableOpacity onPress={() => onExpand(item.id)}>
            <PenIcon />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 5, marginTop: -2 }}>
            Caption
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.moreOptions}>⋮</Text>
          </TouchableOpacity>
        </View>

        {isExpanded ? (
          <TextInput
            style={styles.input}
            placeholder="Write your caption..."
            placeholderTextColor="gray"
            multiline={true}
            onChangeText={(text) => onCaptionChange(item.id, text)}
          />
        ) : (
          <Text></Text>
        )}
      </View>
      {modalVisible && <OptionsModal visible={modalVisible} onClose={() => setModalVisible(false)} />}
    </View>
  );
};
const App = () => {     
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const [expandedCard, setExpandedCard] = useState(null);
  const [captions, setCaptions] = useState(DATA);

  const handleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleCaptionChange = (id, newText) => {
    setCaptions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, caption: newText } : item))
    );
  };
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    nestedScrollEnabled={true}
    style={styles.Mcontainer}>
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Photos</Text>
        </View>
      </ImageBackground> 
      <View style={{width:384, height:55, flexDirection:'row', gap:10, margin:10, alignSelf:'center'}}>
        <TouchableOpacity 
        onPress={()=>{
          setModalVisible(true);
        }}
        style={{width:114, height:54, borderRadius:12, borderWidth:1, borderColor:'#FD7E14', justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:16, fontWeight:'700',color:'#FD7E14'}}>Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:256, height:54, borderRadius:12, backgroundColor:'#FD7E14',justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:16, fontWeight:'700',color:'#FFFFFF'}}>Add photos</Text>
        </TouchableOpacity>
      </View>
      <ScrollView nestedScrollEnabled={true} contentContainerStyle={styles.container}>
        {captions.map((item) => (
          <Card
            key={item.id}
            item={item}
            isExpanded={expandedCard === item.id}
            onExpand={handleExpand}
            onCaptionChange={handleCaptionChange}
          />
        ))}
      </ScrollView>
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate("MyAdvertisement")
      }}
        style={styles.nextBtn}>
        <Text style={{fontSize:20, fontWeight:'700',lineHeight:24, color:'#FFFFFF'}}>post Add</Text>
        </TouchableOpacity>
        <TipsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Mcontainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    width: 412,
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
  container: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    height: 180,
    width: "100%",
    resizeMode: "cover",
  },
  captionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    height:48,
    backgroundColor: "white",  
  },
  moreOptions: {
    fontSize: 18,
    marginLeft:270,
    color:'#FD7E14',
    fontWeight:'900'
  },
  input: {
    width:356,
    height:60,
    //backgroundColor:'white',
    marginTop:20,
    fontSize:14,
    fontWeight:'500',
    color:'black'
  },
  nextBtn:
  {width:380, height:54, backgroundColor:'#FD7E14', borderRadius:12, justifyContent:'center', alignItems:'center',alignSelf:'center', marginTop:10, marginBottom:30}
});

export default App;
