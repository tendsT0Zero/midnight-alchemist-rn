import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

const AppScrollView = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex-1 pb-[130px]">{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AppScrollView;
