import React,{useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import Sorting from '../../assets/images/SVGs/sorting.svg'
import Filter from '../../assets/images/SVGs/filter.svg'
import SortingModal from './SortingModal'
import InfoModal from './RoommateResultInfo'

const roommates = [
    {
      id: '1',
      title: 'I am Aziz seeks a room',
      gender: 'Student male (23)',
      status: 'Searching for a Room',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      availability: '1 February',
      image: require('../../assets/images/new_roommate.png'),
    },
    {
      id: '2',
      title: 'I am Aziz seeks a room',
      gender: 'Student male (23)',
      status: 'Searching for a Room',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      availability: '1 February',
      image: require('../../assets/images/new_roommate.png'),
    },
    {
      id: '3',
      title: 'I am Aziz seeks a room',
      gender: 'Student male (23)',
      status: 'Searching for a Room',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      availability: '1 February',
      image: require('../../assets/images/new_roommate.png'),
    },
    {
      id: '4',
      title: 'I am Aziz seeks a room',
      gender: 'Student male (23)',
      status: 'Searching for a Room',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      availability: '1 February',
      image: require('../../assets/images/new_roommate.png'),
    },
    {
      id: '5',
      title: 'I am Aziz seeks a room',
      gender: 'Student male (23)',
      status: 'Searching for a Room',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      availability: '1 February',
      image: require('../../assets/images/new_roommate.png'),
    },
    {
      id: '6',
      title: 'I am Aziz seeks a room',
      gender: 'Student male (23)',
      status: 'Searching for a Room',
      location: 'Riyadh - Najran',
      price: '120 SAR',
      availability: '1 February',
      image: require('../../assets/images/new_roommate.png'),
    },
  ];

const RenderRoommate = ({item}) => {
    const [isLiked, setIsLiked] = useState(false);
      
        const toggleLike = () => {
          setIsLiked(!isLiked);
        };
      return(
        <View style={styles.Newcard}>
        <Image source={item.image} style={styles.Newimage} />
        <View style={styles.secondNewdetails}>
          <Text style={styles.Newtitle}>{item.title}</Text>
          <View style={{flexDirection:'column', marginTop:10, gap:5}}>
            <View style={{flexDirection:'row'}}>
            <Image
              source={require('../../assets/images/Gender.png')}
              style={styles.secondNewiconImage}
            />
            <Text style={styles.Newinfo}>{item.gender}</Text>
            </View>
            <View style={{flexDirection:'row', gap:3}}>
            <Image
              source={require('../../assets/images/rooom.png')}
              style={styles.secondNewiconImage}
            />
            <Text style={styles.Newinfo}>{item.status}</Text>
            </View>
            <View style={{flexDirection:'row', gap:3}}>
            <Image
              source={require('../../assets/images/location.png')}
              style={styles.secondNewiconImage}
            />
            <Text style={styles.Newlocation}>{item.location}</Text>
            </View>
            </View>
          <View style={styles.Newfooter}>
            <Text style={styles.Newprice}>{item.price}</Text>
            <Text style={styles.Newmonth}>/month</Text>
            <View style={styles.Newavailability}>
              <Text>
                <Text style={styles.NewavailableText}>Available</Text>
              </Text>
              <Text style={styles.NewavailabilityDate}>
                <Text style={{fontWeight: 'bold'}}>{item.availability}</Text>
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.NewheartIcon} onPress={toggleLike}>
           <Image
            source={
            isLiked
            ? require("../../assets/images/heart.png") 
            : require("../../assets/images/emptyHeart.png") 
            }
            style={styles.NewheartImage}
            />
        </TouchableOpacity>
      </View>
      )
   };
  

