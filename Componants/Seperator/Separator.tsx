import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={style.sep} />
    </View>
  );
};

export default Separator;

const style = StyleSheet.create({
  sep: {
    marginTop: 10,
    width: 200,
    height: 3,
    borderRadius: 10,
    backgroundColor: '#FFF',
    opacity: 0.5,
  },
});
