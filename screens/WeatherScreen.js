import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../actions/weatherActions';
import { TouchableWithoutFeedback } from 'react-native-web';
import { View, StyleSheet } from 'react-native';
import Form from '../components/Form';
import Weather from '../components/Weather';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const WeatherScreen = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.weather);

  const searchSubmitHandler = () => {
    setLoading(true);
    dispatch(getWeather(search));
    setSearch('');
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback accessible={false}>
      <View style={styles.container}>
        <Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
        {data && data.cod !== '400' ? (
          <Weather loading={loading} data={data} error={error} />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WeatherScreen;
