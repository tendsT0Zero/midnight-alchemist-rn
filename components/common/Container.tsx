import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView, type Edge } from "react-native-safe-area-context";

import AppScrollView from "./AppScrollView";

type Props = {
  children: React.ReactNode;
  edges?: Edge[];
  enableScrolling?: boolean;
};

const Container = ({
  children,
  edges = ["top", "bottom"],
  enableScrolling = true,
}: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black" edges={edges}>
      <StatusBar style="light" animated />

      <View className="flex-1 px-5 pt-3">
        {enableScrolling ? <AppScrollView>{children}</AppScrollView> : children}
      </View>
    </SafeAreaView>
  );
};
export default Container;
