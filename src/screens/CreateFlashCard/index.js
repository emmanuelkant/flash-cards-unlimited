import React, { useState } from 'react'
import { StyleSheet, Text, Pressable, Keyboard } from 'react-native'
import { FlashCardInput } from '../../components/FlashCardInput'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export function CreateFlashCard() {
  const [wordAbove, setWordAbove] = useState('')
  const [wordBelow, setWordBelow] = useState('')

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <FlashCardInput setWordAbove={setWordAbove} setWordBelow={setWordBelow} />
    </Pressable>
  )
}
