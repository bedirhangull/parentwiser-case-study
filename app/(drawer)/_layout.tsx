import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerMenu } from "@layout"

const screenOptions = {
  headerShown: false,
}

export default function Layout() {
  return (
    <Drawer
      screenOptions={screenOptions}
      drawerContent={() => <DrawerMenu />}
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
