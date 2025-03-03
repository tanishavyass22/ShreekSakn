import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { useSelector } from 'react-redux';
import { ArrowLeft, Calendar, Bills, Wifi, Sofa, Age, Gender, Occupation, Smoking, Language, Nationality, Bedroom, Bathroom, Roommate, Kitchen, Couple, Agent, Room, Location, Message, Call, Wp, Heart, Hide, Share} from '../../Constants/Icon'
import OptionsModal from './MyAdoptionsModal'
import {useNavigation} from '@react-navigation/native';
import RoomCardComponent from "../../Components/UiComponents/RoomCard"

const roomData =[
  {
    id: "1",
    title: "Rooms in Elm Street",
    rooms: "3",
    location: "Riyadh-Narjan",
    Price: "100-120 SAR",
    image: require('../../assets/images/room_img.png'),
  },
  {
    id: "2",
    title: "Rooms in Elm Street",
    rooms: "3",
    location: "Riyadh-Narjan",
    Price: "120 SAR",
    image: require('../../assets/images/room1.png'),
  },
  {
    id: "3",
    title: "Rooms in Elm Street",
    rooms: "3",
    location: "Riyadh-Narjan",
    Price: "120 SAR",
    image: require('../../assets/images/room2.png'),
  }
]
const { width } = Dimensions.get('window');
const DATA = [
    { id: '1', image: require('../../assets/images/carousel.png'), title: "Looking for a cozy place to call home? 🏡 Check out this amazing room available for rent now!" }, 
    { id: '2', image: require('../../assets/images/carousel.png'), title: "Looking for a cozy place to call home? 🏡 Check out this amazing room available for rent now!" },
    { id: '3', image: require('../../assets/images/carousel.png'), title: "Looking for a cozy place to call home? 🏡 Check out this amazing room available for rent now!" },
    { id: '4', image: require('../../assets/images/carousel.png'), title: "Looking for a cozy place to call home? 🏡 Check out this amazing room available for rent now!" },
    { id: '5', image: require('../../assets/images/carousel.png'), title: "Looking for a cozy place to call home? 🏡 Check out this amazing room available for rent now!" },
  ];
  
