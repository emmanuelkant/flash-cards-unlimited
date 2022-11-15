import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export function FlashCard({ wordAbove, wordBelow }) {
  return (
    <View style={styles.flashCard}>
      <Text style={styles.word}>{wordAbove}</Text>
      <View style={styles.separator} />
      <Text style={styles.word}>{wordBelow}</Text>
    </View>
  )
}
