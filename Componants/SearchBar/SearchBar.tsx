import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { hp, wp } from '../../shared/utils/responsiv';

interface SearchProps {
  searchInputData: (data: string) => void;
}

const SearchBar = ({searchInputData}: SearchProps) => {
  const [search, setSearch] = useState<string>();

  let typingTimeout;

  const handleChange = (data: string) => {
    setSearch(data);
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      searchInputData(data);
    }, 300);
  };

  return (
    <>
      <View style={style.container}>
        <Svg
          style={{marginLeft: wp(3)}}
          width={wp(9)}
          height={hp(9)}
          viewBox="0 0 30 30"
          fill="none">
          <Path
            d="M23.9192 22.8728L20.2803 19.2446C21.4544 17.7488 22.0914 15.9018 22.0891 14.0003C22.0891 12.3069 21.5869 10.6515 20.6461 9.24343C19.7053 7.8354 18.368 6.73797 16.8035 6.08993C15.239 5.44188 13.5175 5.27232 11.8566 5.60269C10.1957 5.93306 8.67006 6.74853 7.47263 7.94596C6.2752 9.14339 5.45974 10.669 5.12937 12.3299C4.799 13.9908 4.96855 15.7123 5.6166 17.2769C6.26464 18.8414 7.36207 20.1786 8.7701 21.1194C10.1781 22.0602 11.8335 22.5624 13.5269 22.5624C15.4284 22.5647 17.2755 21.9277 18.7712 20.7536L22.3994 24.3925C22.4989 24.4928 22.6173 24.5725 22.7477 24.6268C22.8781 24.6811 23.018 24.7091 23.1593 24.7091C23.3006 24.7091 23.4405 24.6811 23.5709 24.6268C23.7013 24.5725 23.8197 24.4928 23.9192 24.3925C24.0195 24.293 24.0991 24.1747 24.1535 24.0442C24.2078 23.9138 24.2358 23.7739 24.2358 23.6326C24.2358 23.4914 24.2078 23.3515 24.1535 23.221C24.0991 23.0906 24.0195 22.9722 23.9192 22.8728ZM7.10537 14.0003C7.10537 12.7302 7.48199 11.4887 8.1876 10.4326C8.89322 9.37662 9.89613 8.55355 11.0695 8.06751C12.2429 7.58148 13.5341 7.45431 14.7797 7.70209C16.0254 7.94987 17.1696 8.56146 18.0677 9.45954C18.9658 10.3576 19.5774 11.5018 19.8251 12.7475C20.0729 13.9932 19.9457 15.2843 19.4597 16.4577C18.9737 17.6311 18.1506 18.634 17.0946 19.3396C16.0386 20.0452 14.797 20.4219 13.5269 20.4219C11.8238 20.4219 10.1905 19.7453 8.98621 18.541C7.78193 17.3367 7.10537 15.7034 7.10537 14.0003Z"
            fill="white"
          />
        </Svg>
        <TextInput
          style={style.input}
          placeholderTextColor="#BBB"
          placeholder="Search"
          value={search}
          onChangeText={handleChange}
        />
      </View>
    </>
  );
};

export default SearchBar;

const style = StyleSheet.create({
  input: {
    flex: 1,
    height: hp(50),
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  container: {
    flexDirection: 'row',
    width: wp(95),
    height: hp(8),
    borderRadius: wp(8),
    backgroundColor: '#211F30',
    marginHorizontal: wp(3),
    marginVertical: hp(0.3),
    alignItems: 'center',
  },
});
