import React, {useEffect} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {getMovieCast} from '../../shared/actions/movieDetailsActions';
import {useDispatch, useSelector} from 'react-redux';
import {hp, rpFont, wp} from '../../shared/utils/responsiv';
import {useNavigation} from '@react-navigation/native';

const CastList = ({id, title}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieCast({id, title}));
  }, [id]);

  const {cast, isCastLoading} = useSelector(state => state?.movieDetails);
  console.log('==cast==>', cast?.cast);
  const navigation = useNavigation();
  return (
    <FlatList
      data={cast?.cast}
      keyExtractor={item => item.id.toString()}
      horizontal
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MoviesByCast', {id: item?.id})
            }>
            <View
              style={{
                width: wp(32),
                height: hp(29),
                borderRadius: wp(5),
                borderColor: '#D04848',
                borderWidth: wp(0.6),
                marginTop: hp(1.5),
                marginHorizontal: wp(2),
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Image
                style={{
                  width: wp(30),
                  height: hp(20),
                  borderRadius: wp(5),
                  resizeMode: 'cover',
                  overflow: 'hidden',
                }}
                source={{
                  uri: `https://image.tmdb.org/t/p/original${item?.profile_path}`,
                }}
              />
              {[item?.original_name, item?.character]?.map((data, index) => (
                <Text
                  style={{
                    fontSize: rpFont(1.6),
                    color: '#F3F8FF',
                    textAlign: 'center',
                    marginTop: hp(0.8),
                    fontWeight: index === 0 ? 'bold' : 'normal',
                    marginHorizontal: wp(2),
                  }}>
                  {data}
                </Text>
              ))}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default CastList;
