import { useAudioPlayer } from "expo-audio";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import CommonButton from "../common/CommonButton";
type Props = {
  uri: string;
  onRetry: () => void;
  onSubmit: () => void;
};
const AudioListener = ({ uri, onRetry, onSubmit }: Props) => {
  const player = useAudioPlayer(uri);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const playDuration = useSharedValue(0);
  const animatedDuration = useAnimatedStyle(() => {
    return {
      width: `${playDuration.value}%`,
    };
  });

  const handleAudioListen = () => {
    if (!isPlaying) {
      if (isFinished) {
        player.seekTo(0);
        setIsFinished(false);
      }
      player.play();
      setIsPlaying(true);
    } else {
      player.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isPlaying) {
      interval = setInterval(() => {
        const current = player.currentTime ?? 0;
        const duration = player.duration ?? 0;

        playDuration.value = Math.floor((current / duration) * 100);

        if (duration > 0 && current >= duration) {
          setIsPlaying(false);

          player.pause();

          playDuration.value = 0;
          setIsFinished(true);
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isPlaying, player, playDuration]);

  return (
    <View className="my-20 flex-col gap-6 items-center">
      {/* tracker */}

      <View className="h-1.5 w-[90%] bg-primary/30 rounded-full">
        <Animated.View
          style={[animatedDuration]}
          className="h-full bg-primary rounded-full absolute top-0 left-0 z-10"
        ></Animated.View>
      </View>

      <View className="w-full flex-col gap-4">
        <View className="flex-row gap-4">
          <CommonButton
            text={isPlaying ? "Pause" : "Tap to listen"}
            onPress={handleAudioListen}
            reverseItems
            isFlex
            isTransparent
          />
          <CommonButton
            text={"Retry"}
            onPress={onRetry}
            reverseItems
            isFlex
            isTransparent
          />
        </View>

        <CommonButton text="Submit for mapping" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default AudioListener;
