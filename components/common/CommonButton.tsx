import { ActivityIndicator, Pressable, View } from "react-native";
import AppText from "./AppText";

type Props = {
  text?: string;
  onPress?: () => void;
  isDisabled?: boolean;
  isTransparent?: boolean;
  isLoading?: boolean;
  isDangerTheme?: boolean;
  isGray?: boolean;
  fontWeight?: "normal" | "medium" | "semibold" | "bold";
  isFlex?: boolean;
  icon?: React.ReactNode;
  reverseItems?: boolean;
};

const CommonButton = ({
  text,
  onPress,
  isDisabled,
  isLoading,
  fontWeight = "medium",
  isFlex,
  icon,
  reverseItems,
  isTransparent,
}: Props) => {
  return (
    <Pressable
      onPress={() => {
        if (isDisabled || isLoading) return;

        onPress && onPress();
      }}
      className={`border-2 ${isTransparent ? `border-primary` : `border-[rgba(255,255,255,0.12)]`} py-3.5 w-full rounded-full ${isDisabled ? `opacity-60` : ``} ${isTransparent ? `bg-transparent` : `bg-primary`} ${isFlex ? `flex-1` : ``} `}
    >
      {isLoading ? (
        <ActivityIndicator color={`#000000`} size={`small`} />
      ) : (
        <View className={`flex-row items-center justify-center gap-3`}>
          {reverseItems && icon}
          <AppText
            className={`text-center text-lg ${isTransparent ? `text-white` : `text-textBlack`}`}
            fontWeight={fontWeight}
          >
            {text}
          </AppText>

          {!reverseItems && icon}
        </View>
      )}
    </Pressable>
  );
};

export default CommonButton;
