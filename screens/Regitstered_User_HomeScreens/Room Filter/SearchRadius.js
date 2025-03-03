import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Search from '../../../assets/images/room filter icons/radius.svg';
import ActionButtons from '../../../Components/UiComponents/ResetApplyButton';
import Header from '../../../Components/UiComponents/Header';

const App = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Maincontainer}>
     <Header title="Search Radius" onBackPress={() => navigation.goBack()} />
      <View style={styles.card}>
        <View style={{flexDirection:'row', padding:15, alignItems:'center'}}>
        <View style={styles.iconContainer}>
            <Search/>
        </View>
        <Text style={styles.text}>Search Radius</Text>
        </View>
        <TouchableOpacity 
        onPress={() => Alert.alert('Coming Soon', 'Maps feature will be available soon!')}
        style={styles.input}>
        <Text style={styles.text2}>Search Radius</Text>
        <View style={styles.iconContainer1}>
            <Search/>
        </View>
        </TouchableOpacity>
      </View>
      <ActionButtons 
        onPressReset={() => setInputValue("")} 
        onPressApply={() => console.log("Apply Pressed:", inputValue)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({

  card:{width:384, height:136, borderRadius:16, backgroundColor:'white', elevation:3, alignSelf:'center', margin:15, flexDirection:'column'},
  text:{fontSize:16, fontWeight:'500', lineHeight:20, color:'black'},
  input:{width:356, height:52, borderRadius:12, borderWidth:1,borderColor:'#0D0C221A', alignSelf:'center', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10},
 text2:{fontSize:15, fontWeight:'400', lineHeight:20, color:'black'},
  Maincontainer: {
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
    marginRight: 10,
  },
  iconContainer1: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FD7E141A',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
