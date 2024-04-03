import React from 'react';
import { View, StyleSheet } from 'react-native';

const IndicatorDot = ({ color, size }) => {
  const dotStyle = {
    width: size,
    height: size,
    borderRadius: size / 2, // Makes it a circle
    backgroundColor: color
  };

  return <View style={dotStyle} />;
};

export default IndicatorDot;