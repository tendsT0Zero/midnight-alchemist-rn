import { Text, View } from "react-native";
import AnimatedButton from "./AnimatedButton";

type PricingCardProps = {
  title: string;
  subtitle: string;
  price: string;
  billingCycle: string;
  description: string;
  onPress: () => void;
};

const PricingCard = ({
  title,
  subtitle,
  price,
  billingCycle,
  description,
  onPress,
}: PricingCardProps) => {
  return (
    <View className="bg-[#121212] rounded-3xl p-6 w-full border border-gray-800">
      <View className="flex-col gap-1 mb-2">
        <Text className="text-white text-3xl font-semibold">{title}</Text>
        <Text className="text-gray-400 text-base">{subtitle}</Text>
      </View>

      <AnimatedButton price={price} cycle={billingCycle} onPress={onPress} />

      <Text className="text-gray-400 text-base font-medium pr-10">
        {description}
      </Text>
    </View>
  );
};
export default PricingCard;
