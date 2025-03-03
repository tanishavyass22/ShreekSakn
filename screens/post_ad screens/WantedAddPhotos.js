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
import Trash from '../../assets/images/SVGs/trash.svg'
import RadioChecked from '../../assets/images/radioChecked.svg';
import RadioUnchecked from '../../assets/images/radioUnchecked.svg';

const DATA = [
  {
    id: "1",
    image: require("../../assets/images/user5.png"), 
  },
  {
    id: "2",
    image: require("../../assets/images/user6.png"),
  },
  {
    id: "3",
    image: require("../../assets/images/user5.png"), 
  },
  {
    id: "4",
    image: require("../../assets/images/user6.png"),
  },
];
const Card = ({  item, selectedId, handlePress, handleDelete }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.captionContainer}>
        <View style={{ flexDirection: 'row', position: 'absolute', top: 12, left: 12 }}>
          <TouchableOpacity  onPress={() => handlePress(item)}>
          {selectedId === item.id ? <RadioChecked /> : <RadioUnchecked />}
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 5, marginTop: -2 }}>
            Default
          </Text>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
           <Trash
           style={{marginLeft:260}}
           />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const App = () => {     
    const [data, setData] = useState(DATA);
    const [selectedId, setSelectedId] = useState(null);

  const handlePress = (item) => {
    setSelectedId(selectedId === item.id ? null : item.id);
  };
  const handleDelete = (id) => {
    console.log('item deleted')
    setData(data.filter((item) => item.id !== id));
  };

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
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
          <Text style={styles.text}> Wanted Photos</Text>
        </View>
      </ImageBackground> 
      <View style={{width:384, height:55, flexDirection:'row', gap:10, margin:10, alignSelf:'center'}}>
        <TouchableOpacity style={{width:114, height:54, borderRadius:12, borderWidth:1, borderColor:'#FD7E14', justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:16, fontWeight:'700',color:'#FD7E14'}}>Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:256, height:54, borderRadius:12, backgroundColor:'#FD7E14',justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:16, fontWeight:'700',color:'#FFFFFF'}}>Add photos</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} contentContainerStyle={styles.container}>
        {data.map((item) => (
            <Card key={item.id} item={item} selectedId={selectedId} handlePress={handlePress} handleDelete={handleDelete} />
        ))}
      </ScrollView>
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('RoomateAd')
      }}
        style={{width:380, height:54, backgroundColor:'#FD7E14', borderRadius:12, justifyContent:'center', alignItems:'center',alignSelf:'center', marginTop:10, marginBottom:20}}>
        <Text style={{fontSize:20, fontWeight:'700',lineHeight:24, color:'#FFFFFF'}}>post Ad</Text>
        </TouchableOpacity>
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
    height: 200,
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
});

export default App;
