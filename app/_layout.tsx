import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import "./global.css";

import { PlayfairDisplay_700Bold_Italic } from "@expo-google-fonts/playfair-display";
import InitialLayout from "../layout/InitialLayout";

export default function RootLayout() {
  const [fontsloaded, error] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    PlayfairDisplay_700Bold_Italic,
  });

  if (!fontsloaded && !error) {
    return null;
  }

  return <InitialLayout />;
}
