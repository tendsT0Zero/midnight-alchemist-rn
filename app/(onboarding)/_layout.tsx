import Container from "@/components/common/Container";
import { Slot } from "expo-router";
const OnboardingLayout = () => {
  return (
    <Container>
      <Slot />
    </Container>
  );
};

export default OnboardingLayout;