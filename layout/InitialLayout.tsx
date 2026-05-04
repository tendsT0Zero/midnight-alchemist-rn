import { Stack } from "expo-router";

const InitialLayout = () => {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
      initialRouteName="(onboarding)"
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="(onboarding)" />
    </Stack>
  );
};

export default InitialLayout;
