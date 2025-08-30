import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function LandingPage() {


  return (
    <ScrollView className="flex-1 bg-gray-900">

      {/* Hero Section */}
      <View className="items-center justify-center px-6 py-20">

          <Text className="text-4xl font-bold m-10 text-white text-center">
            Welcome to My Dev Journey 🚀
          </Text>
        <ImageBackground source={require('../assets/403ce37b-24e9-422b-82a0-ee722fdf9fda.jpg')} className="w-full h-64 rounded-lg overflow-hidden">
        </ImageBackground>
        <Text className="text-2xl font-bold text-gray-300 underline mt-12 text-center">
          100 Days of Code Challenge - Building and Growing as a Software Developer
        </Text>
      </View>

      {/* Features Section */}
      <View className="px-6 ">
        <Text className="text-2xl font-bold text-white mb-6 text-center">
          Challenges Completed ✅
        </Text>

        <View className="space-y-4 items-center">
          <View className="bg-gray-800 p-5 rounded-xl w-full mb-2">
            <Text className="text-white font-semibold">DailyUI Challenge 1</Text>
            <Text className="text-gray-300">Signup Page</Text>
          </View>
          <View className="bg-gray-800 p-5 rounded-xl w-full mb-2">
            <Text className="text-white font-semibold">DailyUI Challenge 2</Text>
            <Text className="text-gray-300">Credit Card Checkout</Text>
          </View>
          <View className="bg-gray-800 p-5 rounded-xl w-full mb-2">
            <Text className="text-white font-semibold">DailyUI Challenge 3</Text>
            <Text className="text-gray-300">Landing Page</Text>
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View className="items-center justify-center px-6 py-16">
        <Text className="text-xl text-white font-semibold text-center mb-4">
          Want to follow along with my journey?
        </Text>
        <TouchableOpacity className="bg-green-500/70 px-6 py-3 rounded-full">
          <Text className="text-white font-semibold">Follow my Journey</Text>
        </TouchableOpacity>
      </View>

      {/* Footer / Note */}
      <View className="px-6 py-12 border-t gap-3 border-gray-700">
        <Text className="text-gray-400 text-center ">
          Built by Anthony 🙋‍♂️
        </Text>
        <Text className="text-gray-400 text-center ">
          React Native + Expo + Nativewind
        </Text>
      </View>
    </ScrollView>
  )
}