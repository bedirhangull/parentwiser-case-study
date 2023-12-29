import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

interface IMenuButton {
    menuTitle: string
    icon: () => React.ReactNode
    active: boolean
}

const MenuButton = (props: IMenuButton) => {

    const { menuTitle, icon, active } = props;

    const bgColorHandler = () => {
        return active ? "bg-orange-100" : "bg-white"
    }

    const textColorHandler = () => {
        return active ? "text-orange-400" : "text-gray-700"
    }

    const fontWeightHandler = () => {
        return active ? "font-montBold" : "font-montRegular" 
    }

    return (
        <View className={`flex flex-row w-full rounded-xl ${bgColorHandler()} items-center p-4 my-2`}>
            {icon()}
            <Text className={`"text-md ml-4 ${fontWeightHandler()} ${textColorHandler()}`}>{menuTitle}</Text>
        </View>
    )
}

export default MenuButton;