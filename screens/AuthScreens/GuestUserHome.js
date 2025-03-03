import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
 ScrollView,
} from 'react-native';
import Images from '../../Constants/Images';
import ArrowRightIcon from '../../assets/images/arrow-right.svg';
import { useNavigation } from '@react-navigation/native'; 

const rooms = [
  {
    id: '1',
    title: 'Modern room with nice view',
    rooms: '3 Rooms',
    type: '1 En-Suit',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.room,
  },
  {
    id: '2',
    title: 'Modern room with nice view',
    rooms: '3 Rooms',
    type: '1 En-Suit',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.room,
  },
  {
    id: '3',
    title: 'Modern room with nice view',
    rooms: '3 Rooms',
    type: '1 En-Suit',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.room
  },
  {
    id: '4',
    title: 'Modern room with nice view',
    rooms: '3 Rooms',
    type: '1 En-Suit',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.room
  },
  {
    id: '5',
    title: 'Modern room with nice view',
    rooms: '3 Rooms',
    type: '1 En-Suit',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.room
  },
  {
    id: '6',
    title: 'Modern room with nice view',
    rooms: '3 Rooms',
    type: '1 En-Suit',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.room
  },
];
const roommates = [
  {
    id: '1',
    title: 'I am Aziz seeks a room',
    gender: 'Student male (23)',
    status: 'Searching for a Room',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.roommate
  },
  {
    id: '2',
    title: 'I am Aziz seeks a room',
    gender: 'Student male (23)',
    status: 'Searching for a Room',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.roommate
  },
  {
    id: '3',
    title: 'I am Aziz seeks a room',
    gender: 'Student male (23)',
    status: 'Searching for a Room',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.roommate
  },
  {
    id: '4',
    title: 'I am Aziz seeks a room',
    gender: 'Student male (23)',
    status: 'Searching for a Room',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.roommate,
  },
  {
    id: '5',
    title: 'I am Aziz seeks a room',
    gender: 'Student male (23)',
    status: 'Searching for a Room',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.roommate
  },
  {
    id: '6',
    title: 'I am Aziz seeks a room',
    gender: 'Student male (23)',
    status: 'Searching for a Room',
    location: 'Riyadh - Najran',
    price: '120 SAR',
    availability: '1 February',
    image: Images.roommate
  },
];
const videoData = [
  {
    id: '1',
    title: 'Getting Started with Shreek Sakn',
    description: 'Learn how to find your perfect room and roommate step-by-step.',
    duration: '14:45',
    image: Images.video
  },
  {
    id: '2',
    title: 'Finding the Right Roommate',
    description: 'Tips to choose the best roommate for you.',
    duration: '12:30',
    image: Images.video
  },
  {
    id: '3',
    title: 'Budgeting for Your Apartment',
    description: 'Manage your finances effectively.',
    duration: '10:15',
    image: Images.video
  },
  {
    id: '4',
    title: 'Roommate Agreements & Rules',
    description: 'Set rules for a smooth living experience.',
    duration: '16:20',
    image: Images.video
  },
  {
    id: '5',
    title: 'Decorating on a Budget',
    description: 'Affordable ways to personalize your space.',
    duration: '13:05',
    image: Images.video
  },
];

