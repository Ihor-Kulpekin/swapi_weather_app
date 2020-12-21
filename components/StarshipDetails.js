import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getStarshipDetails } from '../actions/starshipDetailsActions';

const StarshipDetails = ({ route }) => {
  const starshipDetails = useSelector((state) => state.starshipDetails);
  const dispatch = useDispatch();
  const { id } = route.params;

  const fetchDetails = () => {
    dispatch(getStarshipDetails(id));
  };

  useEffect(fetchDetails, []);

  return (
    <View>
      {starshipDetails.loading ? (
        <ActivityIndicator size="large" color="#477EFF" />
      ) : (
        <Text>{JSON.stringify(starshipDetails)}</Text>
      )}
    </View>
  );
};

export default StarshipDetails;
