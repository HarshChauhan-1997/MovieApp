import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

export const ShimmerPlaceholderComp = ({length, style}) => {
    const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
    return (
        <View style={{display: "flex", flexDirection:"row"}}>
          {Array.from({length: length}).map((_, index) => (
            <ShimmerPlaceholder key={index} style={style}/>
          ))}
        </View>
    )
}