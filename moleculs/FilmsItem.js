import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FilmsItem = ({ film }) => (
  <View style={styles.container}>
        <Text style={styles.textItem}>Tittle: {film.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flex: 1,
  },
  textItem: {
    color: '#8E8E93',
    fontSize: 16
  }
});

export default FilmsItem;
