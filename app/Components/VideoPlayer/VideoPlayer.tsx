import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {hp, wp} from '../../shared/utils/responsiv';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {ShimmerPlaceholderComp} from '../Seperator/Shimmer';
import {getMovieTrailer} from '../../shared/actions/movieDetailsActions';

export const VideoPlayerComp = ({id, title}) => {
  const [teaser, setTeaser] = useState();
  const dispatch = useDispatch();
  const {Trailer, isTrailerLoading} = useSelector(state => state?.movieDetails);

  useEffect(() => {
    dispatch(getMovieTrailer({id, title}));
  }, [id]);

  return (
    <>
      {isTrailerLoading ? (
        <ShimmerPlaceholderComp
          style={styles.shimmer}
          shimDirection={styles.shimmerDirection}
          length={1}
        />
      ) : (
        <View
          style={{
            width: wp(100),
            marginVertical: hp(1.5),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{borderRadius: 20, overflow: 'hidden'}}>
            <YoutubePlayer
              height={hp(25)}
              width={wp(95)}
              play={false}
              videoId={Trailer && Trailer[0]}
              playList={Trailer}
              mute={true}
              initialPlayerParams={{
                controls: true,
                loop: true,
                rel: false,
                iv_load_policy: 3,
              }}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  shimmer: {
    width: wp(100),
    height: hp(30),
  },
  shimmerDirection: {
    display: 'flex',
    flexDirection: 'row',
  },
});
