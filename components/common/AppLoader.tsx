import {View,ActivityIndicator} from "react-native";

type Props = {
    size?: "small" | "large";
    color?: string;
}
const AppLoader = ({size='large', color='#00F2FE'}: Props) => {
    return(
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}