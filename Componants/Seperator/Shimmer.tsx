import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

// export const ShimmerPlaceholderComp = ({length, style, shimDirection}) => {
//     const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
//     return (
//         <View style={shimDirection}>
//           {Array.from({length: length}).map((_, index) => (
//             <ShimmerPlaceholder key={index} style={style}/>
//           ))}
//         </View>
//     )
// }

export const ShimmerPlaceholderComp = ({ length, style, shimDirection }) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  // Function to chunk the array into groups of size 'chunkSize'
  const chunkArray = (arr, chunkSize) => {
    return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
      arr.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  };

  const chunks = chunkArray(Array.from({ length: length }), 3);

  return (
    <View style={shimDirection}>
      {chunks.map((chunk, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'row' }}>
          {chunk.map((_, colIndex) => (
            <ShimmerPlaceholder key={colIndex} style={style} />
          ))}
        </View>
      ))}
    </View>
  );
};