import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ViewNotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Notes</Text>
      {/* Your logic to fetch and display notes goes here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
