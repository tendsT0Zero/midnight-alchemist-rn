import { Text, View } from "react-native";

type Props = {
  children: React.ReactNode;
  title: string;
};

const BoxContainer = ({ children, title }: Props) => {
  return (
    <View className="p-4 bg-mattBlack rounded-xl flex-col gap-4 border border-frostedBg">
      <Text className="text-white text-[18px] font-bold mb-2">{title}</Text>
      {children}
    </View>
  );
};
export default BoxContainer;
