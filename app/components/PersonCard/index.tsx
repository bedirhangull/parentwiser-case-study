import React from "react";
import { View, Text } from "react-native";
import { SortButton } from "@components"
import { TrashIcon, PencilIcon } from "react-native-heroicons/solid"
import COLORS from "@colors"

interface IPersonCard {
    name: string
    age: number
    hometown: string
    deleteAction: () => void
    editAction: () => void
}

const PersonCard = (props: IPersonCard) => {

    const { name, age, hometown, deleteAction, editAction } = props;

    return (
        <View className="flex bg-white w-full border-neutral-200 border rounded-md">
            <View className="flex flex-row p-2 border-b border-neutral-200 items-center">
                <Text className="mr-auto font-montBold text-xs text-black">{name}</Text>
                <View className="flex-row">
                    <SortButton icon={() => <TrashIcon size={24} color={COLORS.somberRed} />} onPress={() => deleteAction()} className="mr-4" />
                    <SortButton icon={() => <PencilIcon size={24} color={COLORS.lighGray} />} onPress={() => editAction()} />
                </View>
            </View>
            <View>
                <View>
                    <View className="flex flex-row p-4">
                        <Text className="font-montRegular text-xs text-gray-500">Age</Text>
                        <Text className="ml-auto font-montSemiBold text-xs text-black">{age}</Text>
                    </View>
                    <View className="flex flex-row p-4">
                        <Text className="font-montRegular text-xs text-gray-500">Hometow</Text>
                        <Text className="ml-auto font-montSemiBold text-xs text-black">{hometown}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PersonCard;