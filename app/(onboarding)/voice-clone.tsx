import AppText from "@/components/common/AppText";
import CommonButton from "@/components/common/CommonButton";
import {LinearGradient} from "expo-linear-gradient";
import HeaderText from "@/components/common/HeaderText";
import AudioListener from "@/components/onboarding/AudioListener";
import {
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioRecorder,
} from "expo-audio";

import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import AudioInputButton from "@/components/onboarding/AudioInputButton";
const VoiceClone = () => {
  const [isRecording, setIsRecording] = useState(false);

  const [recordedAudio, setRecordedAudio] = useState<string | null>("www.ggg.com");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errorOccured, setErrorOccured] = useState(false);


  const gradientConfig={
    colors:["transparent", "#00f2fe", "transparent"],
    style:{height:2,opacity:0.6},
    start:{x:0,y:0},
    end:{x:1,y:0}
  }

  useEffect(() => {
    const getPermission = async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();

      if (!status.granted) {
        alert("Microphone permission denied!");
      }

      await setAudioModeAsync({
        allowsRecording: true,
        playsInSilentMode: true,
      });
    };

    getPermission();
  }, []);

  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  // recording start function
  const startRecording = async () => {
    await audioRecorder.prepareToRecordAsync({
      android: {
        outputFormat: "mpeg4",
        audioEncoder: "aac",
        extension: ".m4a",
      },
      ios: { extension: ".m4a", audioQuality: 1, outputFormat: "mpeg4aac" },
    });

    await audioRecorder.record();
    setIsRecording(true);
  };

  // recording stop function
  const stopRecording = async () => {
    await audioRecorder.stop();
    setIsRecording(false);
    setRecordedAudio(audioRecorder.uri);
  };

  const handleAudioInputClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleRetry = () => {
    setRecordedAudio(null);
    setIsRecording(false);
    setErrorOccured(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true); // লোডিং শুরু

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const res = {
        data: {
          success: true,
          voice_id: "fake_voice_id_12345",
          message: "Voice cloned successfully (Mocked)",
        },
      };

      if (res.data.success) {
        alert("Voice saved successfully! (Simulated)");
      }

      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setErrorOccured(true);
      setIsSubmitting(false);
    }
  };
  return (
    <View className="flex-1">
      {/* Header Title with subtitle */}
      <HeaderText
        Title="Your Voice, Immortalized."
        SubTitle="Record a short phrase so your reflections can be delivered in your own voice."
        HasBackButton={false}
      />

      {/* if any error show that */}
      {errorOccured ? (
        <View className="flex-1">
          <View className="flex-1 h-[70vh] justify-center">
            <View className="flex-col w-full items-center gap-6 relative z-50">

              <View className="flex-col gap-2">
                <AppText className="text-center text-xl" fontWeight="semibold">
                  Voice Clone Failed.
                </AppText>
                <AppText className="text-center text-textGray">
                  Please try again and provide another sample.
                </AppText>
              </View>
            </View>
          </View>

          <CommonButton text="Retry" onPress={handleRetry} />
        </View>
      ):(
        <View className="flex-1 justify-between">
          <View className="mt-14 p-4 bg-frostedBg rounded-xl">
            <View className="flex-col gap-5">
              <AppText className="text-center text-lg" fontWeight="medium">
                I am the alchemist
              </AppText>
              <LinearGradient
                colors={gradientConfig.colors}
                style={gradientConfig.style}
                start={gradientConfig.start}
                end={gradientConfig.end}
              />
            </View>
            <AppText className="text-center text-sm mt-4 text-textGray">
              Record a sample of your voice
            </AppText>
          </View>

          {recordedAudio ? (
            <AudioListener
              uri={recordedAudio}
              onRetry={handleRetry}
              onSubmit={handleSubmit}
            />
          ) : (
            <AudioInputButton
              isRecording={isRecording}
              onPress={handleAudioInputClick}
            />
          )}

          <View className="mt-10">
            <View className="flex-col gap-5">
              <AppText
                className="text-center text-2xl text-primary"
                fontWeight="medium"
              >
                {isRecording
                  ? "Recording.."
                  : recordedAudio
                    ? "Audio Recorded"
                    : isSubmitting
                      ? "Processing Ephemerally..."
                      : "Tap to record"}
              </AppText>
              <LinearGradient
                colors={gradientConfig.colors}
                style={gradientConfig.style}
                start={gradientConfig.start}
                end={gradientConfig.end}
              />
            </View>
            <AppText className="text-center text-sm mt-4 text-textGray">
              Audio is deleted immediately after mapping.
            </AppText>

            
          </View>

        </View>
      )}
    </View>
  );
};

export default VoiceClone;
