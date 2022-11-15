import React, { useState } from 'react'
import { StyleSheet, Text, Pressable, Keyboard } from 'react-native'
import { FlashCard } from '../../components/FlashCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export function Home() {
  const [wordAbove, setWordAbove] = useState('')
  const [wordBelow, setWordBelow] = useState('')

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <FlashCard wordAbove={'kant'} wordBelow={'macaco'} />
    </Pressable>
  )
}
