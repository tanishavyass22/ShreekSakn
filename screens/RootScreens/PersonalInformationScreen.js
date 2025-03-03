import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '../../assets/images/arrow-left.svg';

const App = () => {
  const {userDetails} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const checkedFields = userDetails?.checkedFields || [];
  const status =
    checkedFields.length > 0 ? checkedFields.join(', ') : 'No status selected';

  const [userInfo, setUserInfo] = useState({
    firstName: userDetails?.firstName || 'N/A',
    lastName: userDetails?.lastName || 'N/A',
    email: userDetails?.email || 'N/A',
    phoneNumber: userDetails?.phoneNumber || 'N/A',
    birthdate: userDetails?.birthdate || 'N/A',
    nationality: userDetails?.nationality || 'N/A',
    language: userDetails?.language || 'N/A',
    gender: userDetails?.gender || 'N/A',
    occupation: userDetails?.occupation || 'N/A',
    status: status,
  });

  const updateUserInfo = updatedInfo => {
    setUserInfo(updatedInfo);
  };

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.scrollViewContent}>
      <ImageBackground
        source={require('../../assets/images/Frame.png')}
        style={styles.backgroundImage}>
        <View style={styles.smallView}>
          <View style={styles.orangeBox}>
            <TouchableOpacity onPress={handleBackPress}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>
          <Text style={styles.Maintext}>Personal Information</Text>
        </View>
      </ImageBackground>

      <View style={styles.imgBox}>
        <Image
          source={require('../../assets/images/lady.png')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.penContainer}>
          <Image
            source={require('../../assets/images/penIcon.png')}
            style={styles.pen}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        {Object.keys(userInfo).map((key, index) => (
          <View key={index}>
            <View style={styles.itemContainer}>
              <Text style={styles.label}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Text>
              <Text style={styles.value}>{userInfo[key]}</Text>
            </View>
            {index < Object.keys(userInfo).length - 1 && (
              <View style={styles.separator} />
            )}
          </View>
        ))}

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>{
              console.log('User Info being sent to EditScreen:', userInfo);
              navigation.navigate('EditScreen', {userInfo, updateUserInfo})
            }}>
            <Image
              source={require('../../assets/images/penIcon.png')}
              style={styles.pen}
            />
            <Text style={styles.buttonText}>Edit Information</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    alignSelf: 'center',
    width: 415,
    height: 180,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
  },
  Maintext: {
    fontSize: 20,
    color: '#FD7E14',
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
  imgBox: {
    alignSelf: 'center',
    marginTop: -80,
    position: 'relative',
  },
  image: {
    width: 149,
    height: 149,
  },
  penContainer: {
    position: 'absolute',
    bottom: -2,
    right: 1,
  },
  pen: {
    width: 30,
    height: 30,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#0D0C221A',
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FD7E14',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 50,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 24,
    marginLeft: 10,
  },
});

export default App;
