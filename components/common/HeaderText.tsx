import { View, Text,Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
type Props={
    Title: string;
    SubTitle?: string;
    HasBackButton: boolean;
}


const HeaderText = ({Title, SubTitle, HasBackButton}: Props) => {
  return (
    <View className="flex-col gap-1">
      <View className="flex-row items-center gap-4">
        {HasBackButton && (
          <Pressable
            onPress={() => router.back()}
            className="size-10 bg-mattBlack items-center justify-center rounded-full border-[0.5px] border-frostedBorder"
          >
            <Feather name="arrow-left" size={24} color="white" />
          </Pressable>
        )}
        <Text className='text-white text-[24px] font-bold'>
          {Title}
        </Text>
      </View>
      {SubTitle && (
        <Text className="text-[14px] text-white/70"> {SubTitle} </Text>
      )}
    </View>
    );
};
export default HeaderText;