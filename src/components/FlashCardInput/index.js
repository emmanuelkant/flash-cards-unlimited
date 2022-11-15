import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { styles as FlashCardStyles } from '../FlashCard/styles'

export const styles = StyleSheet.create({
  ...FlashCardStyles,
  word: {
    ...FlashCardStyles.word,
    width: '100%',
    height: '45%',
    textAlign: 'center'
  }
})

export function FlashCardInput({ setWordAbove, setWordBelow, saveWords }) {
  return (
    <View style={styles.flashCard}>
      <TextInput
        style={styles.word}
        onChangeText={(text) => setWordAbove(text)}
        placeholder="Dog"
        multiline
      />
      <View style={styles.separator} />
      <TextInput
        style={styles.word}
        onChangeText={(text) => setWordBelow(text)}
        placeholder="Dog in other language :)"
        multiline
      />
    </View>
  )
}