const App = () => {
     const [InfomodalVisible, setInfoModalVisible] = useState(false);
      useEffect(() => {
         setInfoModalVisible(false);
       }, []);

   const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Riyadh-Narjan</Text>
        </View>
      </ImageBackground>
      <View style={{width:384, height:46, borderRadius:12, borderWidth:1, borderColor:'#0D0C221A', alignSelf:'center', marginTop:10, flexDirection:'row', justifyContent:'center', alignItems:'center', gap:60}}>
        <TouchableOpacity 
        onPress={()=>setModalVisible(true)}
        style={{flexDirection:'row', gap:10}}>
            <Sorting/>
            <Text style={{fontSize:16, fontWeight:'500',lineHeight:22, color:'black'}}>Sorting</Text>
        </TouchableOpacity>
         <View style={{width:1, height:20, backgroundColor:'#0D0C221A'}}></View>
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate("RoommateFilters")
        }}
        style={{flexDirection:'row', gap:10}}>
            <Filter/>
            <Text style={{fontSize:16, fontWeight:'500',lineHeight:22, color:'black'}}>Filter</Text>
        </TouchableOpacity>
      </View>
      <FlatList
       data={roommates}
       renderItem={({ item }) => <RenderRoommate item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
            />
      <InfoModal visible={InfomodalVisible} onClose={() => setInfoModalVisible(false)} />
       <SortingModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: 134,
    resizeMode: 'cover',
    overflow: 'hidden',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#1C5298",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  icon: {
    marginRight: 5, 
  },
  tagText: {
    fontSize: 12,
    fontWeight: "700",
    color: "white",
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
    marginTop: 12,
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
  Newcard: {
    marginTop:20,
    width:370,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    //marginLeft:18,
    position: 'relative',
  },
  Newimage: {
    alignSelf:'center',
    width: 400,
    height: 212,
    borderRadius: 14,
  },
  Newdetails: {
    //width:392,
    backgroundColor: 'white',
    padding: 10,
    marginTop: -35,
  },
  NewfirstLine:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  featuredBtn:{
    height:30,
    width:88,
    backgroundColor:'#1C5298',
    borderRadius:8,
    justifyContent:'space-between',
    flexDirection:'row',
    //alignItems:'center'
    paddingHorizontal:9
  },
  featuredIcon:{
      width:14.99,
      height:15,
      marginTop:5
  },
  featuredTxt:{
    fontSize:12,
    color:'white',
    marginTop:4
    //marginLeft:25
    //textAlign:'right'
  },
  Newtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  Newrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  Newseprator: {
    width: 2,
    height: 15,
    backgroundColor: 'black',
    marginRight: 10,
  },
  Newinfo: {
    fontSize: 13,
    color: '#6C757D',
    marginLeft: 5,
    marginRight: 10,
  },
  Newlocation: {
    fontSize: 13,
    color: '#6C757D',
    marginLeft: 5,
  },
  Newfooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  Newprice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#005C9F',
  },
  Newmonth: {
    marginRight: 220,
    marginTop: 5,
    color: '#005C9F',
    fontSize: 15,
    fontWeight: '400',
  },
  Newavailability: {
    marginLeft:-80,
    marginTop: -15,
  },
  NewavailableText: {
    color: '#6C757D',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    lineHeight: 22,
    textAlign: 'center',
  },
  NewavailabilityDate: {
    fontSize: 16,
    color: '#0D0C22',
    lineHeight: 22,
  },
  NewheartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  NewheartImage: {
    width: 20,
    height: 20,
  },
  NewiconImage: {
    width: 14,
    height: 14,
  },
  underFlatlist:{
    flexDirection:'row',
    paddingHorizontal:10,
    justifyContent: 'space-between',
    marginBottom:10,
    marginTop: 10,  
  },
  secondNewdetails:{
    flexDirection:'column',
    backgroundColor: 'white',
    padding: 10,
    marginTop: -35
  },
  secondNewiconImage:{
    width:13,
    height:15
  },
  htu:{
    fontSize: 18,
    fontWeight: 600,
    //marginTop:10,
    marginTop: 15,
    marginBottom:10,
    paddingHorizontal:10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
});

export default App;
