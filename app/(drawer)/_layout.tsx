import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomDrawerContent = () => (
  <View style={styles.container}>
    <Text>Drawer Content</Text>
  </View>
);

const screenOptions = {
  headerShown: false,
}

export default function Layout() {
  return (
    <Drawer
      screenOptions={screenOptions}
      drawerContent={(props) => <CustomDrawerContent />}
    >
      <Drawer.Screen
        name="home/index"
        options={{
          drawerLabel: 'Home',
          title: 'Overview',
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