const App = () => {
    const [rooms, setRooms] = useState([]);
     const [modalVisible, setModalVisible] = useState(false);
      const [selectedOption, setSelectedOption] = useState('');
    useEffect(() => {
      setRooms([
        {
          id: "1",
          name: "Room 1",
          type: "En-suite",
          price: "200",
          deposit: "10",
          furnishing: "Furnished",
        },
        {
          id: "2",
          name: "Room 2 ",
          type: "room",
          price: "2500",
          deposit: "800",
          furnishing: "Semi-Furnished",
        },
      ]);
    }, []);
    
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % DATA.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.carouselImage} />
      <View style={{flexDirection:'column', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <View style={{ width: 281, height: 40, marginTop:-80,marginLeft:-50, flexDirection:'row'}}>
        <Text style={{fontSize:14, fontWeight:'600', color:'white', lineHeight:20}}>{item.title}</Text>
        <Text style={{fontSize:16, fontWeight:'600', color:'white', lineHeight:18.75, marginTop:20, marginLeft:40}}>{index + 1}/{DATA.length}</Text>
      </View>
      <View style={styles.pagination}>
        {DATA.map((_, index) => (
          <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
        ))}
      </View>
      </View> 
    </View>
  );
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const preferences = useSelector((state) => state.preferences);
  const existing = useSelector((state)=>state.existing);
  const selectedAmenities = existing.checkedAmenities 
  const amenityIcons = {
    "Wi-Fi": <Wifi />,
    "shared living room": <Sofa />,
    "shared Kitchen": <Kitchen />,
  };
  return (
    <ScrollView  showsVerticalScrollIndicator={false} style={styles.Mcontainer}>
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Ad#FD7E14</Text>
          <Text style={styles.dateText}>November 25, 2024</Text>
          <TouchableOpacity
          onPress={()=>setModalVisible(true)}
           style={styles.menuButton}>
            <Text style={styles.menuText}>⋮</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.carouselBox}>
        <FlatList
          ref={flatListRef}
          data={DATA}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false, listener: handleScroll }
          )}
        />
      </View>
      <View style={{flexDirection:'column', margin:15, gap:15}}>
        <Text style={{fontSize:16, fontWeight:'400', lineHeight:18.75, color:'#6C757D'}}>In Riyadh - Najran</Text>
        <Text style={{fontSize:18, fontWeight:'500', lineHeight:21.09, color:'black', marginTop:-8}}>Great Double Room in st Johns Wood</Text>
        <View style={{width:384, height:46, borderRadius:12, borderWidth:1, borderColor:'rgba(13, 12, 34, 0.1)', flexDirection:'row', gap:30, alignItems:'center', paddingLeft:35}}>
          <TouchableOpacity style={{flexDirection:'row', gap:8}}>
          <Heart/>
          <Text style={{fontSize:16, fontWeight:'500', lineHeight:22, color:'black'}}>Save</Text>
          </TouchableOpacity>
          <View style={{width:1, height:20, backgroundColor:'rgba(13, 12, 34, 0.1)'}}></View>
          <TouchableOpacity style={{flexDirection:'row', gap:8}}>
          <Hide/>
          <Text style={{fontSize:16, fontWeight:'500', lineHeight:22, color:'black'}}>Hide</Text>
          </TouchableOpacity>
          <View style={{width:1, height:20, backgroundColor:'rgba(13, 12, 34, 0.1)'}}></View>
          <TouchableOpacity style={{flexDirection:'row', gap:8}}>
          <Share/>
          <Text style={{fontSize:16, fontWeight:'500', lineHeight:22, color:'black'}}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:384, height:89}}>
        <Text style={{fontSize:14, fontWeight:'400', lineHeight:22, color:'#6C757D'}}>These rooms typically feature a cozy double bed or two twin beds with premium bedding for a restful sleep. The well-designed interior combines functionality and style, offering modern amenities such as a flat-screen TV...Read More</Text>
        </View>
      </View>
      <View>
      <FlatList
           horizontal
           showsHorizontalScrollIndicator={false}
            data={rooms}
            keyExtractor={(item, index) => item.id?.toString() || index.toString()}
            renderItem={({ item }) => 
            <RoomCardComponent 
            item={item} 
            hideElements={true}
            customStyles={{
              card:{backgroundColor: "white",padding: 16,borderRadius: 10,marginHorizontal: 15,marginBottom: 10,elevation: 3,width:300, borderWidth:2,borderColor: "#FD7E14", },
              separator: {width: 300,height: 1,backgroundColor: "#E7E7E9",marginVertical: 4,marginLeft: -15,}
            }}
            />
          }
            contentContainerStyle={{ paddingBottom: 20 }}
           />
      </View>
      <View style={{width:384, height:146, flexDirection:'column', backgroundColor:'white', elevation:3, alignSelf:'center', justifyContent:'center', alignItems:'center', gap:10, borderRadius:12}}>
       <View style={{width:356, height:54, borderRadius:12, backgroundColor:'#FD7E141A', flexDirection:'row', padding:10, alignItems:'center', gap:8}}>
        <View style={{width:38, height:38, borderRadius:10, backgroundColor:'white', justifyContent:'center', alignItems:'center'}} >
            <Calendar/>
        </View>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:14, fontWeight:'400', lineHeight:16.41, color:'#FD7E14'}}>Available From</Text>
        <Text style={{fontSize:16, fontWeight:'500', lineHeight:18.75, color:'black'}}>Now</Text>
        </View>
       </View>
       <View style={{width:356, height:54, borderRadius:12, backgroundColor:'#FD7E141A', flexDirection:'row', padding:10, alignItems:'center', gap:8}}>
        <View style={{width:38, height:38, borderRadius:10, backgroundColor:'white', justifyContent:'center', alignItems:'center'}} >
            <Bills/>
        </View>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:14, fontWeight:'400', lineHeight:16.41, color:'#FD7E14'}}>Bills</Text>
        <Text style={{fontSize:16, fontWeight:'500', lineHeight:18.75, color:'black'}}>{existing.selectedBill}</Text>
        </View>
       </View>
      </View>
      <View style={{width:384, height:172, alignSelf:'center', marginTop:20}}>
          <Image
          source={require('../../assets/images/mapImage.png')}
          style={{width:384, height:172, borderRadius:12, resizeMode:'cover'}}
          />
      </View>
      <View style={{
  width: 384, borderRadius: 14, alignSelf: 'center',
  backgroundColor: 'white', elevation: 3, flexDirection: 'column',
  padding: 15, gap: 15, marginTop: 20
}}>
  <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 16.41, color: '#1C5298' }}>
    AMENITIES
  </Text>

  {Array.isArray(selectedAmenities) && selectedAmenities.length > 0 ? (
    selectedAmenities.map((amenity, index) => (
      <View key={index}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={styles.iconContainer}>
            {typeof amenityIcons[amenity] === 'string' ? (
              <Text>{amenityIcons[amenity]}</Text>
            ) : (
              amenityIcons[amenity]
            )}
          </View>
          <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 22, color: 'black' }}>
            {typeof amenity === 'string' ? amenity.replace(/([A-Z])/g, ' $1') : 'Unknown'}
          </Text>
        </View>
        {index < selectedAmenities.length - 1 && (
          <View style={{ width: 356, alignSelf: 'center', borderWidth: 1, borderColor: '#0D0C2214' }}></View>
        )}
      </View>
    ))
  ) : (
    <Text style={{ fontSize: 14, color: 'gray', textAlign: 'center' }}>
      No amenities selected
    </Text>
  )}
      </View>
      <View style={{width:384, height:590, borderRadius:14, alignSelf:'center', backgroundColor:'white', elevation:3, flexDirection:'column', padding:15, gap:15, marginTop:20}}>
          <Text style={{fontSize:14, fontWeight:'500', lineHeight:16.41, color:'#1C5298'}}>Existing Roommate</Text> 
          <View style={{width:356, height:104, borderRadius:12, backgroundColor:'#FD7E1414', alignSelf:'center', flexDirection:'row', padding:20, alignItems:'center', gap:35, justifyContent:'center'}}>
          <View style={{flexDirection:'column', alignItems:'center'}}>
          <View style={{width:38, height:38, borderRadius:10, backgroundColor:'white', justifyContent:'center', alignItems:'center'}} >
            <Bedroom/>
        </View>
        <View style={{marginTop:8,}}>
        <Text style={{fontSize:14, fontWeight:'400', lineHeight:16.41, color:'#FD7E14', textAlign:'center'}}>Bedroom</Text>
        <Text style={{fontSize:16, fontWeight:'500', lineHeight:18.75, color:'black', textAlign:'center'}}>{existing.bedrooms} Rooms</Text>
        </View>
          </View>
          <View style={{flexDirection:'column', alignItems:'center'}}>
          <View style={{width:38, height:38, borderRadius:10, backgroundColor:'white', justifyContent:'center', alignItems:'center'}} >
            <Bathroom/>
        </View>
        <View style={{marginTop:8}}>
        <Text style={{fontSize:14, fontWeight:'400', lineHeight:16.41, color:'#FD7E14', textAlign:'center'}}>Bathroom</Text>
        <Text style={{fontSize:16, fontWeight:'500', lineHeight:18.75, color:'black', textAlign:'center'}}>{existing.bathrooms} Bathrooms</Text>
        </View>
          </View>
          <View style={{flexDirection:'column', alignItems:'center'}}>
          <View style={{width:38, height:38, borderRadius:10, backgroundColor:'white', justifyContent:'center', alignItems:'center'}} >
            <Roommate/>
        </View>
        <View style={{marginTop:8}}>
        <Text style={{fontSize:14, fontWeight:'400', lineHeight:16.41, color:'#FD7E14', textAlign:'center'}}>Roommate</Text>
        <Text style={{fontSize:16, fontWeight:'500', lineHeight:18.75, color:'black', textAlign:'center'}}>{(Number(existing.male) || 0) + (Number(existing.female) || 0)} Roommates</Text>
        </View>
          </View>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Gender/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}>{existing.female} female , {existing.male}male</Text>
