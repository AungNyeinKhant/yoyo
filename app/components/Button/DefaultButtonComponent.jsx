import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CommonStyles } from '../../style/CommonStyles';

const DefaultButtonComponent = ({ title, backgroundColor, onPress,color,otherStyle,otherTextStyle,disable=false }) => {
  return (
    <TouchableOpacity
      style={[CommonStyles.defaultButton, { backgroundColor: backgroundColor },otherStyle]}
      onPress={onPress}
      disabled={disable}
    >          
      <Text
        style={[
          CommonStyles.defaultButtonText,
          color && { color: color },
          otherTextStyle
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};



export default DefaultButtonComponent;
