import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowLeft } from '../../Constants/Icon'; 
import { windowHeight, windowWidth } from '../../Constants/Dimensions';
import Images from '../../Constants/Images';
import Colors from '../../Constants/Colors';

const Header = ({ title, onBackPress }) => {
  return (
    <ImageBackground
      source={Images.bgFrame}
      style={styles.backgroundImage}
    >
      <View style={styles.smallView}>
        <View style={styles.orangeBox}>
          <TouchableOpacity onPress={onBackPress}>
            <ArrowLeft />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        width: windowWidth,
        height: 130,
        resizeMode: 'cover',
        overflow: 'hidden',
        alignSelf: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 10,
      },
      text: {
        color: Colors.orange,
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
        borderRadius: 14,
        backgroundColor: Colors.orange,
        marginLeft: 15,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default Header;
