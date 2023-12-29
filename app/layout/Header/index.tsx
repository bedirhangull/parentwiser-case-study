import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import COLORS from "@colors";
import { Bars3Icon } from "react-native-heroicons/solid"
import { useNavigation } from "expo-router";
import { DrawerActions } from '@react-navigation/native';

interface IHeader {
    headerTitle: string
}

const Header = (props: IHeader) => {

    const { headerTitle } = props;
    const navigation = useNavigation();

    const openTheMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    return(
        <View className="flex flex-row bg-white p-4">
            <View className="flex flex-row items-center mr-auto">
                <View className="h-8 w-2 bg-primary" />
                <Text className="ml-2 font-montSemiBold text-lg">{headerTitle}</Text>
            </View>
            <TouchableOpacity onPress={openTheMenu}>
                <Bars3Icon color={COLORS.lighGray} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;