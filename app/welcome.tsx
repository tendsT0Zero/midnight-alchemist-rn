import Container from "@/components/common/Container";
import { Image, Text, View } from "react-native";
import SocialLoginButton from "../components/welcome/SocialLoginButton";
import { Link } from "expo-router";
const MainLogo = require("../assets/Logo.png");

const Welcome = () => {
  const IconSize = 105;

  return (
    <Container>
      <View className="flex-1 pb-8">
        {/* top view */}
        <View className="flex-col items-center gap-2 flex-1 justify-center">
          <Image
            source={MainLogo}
            style={{ width: IconSize, height: IconSize }}
          />
          <Text className="text-white text-[28px] font-playfairBoldItalic">
            Midnight Alchemist
          </Text>
          <Text className="text-gray-400 font-bold text-[16px] font-playfairRegularItalic">
            Your Identity. Reconstructed
          </Text>
        </View>

        {/* social login buttons */}
        <View className="flex-col gap-4 mb-5">
          <SocialLoginButton type="google" theme="light" />
          <SocialLoginButton type="apple" theme="dark" />
        </View>
      </View>

      {/* terms and conditions */}
      <Text className=" text-gray-400 text-center text-[16px]">
          By continuing, you agree to our
          <Link href={"/"} className="text-primary">
            {" "}
            Terms of Service
          </Link>{" "}
          and
          <Link href={"/"} className="text-primary">
            {" "}
            Privacy Policy.
          </Link>
        </Text>
    </Container>
  );
};

export default Welcome;
