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
import { Dollar, Hobbies, ArrowLeft, Calendar, Bills, Wifi, Sofa, Age, Gender, Occupation, Smoking, Language, Nationality, Bedroom, Bathroom, Roommate, Kitchen, Couple, Agent, Room, Location, Message, Call, Wp, Heart, Hide, Share} from '../../Constants/Icon'
import OptionsModal from './MyAdoptionsModal'
import {useNavigation} from '@react-navigation/native';


const { width } = Dimensions.get('window');
const compatible=[
  {
    id:1,
    icon: <Age/>,
    title: "Between 18 - 35 Years Old"
  },
  {
    id:2,
    icon: <Gender/>,
    title: "Any Gender"
  },
  {
    id:3,
    icon: <Occupation/>,
    title: "Professionals & Student"
  },
  {
    id:4,
    icon: <Language/>,
    title: "English,Arabic"
  },
  {
    id:5,
    icon: <Smoking/>,
    title: "Smoking Allowed"
  },
]
const DATA = [
    { id: '1', image: require('../../assets/images/RoommateAdPerson.png'), title: "Looking for a cozy place to call home? 🏡 Check out this amazing room available for rent now!" }, 
    { id: '2', image: require('../../assets/images/RoommateAdPerson.png'), title: "Looking for a cozy place to call home? 🏡 Check out this amazing room available for rent now!" },
    { id: '3', image: require('../../assets/images/RoommateAdPerson.png'), title: "Looking for a cozy place to call home? 🏡 Check out this amazing room available for rent now!" },
    { id: '4', image: require('../../assets/images/RoommateAdPerson.png'), title: "Looking for a cozy place to call home? 🏡 Check out this amazing room available for rent now!" },
    { id: '5', image: require('../../assets/images/RoommateAdPerson.png'), title: "Looking for a cozy place to call home? 🏡 Check out this amazing room available for rent now!" },
  ];
  
