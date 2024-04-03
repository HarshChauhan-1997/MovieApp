import React from 'react';
import {StyleSheet, View} from 'react-native';
import {hp} from '../../shared/utils/responsiv';

interface data {
  marginT? : number;
}

const Separator = ({marginT}: data) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={[style.sep, {marginTop: marginT ? hp(marginT) : hp(2.5)}]} />
    </View>
  );
};

export default Separator;

const style = StyleSheet.create({
  sep: {
    width: 200,
    height: 3,
    borderRadius: 10,
    backgroundColor: '#FFF',
    opacity: 0.5,
  },
});
