import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface IButton {
    buttonText: string
    onPress: () => void
    icon: () => React.ReactNode
}

const Button = (props: IButton) => {

    const { buttonText, onPress, icon } = props;

    return (
        <TouchableOpacity onPress={onPress} className="flex-row justify-center items-center p-4 bg-primary rounded-xl">
            {icon()}
            <Text className="text-sm ml-2 font-montBold text-white text-center">{buttonText}</Text>
        </TouchableOpacity>
    );
}

export default Button;