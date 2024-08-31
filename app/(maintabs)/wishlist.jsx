import { View, Text } from 'react-native'
import React from 'react'
import FavoritesCard from '../../components/Favorites/FavoritesCard'
import { StatusBar } from 'expo-status-bar'

export default function wishlist() {
  return (
    <View className="py-6 px-4">
      <FavoritesCard/>
      <StatusBar style='dark' />
    </View>
  )
}