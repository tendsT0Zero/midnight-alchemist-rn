import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, Pressable, View } from "react-native";

type Props = {
  isRecording: boolean;
  onPress: () => void;
  size?: "sm" | "lg";
};

const AudioInputButton = ({ isRecording, onPress, size = "lg" }: Props) => {
  const ring1Opacity = useRef(new Animated.Value(0.2)).current;
  const ring2Opacity = useRef(new Animated.Value(0.1)).current;
  const ring1Scale = useRef(new Animated.Value(1)).current;
  const ring2Scale = useRef(new Animated.Value(1)).current;

  const ring1Size = size === "sm" ? 110 : 170;
  const ring2Size = size === "sm" ? 130 : 200;

  const pulseAnimation = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (isRecording) {
      // Staggered pulse: ring1 leads, ring2 follows slightly behind
      const pulse = Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.parallel([
              Animated.timing(ring1Opacity, {
                toValue: 0.55,
                duration: 700,
                useNativeDriver: true,
              }),
              Animated.timing(ring1Scale, {
                toValue: 1.12,
                duration: 700,
                useNativeDriver: true,
              }),
            ]),
            Animated.parallel([
              Animated.timing(ring1Opacity, {
                toValue: 0.2,
                duration: 700,
                useNativeDriver: true,
              }),
              Animated.timing(ring1Scale, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
              }),
            ]),
          ]),
          Animated.sequence([
            Animated.delay(200),
            Animated.parallel([
              Animated.timing(ring2Opacity, {
                toValue: 0.35,
                duration: 700,
                useNativeDriver: true,
              }),
              Animated.timing(ring2Scale, {
                toValue: 1.1,
                duration: 700,
                useNativeDriver: true,
              }),
            ]),
            Animated.parallel([
              Animated.timing(ring2Opacity, {
                toValue: 0.1,
                duration: 700,
                useNativeDriver: true,
              }),
              Animated.timing(ring2Scale, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
              }),
            ]),
          ]),
        ]),
      );

      pulseAnimation.current = pulse;
      pulse.start();
    } else {
      // Stop loop and fade both rings back to resting state
      pulseAnimation.current?.stop();
      Animated.parallel([
        Animated.timing(ring1Opacity, {
          toValue: 0.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(ring1Scale, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(ring2Opacity, {
          toValue: 0.1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(ring2Scale, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }

    return () => {
      pulseAnimation.current?.stop();
    };
  }, [isRecording, ring1Opacity, ring2Opacity, ring1Scale, ring2Scale]);
  return (
    <View
      className={`${size === "sm" ? `my-16` : `my-24`} items-center justify-center relative`}
    >
      <Pressable
        onPress={onPress}
        className={`${size === "sm" ? `size-24` : `size-[130px]`} items-center justify-center bg-primary rounded-full relative z-50`}
      >
        <FontAwesome
          name={isRecording ? "stop" : "microphone"}
          size={size === "sm" ? 35 : 60}
          color="white"
        />
      </Pressable>

      {/* Pulsing ring 1 — inner */}
      <Animated.View
        style={{
          position: "absolute",
          width: ring1Size,
          height: ring1Size,
          borderRadius: 85,
          backgroundColor: "rgba(0, 242, 254, 0.5)",
          opacity: ring1Opacity,
          transform: [{ scale: ring1Scale }],
        }}
      />

      {/* Pulsing ring 2 — outer */}
      <Animated.View
        style={{
          position: "absolute",
          width: ring2Size,
          height: ring2Size,
          borderRadius: 100,
          backgroundColor: "rgba(0, 242, 254, 0.8)",
          opacity: ring2Opacity,
          transform: [{ scale: ring2Scale }],
        }}
      />
    </View>
  );
};

export default AudioInputButton;
