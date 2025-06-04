import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes } from '../utils/sizes';

export const Button = ({
  style = {},
  textStyle = {},
  width = 200,
  height = 50,
  textColor = colors.white,
  size = fontSizes.md,
  backgroundColor = colors.lightRed,
  ...props
}) => {
  return (
    <TouchableOpacity 
      style={[styles(width, height, textColor, backgroundColor, size).button, style]} 
      onPress={props.onPress}
    >
      <Text 
        style={[styles(width, height, textColor, backgroundColor, size).text, textStyle]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (width: number, height: number, textColor: string, backgroundColor: string, size: number) => ({
  button: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColor,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: size,
  },
  text: {
    color: textColor,
    fontSize: size,
    fontWeight: 'bold',
  },
});