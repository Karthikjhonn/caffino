import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false,animation: 'slide_from_right'}} >
        <Stack.Screen name='index'  />
        <Stack.Screen name='(maintabs)'  />
    </Stack>
  )
}