const App = () => {
   const navigation = useNavigation(); 
  const [visibleItem, setVisibleItem] = useState(null);
  const visibleItemRef = useRef(visibleItem);

  const updateVisibleItem = (id) => {
    visibleItemRef.current = id;
    setVisibleItem(id);
  };

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      updateVisibleItem(viewableItems[0].item.id); 
    }
  };
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 }; 

  const renderItem = ({item}) => (
    <View style={[styles.Newcard, { borderColor: item.id === visibleItem ? '#1C5298' : 'transparent', borderWidth: 2 }]}>
      <Image source={item.image} style={styles.Newimage} />
      <View style={styles.Newdetails}>
        <View style={styles.NewfirstLine}>
        <Text style={styles.Newtitle}>{item.title}</Text>
        <TouchableOpacity style={styles.featuredBtn}>
          <Image
          source={require('../../assets/images/featured.png')}
          style={styles.featuredIcon}
           />
          <Text style={styles.featuredTxt}>Featured</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.Newrow}>
          <Image
            source={require('../../assets/images/rooom.png')}
            style={styles.NewiconImage}
          />
          <Text style={styles.Newinfo}>{item.rooms}</Text>
          <View style={styles.Newseprator}></View>
          <Image
            source={require('../../assets/images/tub.png')}
            style={styles.NewiconImage}
          />
          <Text style={styles.Newinfo}>{item.type}</Text>
        </View>
        <View style={styles.Newrow}>
          <Image
            source={require('../../assets/images/location.png')}
            style={styles.NewiconImage}
          />
          <Text style={styles.Newlocation}>{item.location}</Text>
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
      <TouchableOpacity style={styles.NewheartIcon}>
        <Image
          source={require('../../assets/images/heart.png')}
          style={styles.NewheartImage}
        />
      </TouchableOpacity>
    </View>
  );

  const renderRoommate = ({item}) => (
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
      <TouchableOpacity style={styles.NewheartIcon}>
        <Image
          source={require('../../assets/images/heart.png')}
          style={styles.NewheartImage}
        />
      </TouchableOpacity>
    </View>
  );

  const VideoCard = ({ item }) => {
    return (
      <View style={styles.Vcard}>
        <Image source={item.image} style={styles.Vimage} />
        <TouchableOpacity style={styles.VplayButton}>
          <Text style={styles.VplayIcon}>▶</Text>
        </TouchableOpacity>
        <View style={styles.VdurationContainer}>
          <Text style={styles.VdurationText}>{item.duration}</Text>
        </View>
        <Text style={styles.Vtitle}>{item.title}</Text>
        <Text style={styles.Vdescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView  contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={true}>
    <View style={styles.container}>
      <ImageBackground
        source={Images.bgFrame}
        style={styles.backgroundImage}>
        <View style={styles.row}>
          <View style={styles.logoContainer}>
            <Image
              source={Images.home}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.helloText}>Hello</Text>
            <Text style={styles.welcomeText}>Welcome to Shreek Sakn</Text>
          </View>
        </View>
        <Text style={styles.introText}>
          Looking for your perfect roomshare? Join millions of people who have
          used Shreek Sakn to find theirs.
        </Text>
      </ImageBackground>

      <View style={styles.overlayBox}>
        <View style={styles.overlayRow}>
           <TouchableOpacity onPress={()=>{
             navigation.navigate("AuthStack", { screen: "SeacrchScreen" })
          }}>
          <Image
            source={require('../../assets/images/room.png')}
            style={styles.logoInRow}
          />
          </TouchableOpacity>
          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayLeftText}>Search for</Text>
            <Text style={styles.overlaySubText}>Rooms</Text>
          </View>
          <View style={styles.separator} />
          <TouchableOpacity  onPress={()=>{
           navigation.navigate("AuthStack", { screen: "SearchRoomate" })
        }}>
        <Image
          source={require('../../assets/images/roommates.png')}
          style={styles.logoInRow}
        />
        </TouchableOpacity>
          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayRightText}>Search for</Text>
            <Text style={styles.overlaySubText}>Roommate</Text>
          </View>
        </View>
      </View>
      <View style={styles.secondBox}>
        <Image
          source={require('../../assets/images/eng_logo.png')}
          style={styles.engLogo}
        />
        <Text style={styles.eng}>English</Text>
        <ArrowRightIcon style={styles.svgIcon} />
      </View>
      <View style={{flexDirection:'row', gap: 8, alignSelf:'center', marginTop:10, marginBlock:8}}>
        <TouchableOpacity 
        style={{width:184, height:54, backgroundColor:'#FD7E14', borderRadius:12, justifyContent:'center', alignItems:'center'}}
        onPress={() => {
          navigation.navigate("AuthStack", { screen: "WelcomeScreen" })
        }}
        >
        <View style={{flexDirection:'row', gap:8}}>
        <Image
        source={require('../../assets/images/join_us.png')}
        style={{width:20, height:25}}
        />
          <Text style={{fontSize:20, fontWeight:'700', color:'#FFFFFF'}}>Join Us</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{width:184, height:54, backgroundColor:'#FD7E14', borderRadius:12, justifyContent:'center', alignItems:'center'}}
        onPress={() => {
          navigation.navigate("AuthStack", { screen: "WelcomeScreen" })
        }}
        >
        <View style={{flexDirection:'row', gap:8}}>
        <Image
        source={require('../../assets/images/log_in.png')}
        style={{width:20, height:25}}
        />
          <Text style={{fontSize:20, fontWeight:'700', color:'#FFFFFF'}}>Log In</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
      <View style={styles.underBtn}>
        <Text style={styles.nearBy}>Nearby Rooms</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <FlatList
        data={rooms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.underFlatlist}>
        <Text style={styles.nearBy}>Nearby Rooms</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <FlatList
        data={roommates}
        renderItem={renderRoommate}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
       <Text style={styles.htu}>How to Use</Text>
       <FlatList
      data={videoData}
      renderItem={({ item }) => <VideoCard item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}   
      />
      <View style={{width:500, borderColor:'#F5F5F5', borderWidth:3, marginTop:25}}></View>
      <ImageBackground
      source={require('../../assets/images/homeBottombg.png')}
      style={{ padding: 15 }}
      resizeMode="cover"
    >
      <Text style={{ color: '#1F1F1F', fontSize: 18, fontWeight: '600', marginBottom: 10}}>
        How we are doing
      </Text>
      <Text style={{ color: '#6C757D', fontSize: 14 }}>
        Loremm ipsum dolor sit amet consectetur. Erat sit lectus tortor iaculis mi. Gravida id enim curabitur iaculis. Gravida tortor vel nibh commodo varius odio elementum sed sed. Posuere ut aliquet tellus ipsum facilisis posuere risus ac felis.
      </Text>
      <Text style={{fontSize:14, fontWeight:'500', color:'#FD7E14', textDecorationLine:'underline', marginTop:5}}>Send Feedback</Text>
    </ImageBackground>
      </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor:'white'
  },
  backgroundImage: {
    width: 415,
    height: 248,
    justifyContent: 'center',
    paddingLeft: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    marginTop: -50,
  },
  logoContainer: {
    justifyContent: 'space-between',
    height: 40,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  textContainer: {
    justifyContent: 'space-between',
    height: 40,
  },
  helloText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FD7E14',
  },
  welcomeText: {
    fontSize: 14,
    marginTop: 1,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  introText: {
    fontSize: 16,
    color: '#D4DEEB',
    fontWeight: '400',
    marginTop: 20,
    marginLeft:-9
  },
  overlayBox: {
    position: 'absolute',
    top: 175,
    left: 15,
    width: 384,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    zIndex: 1,
    justifyContent: 'center',
    elevation:5
  },
  overlayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoInRow: {
    width: 56,
    height: 56,
    marginRight: 5,
  },
  overlayTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayLeftText: {
    color: '#6C757D',
    fontSize: 12,
    fontWeight: '400',
  },
  overlayRightText: {
    color: '##6C757D',
    fontSize: 12,
    fontWeight: '400',
  },
  overlaySubText: {
    color: '#0D0C22',
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    width: 1,
    height: 56,
    backgroundColor: '#0D0C221A',
  },
  secondBox: {
    width: 384,
    height: 58,
    backgroundColor: 'white',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation:5,
    alignSelf:'center'
  },
  eng: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 9,
  },
  engLogo: {
    width: 42,
    height: 42,
  },
  svgIcon: {
    width: 20,
    height: 20,
    marginLeft: 250,
  },
  contentContainer: {
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    width: '100%', 
  },
    underBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom:10,
    paddingHorizontal:10,
    //marginBottom:-120
  },
  nearBy: {
    //marginLeft: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 600,
  },
  seeAll: {
    //marginLeft: 210,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 500,
    color: '#FD7E14',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: '#FD7E14',
  },
  Newcard: {
    marginBottom:10,
    width:360,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    marginLeft:18,
    position: 'relative',
  },
  Newimage: {
    width: 392,
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
    marginRight: 170,
    marginTop: 5,
    color: '#005C9F',
    fontSize: 15,
    fontWeight: '400',
  },
  Newavailability: {
    marginLeft:-60,
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
  Vcard: {
    width: 282,
    backgroundColor: '#fff',
    borderTopLeftRadius:15,
    borderTopRightRadius:0,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:0,
    marginRight: -10,
    padding: 15,
    elevation:3,
    marginBottom:5

  },
  Vimage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
  VplayButton: {
    position: 'absolute',
    top: 50,
    left: '40%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  VplayIcon: {
    color: '#fff',
    fontSize: 24,
  },
  VdurationContainer: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    //backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 5,
    padding: 5,
  },
  VdurationText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight:'600'
  },
  Vtitle: {
    fontWeight: '500',
    fontSize: 14,
    marginTop: 8,
    lineHeight:16.41,
    color:'#1F1F1F'
  },
  Vdescription: {
    fontSize: 12,
    color: '#6C757D',
    marginTop: 4,
    lineHeight:16
  },

});
export default App;
