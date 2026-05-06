import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

const AnimatedButton = ({ price, cycle, onPress }: any) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    
    rotation.value = withRepeat(
      withTiming(360, { duration: 3000, easing: Easing.linear }),
      -1 
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="relative rounded-full overflow-hidden items-center justify-center p-[2px] my-6 h-20"
    >
      <Animated.View
        style={[animatedStyle, { position: "absolute", width: "200%", aspectRatio: 1 }]}
      >
        <LinearGradient
          colors={["transparent", "#FFF500", "transparent"]} // কমলা/সোনালি আলো
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{height:2,opacity:0.7}}
            
        />
      </Animated.View>


      <View className="bg-[#1A1A1A] w-full h-full rounded-full flex-row items-baseline justify-center pt-4">
        <Text className="text-white text-4xl font-bold">{price}</Text>
        <Text className="text-gray-400 text-lg ml-2">{cycle}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default AnimatedButton;