</View>
<View style={{width:356, alignSelf:'center', borderWidth:1, borderColor:'#0D0C2214'}}></View>
<View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Age/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}>{existing.minAge} - {existing.maxAge} Year Old</Text>
</View>
<View style={{width:356, alignSelf:'center', borderWidth:1, borderColor:'#0D0C2214'}}></View>
<View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Occupation/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}>{existing.checkedItems.join(' & ')}
</Text>
</View>
<View style={{width:356, alignSelf:'center', borderWidth:1, borderColor:'#0D0C2214'}}></View>
<View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Language/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}>{existing.selectedId1}</Text>
</View>
<View style={{width:356, alignSelf:'center', borderWidth:1, borderColor:'#0D0C2214'}}></View>
<View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Nationality/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}>{existing.nationality}</Text>
</View>
<View style={{width:356, alignSelf:'center', borderWidth:1, borderColor:'#0D0C2214'}}></View>
<View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Smoking/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}>{existing.selectedId}</Text>
</View> 
      </View>
      <View style={{width:384, height:400, borderRadius:14, alignSelf:'center', backgroundColor:'white', elevation:3, flexDirection:'column', padding:15, gap:15, marginTop:20, marginBottom:30}}>
          <Text style={{fontSize:14, fontWeight:'500', lineHeight:16.41, color:'#1C5298'}}>NEW ROOMMATE PREFERENCES</Text> 
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Gender/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}>{preferences.selectedId}</Text>
</View>
<View style={{width:356, alignSelf:'center', borderWidth:1, borderColor:'#0D0C2214'}}></View>
<View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Age/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}> Between {preferences.minAge} - {preferences.maxAge} Years Old</Text>
</View>
<View style={{width:356, alignSelf:'center', borderWidth:1, borderColor:'#0D0C2214'}}></View>
<View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Occupation/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}>{preferences.selectedId1}</Text>
</View>
<View style={{width:356, alignSelf:'center', borderWidth:1, borderColor:'#0D0C2214'}}></View>
<View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Smoking/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}>{preferences.selectedId3}</Text>
</View> 
<View style={{width:356, alignSelf:'center', borderWidth:1, borderColor:'#0D0C2214'}}></View>
<View style={{flexDirection:'row', alignItems:'center', gap:10}}>
<View style={styles.iconContainer}>
<Couple/>
</View>
<Text style={{fontSize:16, fontWeight:'400', lineHeight:22, color:'black'}}>Couples {preferences.selectedId2}</Text>
</View> 
      </View>
      <View>
      </View>
      <View style={{width:384, height:110, borderRadius:16, backgroundColor:'white', elevation:5, alignSelf:'center', marginBottom:20, flexDirection:'column', gap:8, padding:15}}>
        <Text style={{fontSize:14, fontWeight:'500', lineHeight:16.41, color:'#1C5298'}}>ABOUT THE ADVERTISER</Text>
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
          <Agent/>
          <View style={{flexDirection:'column'}}>
          <Text style={{fontSize:16, fontWeight:'500', lineHeight:18.75, color:'black'}}>ADS Propert Management</Text>
          <Text style={{fontSize:14, fontWeight:'400', lineHeight:16.41, color:'#FD7E14'}}>Agent</Text>
          </View>
        </View>
      </View>
      <Text style={{fontSize:18, fontWeight:'600', lineHeight:21.09, color:'black', margin:5, marginLeft:20}}>More ads from the same advertiser</Text>
      {roomData.map((item) => (
        <View key={item.id} style={{width:384, height:94, borderRadius:14, backgroundColor:'white', elevation:5, alignSelf:'center', margin:12, justifyContent:'center', padding:12}}>
          <View style={{flexDirection:'row'}}>
          <Image
          source={item.image}
          style={{width:78, height:78, borderRadius: 12}}
          />
          <View style={{flexDirection:'column', marginLeft:12, gap:6}}>
          <Text style={{fontSize:16, fontWeight:'600', lineHeight:18.75, color:'black'}}>{item.title}</Text>
          <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
          <Room/>
          <Text style={{fontSize:14, fontWeight:'400', lineHeight:16, color:'#6C757D'}}>{item.rooms} Rooms</Text>
          <View style={{width:2, height:15, backgroundColor:'black'}}></View>
          <Location/>
          <Text style={{fontSize:14, fontWeight:'400', lineHeight:16, color:'#6C757D'}}>{item.location}</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:20, fontWeight:'700', lineHeight:23.44, color:'#005C9F'}}>{item.Price}</Text>
            <Text style={{fontSize:13, fontWeight:'400', lineHeight:15.23, color:'#005C9F', marginTop:8}}>/month</Text>
          </View>
          </View>
          </View>
        </View>
      ))}
      <View style={{ flexDirection:'row',width:410, height:88, borderTopLeftRadius:14, borderTopRightRadius:14, backgroundColor:'white', elevation:5,alignSelf:'center',justifyContent:'center', alignItems:'center', gap:10 }}>
        <View style={{flexDirection:'row',gap:5,width:122, height:54,borderRadius:12, paddingTop:16, paddingRight:15, paddingBottom:16, paddingLeft:15, justifyContent:'center', alignItems:'center', backgroundColor:'#FD7E14'}}>
          <Message/>
          <Text style={{fontSize:16, fontWeight:'700', lineHeight:22, color:'white'}}>Message</Text>
        </View>
        <View style={{flexDirection:'row',gap:5,width:122, height:54,borderRadius:12, paddingTop:16, paddingRight:15, paddingBottom:16, paddingLeft:15, justifyContent:'center', alignItems:'center', backgroundColor:'#1C5298'}}>
          <Call/>
          <Text style={{fontSize:16, fontWeight:'700', lineHeight:22, color:'white'}}>Call</Text>
        </View>
        <View style={{flexDirection:'row',gap:5,width:122, height:54,borderRadius:12, paddingTop:16, paddingRight:15, paddingBottom:16, paddingLeft:15, justifyContent:'center', alignItems:'center', backgroundColor:'#00B165'}}>
          <Wp/>
          <Text style={{fontSize:16, fontWeight:'700', lineHeight:22, color:'white'}}>WhatsApp</Text>
        </View>
      </View>
      <OptionsModal visible={modalVisible} onClose={() => setModalVisible(false)} onSelect={setSelectedOption} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Mcontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FD7E141A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: 134,  
    resizeMode: 'cover',
    overflow: 'hidden',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  text: {
    color: '#FD7E14',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 15,
    lineHeight: 24,
    marginTop: 42,
  },
  dateText: {
    marginTop: 65,
    marginLeft: -110,
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.41,
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
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#FD7E14',
    marginLeft: 150,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 25,
    color: 'white',
  },
  carouselBox: {
    alignSelf:'center',
    width: 370, 
    height: 404, 
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5, 
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 20,
  },
  item: {
    width: 370,
    height: 404,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    width: 370,
    height: 404,
    resizeMode: 'stretch',
    borderRadius: 15,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15, 
    alignSelf: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: 10,
    padding: 5,
  },
  dot: {
    width: 65,
    height: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 65,
    height: 5,
  },
});

export default App;