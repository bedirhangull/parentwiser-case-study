import React from "react";
import { Text, View } from "react-native";
import { PersonalCard, MenuButton } from "@components";
import { useRoute } from '@react-navigation/native';
import { MenuItems, BottomMenuItems } from "@utils";

const DrawerMenu = () => {
    
    // TODO --> if I will need to add new page on project I should handle the status prop
    const route = useRoute();
    console.log(route.name)

    return (
        <View className="p-2 h-full">
            <View className="flex flex-row items-center mr-auto p-4">
                <View className="h-8 w-2 bg-primary" />
                <Text className="ml-2 font-montSemiBold text-lg">CRUD OPERATIONS</Text>
            </View>
            <View className="my-4">
                <PersonalCard role="admin" avatar="https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png" status="active" name="Bedirhan"  />
            </View>
            <View>
                {MenuItems.map((item: IMenuItem, key: number) => {
                   return(
                       <MenuButton key={key} active={item.status} icon={() => item.icon} menuTitle={item.title} />
                   ) 
                })}
            </View>
            <View className="mt-auto">
                {BottomMenuItems.map((item: IMenuItem, key: number) => {
                    return(
                       <MenuButton key={key}  active={item.status} icon={() => item.icon} menuTitle={item.title} />
                    )
                })}
            </View>
        </View>
    )
}

export default DrawerMenu;