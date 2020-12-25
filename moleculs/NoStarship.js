import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoStarship = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        No Starships
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  text: {
    color: '#477EFF',
    fontSize: 20
  }
});

export default NoStarship;
