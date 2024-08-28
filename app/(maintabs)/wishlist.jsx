import { View, Text } from 'react-native'
import React from 'react'
import FavoritesCard from '../../components/FavoritesCard'

export default function wishlist() {
  return (
    <View className="p-6">
      <FavoritesCard/>
    </View>
  )
}