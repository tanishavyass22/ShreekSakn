import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import ArrowLeft from '../../../assets/images/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';
import Price from '../../../assets/images/room filter icons/price.svg';
import { useDispatch } from 'react-redux';
import { setRoommateFilters } from '../../../Redux/RoommatefilterSlice'
const App = () => {
    const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
     const [minbudget, setMinbudget]=useState('')
     const [maxbudget, setMaxbudget]=useState('')
     const dispatch = useDispatch();
                  const applyRoommateFilters = () => {
                     const Roommatefilters = {
                       minbudget,
                       maxbudget
                     };
                   
                     console.log("Applying Filters:", Roommatefilters);
                     dispatch(setRoommateFilters(Roommatefilters));
                     navigation.goBack(); 
                   };
  return (
    <View style={styles.Maincontainer}>
      <ImageBackground
        source={require('../../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Monthly Budget</Text>
        </View>
      </ImageBackground>
      <View style={{width:384, height:160, borderRadius:16, backgroundColor:'white', elevation:3, alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop:15}}>
      <View style={{flexDirection:'column', margin:15, gap:8}}>
              <View style={{flexDirection:'row'}}>
                      <View style={styles.iconContainer}>
                          <Price/>
                      </View>
                      <View style={{flexDirection:'column'}}>
                      <Text style={{fontSize:16, fontWeight:'500', lineHeight:20, color:'black'}}>Monthly Budget</Text>
                      <Text style={{fontSize:14, fontWeight:'400', lineHeight:20, color:'#FD7E14'}}> {`${minbudget} - ${maxbudget}`}</Text>
                      </View>
                  </View>
                 <View style={{width:356, height:76, flexDirection:'row', gap:8}}>
              <View style={{flexDirection:'column'}}>
                <Text>Minimum</Text>
                <TextInput
                value={minbudget}
                onChangeText={setMinbudget}
                placeholder='SAR'
                keyboardType='number-pad'
                style={{ width:170, height:53, borderRadius:12, borderWidth:1, borderColor:"#E7E7E9"}}
                />
              </View>
              <View style={{flexDirection:'column'}}>
                <Text>Maximum</Text>
                <TextInput
                value={maxbudget}
                onChangeText={setMaxbudget}
                placeholder='SAR'
                keyboardType='number-pad'
                style={{ width:170, height:53, borderRadius:12, borderWidth:1, borderColor:"#E7E7E9"}}
                />
              </View>
                 </View>
        </View>
      </View>
       <View style={{width:428, height:80, borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'white', elevation:10, marginTop:490,overflow: 'visible', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:15, marginLeft:-5}}>
        <TouchableOpacity 
         onPress={()=>{
          setMinbudget('')
          setMaxbudget('')
         }}
        style={{width:183, height:52, borderRadius:12, borderWidth:1, borderColor:'#6C757D',justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:16, fontWeight:'500',lineHeight:20, color:'#6C757D'}}>Reset</Text>
         </TouchableOpacity>
        <TouchableOpacity 
        onPress={applyRoommateFilters}
        style={{width:183, height:52, borderRadius:12, backgroundColor:'#FD7E14',justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:16, fontWeight:'500',lineHeight:20, color:'#FFFFFF'}}>Apply</Text>
        </TouchableOpacity>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
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
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FD7E141A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  }
});

export default App;
