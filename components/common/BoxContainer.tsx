import { Text, View } from "react-native";

type Props = {
  children: React.ReactNode;
  title: string;
};

const BoxContainer = ({ children, title }: Props) => {
  return (
    <View className="px-4 py-2 bg-mattBlack rounded-xl flex-col border border-frostedBg">
      <Text className="text-white text-[16px] font-primarySemibold mb-4">{title}</Text>
      {children}
    </View>
  );
};
export default BoxContainer;
