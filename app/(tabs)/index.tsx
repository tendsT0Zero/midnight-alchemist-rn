import React from "react";
import { View, Text, Pressable, SafeAreaView,Image } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black px-8">
      <StatusBar style="light" />
      
      {/* logo section */}
      <View className="flex-1 items-center justify-center mt-10">
        {/* logo */}
        <View className="mb-8">
            <Image source={require("../../assets/Logo.png")} className="w-24 h-24" /> 
        </View>

        {/* title */}
        <Text className="text-white text-2xl font-bold italic text-center">
          Midnight Alchemist
        </Text>
        
        {/* tagline */}
        <Text className="text-gray-400 text-lg mt-2 text-center">
          Your Identity. Reconstructed
        </Text>
      </View>

      {/* login buttons */}
      <View className="w-full pb-12 gap-y-4">
        
        {/* Continue with Google */}
        <Pressable 
          className="bg-white h-[56px] w-full rounded-2xl flex-row items-center justify-center gap-x-3 active:opacity-80"
          onPress={() => console.log("Google Login")}
        >
          <AntDesign name="google" size={20} color="red" />
          <Text className="text-black text-base font-semibold">
            Continue with Google
          </Text>
        </Pressable>

        {/* Continue with Apple */}
        <Pressable 
          className="bg-[#1a1a1a] border border-gray-800 h-[56px] w-full rounded-2xl flex-row items-center justify-center gap-x-3 active:opacity-80"
          onPress={() => console.log("Apple Login")}
        >
          <FontAwesome name="apple" size={22} color="white" />
          <Text className="text-white text-base font-semibold">
            Continue with Apple
          </Text>
        </Pressable>

        {/* legal text */}
        <View className="mt-4 px-4">
          <Text className="text-gray-500 text-[11px] text-center leading-4">
            By continuing, you agree to our{" "}
            <Text className="text-primary">Terms of Service</Text> and{" "}
            <Text className="text-primary">Privacy Policy</Text>.
          </Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
}