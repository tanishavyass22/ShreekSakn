import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../Constants/Dimensions';

const CustomButton = ({ title, onPress, backgroundColor = '#FD7E14', textColor = '#FFFFFF', style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }, style]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: windowWidth * 0.9, 
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position:'absolute',
    top: 710,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
});

export default CustomButton;
