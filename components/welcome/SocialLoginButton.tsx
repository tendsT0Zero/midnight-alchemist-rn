import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  type: "google" | "apple";
  theme: "light" | "dark";
};

const SocialLoginButton = ({ type, theme }: Props) => {
  return (
    <Pressable
      className={`bg-${theme === "light" ? "white" : "gray-800"} rounded-full p-4 mb-4 flex-row items-center gap-4 justify-center`}>
        {type === "google" && <AntDesign name="google" size={24} color={theme === "light" ? "black" : "white"} />}
        {type === "apple" && <AntDesign name="apple" size={24} color={theme === "light" ? "black" : "white"} />}
      <Text className={`text-${theme === "light" ? "black" : "white"} font-bold text-[16px]`}>{type === "google" ? "Continue with Google" : "Continue with Apple"}</Text>
    </Pressable>
  );
};
export default SocialLoginButton;
