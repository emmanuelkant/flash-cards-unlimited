import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './src/screens/Home'
import { CreateFlashCard } from './src/screens/CreateFlashCard'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="home" component={CreateFlashCard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
