import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import WeatherData from './WeatherData';

const Weather = ({ loading, data }) => {
  return (
    <>
      {data && data.message ? (
        <View style={styles.container}>
          <Text style={styles.error}>{data.message}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size="large" color="#00d1b2" />
          ) : (
            <WeatherData data={data} />
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  },
  error: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default Weather;
