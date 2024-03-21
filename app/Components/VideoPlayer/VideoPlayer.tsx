import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {hp, wp} from '../../shared/utils/responsiv';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {ShimmerPlaceholderComp} from '../Seperator/Shimmer';
import {getMovieTrailer} from '../../shared/actions/movieDetailsActions';

export const VideoPlayerComp = ({id}) => {
  const [teaser, setTeaser] = useState();
  const dispatch = useDispatch();
  const {Trailer, isTrailerLoading} = useSelector(state => state?.movieDetails);

  useEffect(() => {
    dispatch(getMovieTrailer(id));
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
        <YoutubePlayer
          height={hp(30)}
          width={wp(100)}
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
