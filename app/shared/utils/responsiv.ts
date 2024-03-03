import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const wp = (num: number) => {
  return widthPercentageToDP(num);
};
export const hp = (num: number) => {
  return heightPercentageToDP(num);
};
export const rpFont = (num: number) => {
  return RFPercentage(num);
};
