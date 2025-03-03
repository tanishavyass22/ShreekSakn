import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import ArrowRight from '../../assets/images/arrow-right.svg';
import {useNavigation} from '@react-navigation/native';
import LanguageModal from './LanguageModal';
import DeleteModal from './DeleteModal'

const App = () => {
  const navigation = useNavigation();
  const [deletemodalVisible, setdeleteModalVisible] = useState(false);
  const [languagemodalVisible, setlanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageSelect = language => {
    setSelectedLanguage(language);
    setlanguageModalVisible(false);
  };
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
          <Text style={styles.text}>Settings</Text>
        </View>
      </ImageBackground>
      <View style={styles.invisibleContainer}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('NotificationScreen')}
        style={styles.smallBox}>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/images/notification.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.boxTxt}>Notification</Text>
          <ArrowRight
            style={styles.icon1}
          />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => setlanguageModalVisible(true)}
        style={styles.smallBox}>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/images/language.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.boxTxt}>Language</Text>
          <View style={styles.languageSelection}>
            <Text style={styles.selectedLanguage}>
              {selectedLanguage || ''}
            </Text>
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => setlanguageModalVisible(true)}>
              <ArrowRight style={styles.icon2} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => setdeleteModalVisible(true)}
        style={styles.smallBox}>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/images/trash.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.boxTxt}>Delete Account</Text>
          <TouchableOpacity onPress={() => setdeleteModalVisible(true)}>
          <ArrowRight style={styles.icon3} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <LanguageModal
        visible={languagemodalVisible}
        onClose={() => setlanguageModalVisible(false)}
        onLanguageSelect={handleLanguageSelect}
      />
      <DeleteModal
              visible={deletemodalVisible}
              onClose={() => setdeleteModalVisible(false)}
              onLogout={() => {
                console.log("User logged out");
                setdeleteModalVisible(false);
              }}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  invisibleContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 800,
  },
  smallBox: {
    marginTop: 30,
    flexDirection: 'row',
    width: 384,
    height: 66,
    borderRadius: 14,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#0C16220F',
    marginVertical: -12,
    elevation: 5,
    backgroundColor: 'white',
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 10,
    backgroundColor: '#FD7E141A',
    borderWidth: 1.5,
    borderColor: '#FD7E141A',
    marginLeft: 10,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTxt: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    marginTop: 20,
    marginLeft: 10,
    color: '#1F1F1F',
  },
  icon1: {
    marginTop: 20,
    marginLeft: 200,
  },
  icon2: {
    marginTop: 1,
    marginLeft: 5,
  },
  icon3: {
    marginTop: 20,
    marginLeft: 170,
  },
  image: {
    width: 24,
    height: 24,
  },
  languageSelection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedLanguage: {
    fontSize: 16,
    color: '#1F1F1F',
    marginLeft: 140,
  },
  separator: {
    height: 20,
    width: 1,
    backgroundColor: '#0D0C221A',
    marginHorizontal: 10,
  },
});

export default App;
