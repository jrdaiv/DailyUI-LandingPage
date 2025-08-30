import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LandingPage() {


  return (
    <ScrollView className="flex-1 bg-gray-900">
      {/* Hero Section */}
      <View className="items-center justify-center px-6 py-20">
        <Text className="text-4xl font-bold text-white text-center">
          Welcome to My Dev Journey 🚀
        </Text>
        <Text className="text-lg text-gray-300 mt-4 text-center">
          100 Days of Code Challenge - Building and Growing as a Developer
        </Text>

        <TouchableOpacity className="mt-6 bg-blue-500 px-6 py-3 rounded-full">
          <Text className="text-white font-semibold">Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View className="px-6 py-10">
        <Text className="text-2xl font-bold text-white mb-6 text-center">
          Challenges Completed ✅
        </Text>

        <View className="space-y-4">
          <View className="bg-gray-800 p-5 rounded-xl">
            <Text className="text-white font-semibold">Challenge 1</Text>
            <Text className="text-gray-300">Landing Page with React</Text>
          </View>
          <View className="bg-gray-800 p-5 rounded-xl">
            <Text className="text-white font-semibold">Challenge 2</Text>
            <Text className="text-gray-300">Todo App with State Management</Text>
          </View>
          <View className="bg-gray-800 p-5 rounded-xl">
            <Text className="text-white font-semibold">Challenge 3</Text>
            <Text className="text-gray-300">Recipe Finder using API</Text>
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View className="items-center justify-center px-6 py-16">
        <Text className="text-xl text-white font-semibold text-center mb-4">
          Want to follow along with my journey?
        </Text>
        <TouchableOpacity className="bg-green-500 px-6 py-3 rounded-full">
          <Text className="text-white font-semibold">Join the Journey</Text>
        </TouchableOpacity>
      </View>

      {/* Footer / Note */}
      <View className="px-6 py-10 border-t border-gray-700">
        <Text className="text-gray-400 text-center leading-6">
          I am currently on my fourth day, fourth challenge. I'm sure it's going 
          to get much harder, but I can't wait and hope by the end of this 100 days 
          it makes me a better developer and closer to getting a job in this industry. 
          Here are the 3 challenges I've done thus far.
        </Text>
      </View>
    </ScrollView>
  )
}