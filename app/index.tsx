import { Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { TrashIcon } from "react-native-heroicons/solid"
import * as SplashScreen from 'expo-splash-screen';
import { userApi } from "@api"
import { decode, encode } from "base-64"
import { Button, SortButton } from "@components"

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const deneme = async() => {
    const users = await userApi.listUsersUsersGet()
    console.log(users.data)
  }

  return (
    <View className="flex-1 bg-lighGray items-center justify-center">
      <SortButton icon={() => <TrashIcon size={24} color="red" />} />
    </View>
  );
}