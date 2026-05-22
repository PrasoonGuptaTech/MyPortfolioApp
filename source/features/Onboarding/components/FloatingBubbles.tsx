import React, { useEffect } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { PortfolioColors } from '../../../constants/colors';

function FloatingBubbles(props: any) {
  const { floatingBubbleTitle, floatingBubbleImage, floatingBubbleStyle, floatingImageStyle, floatingTextStyle } =
    props;
  const bubblesStyles = styles();
  const floatingProgress = useSharedValue(0);
  useEffect(() => {
    floatingProgress.value = withRepeat(
      withSequence(withTiming(1, { duration: 1000 }), withTiming(0, { duration: 1000 })),
      -1,
      true,
    );
  }, [floatingProgress]);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(floatingProgress.value, [0, 1], [0, 10]),
        },
        {
          translateX: interpolate(floatingProgress.value, [0, 1], [0, 10]),
        },
      ],
    };
  });
  return (
    <Animated.View style={[bubblesStyles.floatingBubblesView, floatingBubbleStyle, animatedStyle]}>
      <Image source={floatingBubbleImage} style={floatingImageStyle} />
      <Text style={[bubblesStyles.techStackName, floatingTextStyle]}>{floatingBubbleTitle}</Text>
    </Animated.View>
  );
}

const styles = () =>
  StyleSheet.create({
    floatingBubblesView: {
      height: 31,
      borderWidth: 1,
      borderColor: PortfolioColors.black,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      paddingHorizontal: 8,
    },
    techStackName: {
      fontWeight: '600',
      fontSize: 13,
      letterSpacing: 0.65,
      fontStyle: 'normal',
      textAlign: 'center',
    },
  });

export default FloatingBubbles;
