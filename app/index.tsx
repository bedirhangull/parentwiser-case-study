import { Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { AcademicCapIcon } from "react-native-heroicons/outline";
import { userApi } from "./services/api"
import { decode, encode } from "base-64"

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
      <TouchableOpacity onPress={() => deneme()}>
        <Text className='font-montBold text-2xl'>Inter asdasdBold</Text>
        <Text className='font-montRegular text-3xl'>Inter Regular</Text>
      <AcademicCapIcon size={30} color="red" />
      </TouchableOpacity>
      <Text className='font-montSemiBold text-4xl'>Inter SemiBold</Text>
    </View>
  );
}