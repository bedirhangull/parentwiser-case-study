import React from "react";
import { View, Image, Text } from "react-native";

interface IPersonalCard {
    name: string
    role: "admin" | "user" 
    status: "active" | "busy"
    avatar: string
}

const PersonalCard = (props: IPersonalCard) => {

    const { name, role, status, avatar } = props;

    const statusHandler = () => {
        return status == 'active' ? 'bg-green-400' : 'bg-red-400'
    }

    return(
        <View className="flex flex-row items-center w-full bg-gray-200 p-4 rounded-xl">
            <View>
                <View className={`h-4 w-4 z-10 right-0 -top-1 rounded-full absolute ${statusHandler()}`}/>
                <Image className="rounded-full h-12 w-12" source={{uri: avatar}} />
            </View>
            <View className="flex flex-col ml-4">
                <Text className="font-montSemiBold text-sm">{name}</Text>
                <Text className="font-montRegular text-sm">{role}</Text>
            </View>
        </View>
    )
}

export default PersonalCard;