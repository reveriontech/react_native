import { Stack } from 'expo-router';
import React from 'react';
import { Platform, StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#6200EE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen 
        name="timepage" 
        options={{ title: 'Timer' }}  
      />
    </Stack>
  );
}
