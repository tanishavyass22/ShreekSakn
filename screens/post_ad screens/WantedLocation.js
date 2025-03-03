import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import Location from '../../assets/images/SVGs/location.svg';
import Delete from '../../assets/images/SVGs/trash.svg';
import { useDispatch } from 'react-redux';
import { setWantedInformation } from '../../Redux/RoommateWantenSlice';
const App = () => {
  const navigation = useNavigation();
  const [locations, setLocations] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAddLocation = () => {
    if (inputText.trim() !== '') {
      setLocations([
        ...locations,
        {id: Date.now().toString(), name: inputText},
      ]);
      setInputText('');
    }
  };

  const handleDeleteLocation = id => {
    setLocations(locations.filter(location => location.id !== id));
  };

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Location width={20} height={20} />
        <Text style={{marginLeft: 10, fontSize: 16, color: '#333'}}>
          {item.name}
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleDeleteLocation(item.id)}>
        <Delete width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
  const dispatch = useDispatch();
       const applyWanted = () => {
           const wanted = {
            locations
           };
         
           console.log("Applying Preferences:", wanted);
           dispatch(setWantedInformation(wanted)); 
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
          <Text style={styles.text}>Location</Text>
        </View>
      </ImageBackground>
      <View style={{width: 384, alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 14, fontWeight: '500', color: 'black', marginBottom:6, marginLeft:3}}>
          City
        </Text>
        <TextInput
          style={{
            width: '100%',
            height: 52,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#0D0C221A',
            backgroundColor: 'white',
            elevation: 3,
            paddingHorizontal: 10,
          }}
          value={inputText}
          onChangeText={setInputText}
        />
      </View>
      <TouchableOpacity
        onPress={handleAddLocation}
        style={{
          width: 380,
          height: 54,
          backgroundColor: '#FD7E14',
          borderRadius: 12,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
          marginBottom: 12,
        }}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#FFFFFF'}}>
          Add Location
        </Text>
      </TouchableOpacity>
      <View style={{width: 384, alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#6C757D',
            lineHeight: 22,
          }}>
          Search the areas you're open to living in. You must choose at least
          one, but there's no limit on how many you add. You will also be able
          to change them any time.
        </Text>
      </View>
      <View style={{padding: 15, flex: 1}}>
        <FlatList
          data={locations}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
        />
      </View>
      <TouchableOpacity
      onPress={()=>{
        applyWanted()
        navigation.navigate('WantedLocation2Screen')
      }}
        style={{
          width: 380,
          height: 54,
          backgroundColor: '#FD7E14',
          borderRadius: 12,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:22
        }}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#FFFFFF'}}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default App;
