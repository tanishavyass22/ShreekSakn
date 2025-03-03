import {StyleSheet, Text as RNText, View} from 'react-native';
import React from 'react';
import fonts from './Fonts';
import colors from './Colors';

export const Typography = ({
  size = 14,
  children,
  font = fonts?.Roboto_Regular,
  color = colors?.black,
  flex,
  disabled = true,
  onPress = () => {},
  style = {},
  numberOfLines,
  lineHeight,
  letterSpacing,
  textAlign = 'left',
  textDecorationLine,
  textDecorationStyle,
  textAlignVertical = 'center',
  ...props
}) => {
  return (
    <RNText
      numberOfLines={numberOfLines}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.font,
        {
          fontSize: size,
          color: color,
          flex: flex,
          textAlign: textAlign,
          lineHeight: lineHeight,
          fontFamily: font,
          letterSpacing: letterSpacing,
          textDecorationLine: textDecorationLine,
          textDecorationStyle: textDecorationStyle,
          textAlignVertical: textAlignVertical,
        },
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  font: {
    // fontFamily: fonts[type] || undefined,
    textAlignVertical: 'center',
    includeFontPadding: false,
    // marginVertical: -10,
    // backgroundColor: 'red'
  },
});