const App = () => {
  const wanted = useSelector((state) => state.wantedInfo); 
  const data=[
    {
        id: "1",
        title:"Budget",
        value: `${wanted.budget} SAR/Month`,
        icon : <Dollar/>
    },
    {
        id: "2",
        title:"Availability",
        value: "Now" ,
        icon : <Calendar/>
    },
    {
        id: "3",
        title:"Occupation",
        value: wanted.selectedId3,
        icon : <Occupation/>
    },
    {
        id: "4",
        title:"Gender",
        value: wanted.selectedId2,
        icon : <Gender/>
    },
    {
        id: "5",
        title:"Smoking",
        value: wanted.selectedId,
        icon : <Smoking/>
    },
    {
        id: "6",
        title:"Language",
        value: wanted.selectedId1,
        icon : <Language/>
    },
    {
        id: "7",
        title:"Nationality",
        value: wanted.nationality,
        icon : <Nationality/>
    },
    {
        id: "8",
        title:"Interest",
        value: wanted.intrest.join(" , "),
        icon : <Hobbies/>
    },
    
]
const location = wanted.locations?.length > 0 ? wanted.locations.map((loc, index) => ({
  id: index + 1, 
  title: loc.name, 
})) : [];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
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
        <Text style={{fontSize:16, fontWeight:'600', color:'white', lineHeight:18.75, marginTop:20, marginLeft:255}}>{index + 1}/{DATA.length}</Text>
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
        <Text style={{fontSize:14, fontWeight:'400', lineHeight:22, color:'#6C757D'}}>My name is Aria Wilson, and I am 23 years old. I am excited to be moving to London for work. This new chapter in my life is a thrilling opportunity, and I look forward to experiencing everything the vibrant city has to offer....<Text style={{color:'#FD7E14', textDecorationLine:'underline', fontSize:14, fontWeight:'500', lineHeight:22}}>Read More</Text></Text>
        </View>
      </View>
      <View style={{width:384, height:653, borderRadius:14, backgroundColor:'white', elevation:3, alignSelf:'center', flexDirection:'column',}}>
        <View style={{width:341, height:48, flexDirection:'column', gap:7, alignSelf:'center', marginTop:12}}>
            <Text style={{fontSize:14, fontWeight:'500', lineHeight:16.41,color:'#1C5298'}}>ABOUT ME</Text>
            <Text style={{fontSize:18, fontWeight:'500', lineHeight:22,color:'black'}}>{wanted.selectedId2} ({wanted.Age}) searching for en-suite</Text>
        </View>
      {data.map((item) => (
              <View key={item.id} style={{ flexDirection:'row', gap:10, width:356,  height: item.id === "8" ? 101 : 54, borderRadius:12, backgroundColor:'rgba(253, 126, 20, 0.08)', alignSelf:'center', marginTop:12, alignItems: item.id==="8" ?'flex-start' :'center', padding:12}}>
                <View style={{width:38, height:38, backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                {item.icon}
                </View>
                <View styles={{flexDirection:'column'}}>
                    <Text style={{fontSize:14, fontWeight:'400', lineHeight:16.41, color:'#FD7E14'}}>{item.title}</Text>
                    <View style={{width:item.id==="8"?272:"", height:item.id==="8"?66:""}}>
                    <Text style={{fontSize:16, fontWeight:'500', lineHeight:item.id==="8"?22:18.75, color:'black'}}>{item.value}</Text>
                      </View>
                </View>
              </View>
            ))}
      </View>
      <View style={{
      width: 384, borderRadius: 14, alignSelf: 'center', 
      backgroundColor: 'white', elevation: 3, flexDirection: 'column', 
      padding: 15, gap: 15, marginTop: 20
    }}>
      <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 16.41, color: '#1C5298' }}>
        SEARCHING IN
      </Text>
      
      {location.length > 0 ? (
        location.map((item) => (
          <View key={item.id} style={{minWidth: 80, maxWidth: '90%',  borderRadius: 12,backgroundColor: '#FD7E1414', paddingHorizontal: 12,  height: 32,alignItems: 'center',flexDirection: 'row', gap: 8,marginTop: -3,alignSelf: 'flex-start' 
          }}>
            <Location />
            <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 20, color: 'black' }}>
              {item.title}
            </Text>
          </View>
        ))
      ) : (
        <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 20, color: 'gray' }}>
          No locations selected
        </Text>
      )}
    </View>
      <View style={{width:384, height:400, borderRadius:14, alignSelf:'center', backgroundColor:'white', elevation:3, flexDirection:'column', padding:15, gap:15, marginTop:20, marginBottom:30}}>
        <Text style={{fontSize:14, fontWeight:'500', lineHeight:16.41,color:'#1C5298'}}>COMPATIBLE WITH</Text>
         {compatible.map((item)=>(
          <View key={item.id} style={{width:350, height:55, borderBottomWidth:item.id===5? 0 :1, borderColor:'#0D0C2214', flexDirection:'row',gap:8}}>
            <View style={{width:38, height:38, backgroundColor:'#FD7E1414', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                {item.icon}
                </View>
                  <Text style={{fontSize:14, fontWeight:'400', lineHeight:20, color:'black', marginTop:8}}>{item.title}</Text>
            </View>
         ))}
      </View>
      <View style={{width:384, height:102, borderRadius:14, backgroundColor:'white', elevation:5, alignSelf:'center', marginBottom:15, marginTop:-8, padding:10}}>
      <Text style={{fontSize:14, fontWeight:'500', lineHeight:16.41,color:'#1C5298'}}>PREFERED AMENITIES</Text>
      <View style={{flexDirection:'row', alignItems:'center', marginTop:10, gap:8}}>
          <View style={{width:38, height:38, backgroundColor:'#FD7E1414', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
              <Sofa/>
          </View>
          <Text style={{fontSize:14, fontWeight:'400', lineHeight:20, color:'black'}}>Furnished</Text>
      </View>
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
      <View style={{ flexDirection:'row',width:410, height:88, borderTopLeftRadius:14, borderTopRightRadius:14, backgroundColor:'white', elevation:5,alignSelf:'center',justifyContent:'center', alignItems:'center', gap:10 }}>
        <TouchableOpacity style={{flexDirection:'row',gap:5,width:122, height:54,borderRadius:12, paddingTop:16, paddingRight:15, paddingBottom:16, paddingLeft:15, justifyContent:'center', alignItems:'center', backgroundColor:'#FD7E14'}}>
          <Message/>
          <Text style={{fontSize:16, fontWeight:'700', lineHeight:22, color:'white'}}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',gap:5,width:122, height:54,borderRadius:12, paddingTop:16, paddingRight:15, paddingBottom:16, paddingLeft:15, justifyContent:'center', alignItems:'center', backgroundColor:'#1C5298'}}>
          <Call/>
          <Text style={{fontSize:16, fontWeight:'700', lineHeight:22, color:'white'}}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row', gap:5,width:122, height:54,borderRadius:12, paddingTop:16, paddingRight:15, paddingBottom:16, paddingLeft:15, justifyContent:'center', alignItems:'center', backgroundColor:'#00B165'}}>
          <Wp/>
          <Text style={{fontSize:16, fontWeight:'700', lineHeight:22, color:'white'}}>WhatsApp</Text>
        </TouchableOpacity>
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
    width: 356, 
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
    width: 356,
    height: 404,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    width: 356,
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
    //padding: 5,
  },
  dot: {
    width: 60,
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