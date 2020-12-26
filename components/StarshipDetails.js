import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getStarshipDetails } from '../actions/starshipDetailsActions';
import Table from '../moleculs/Table';

const StarshipDetails = ({ route }) => {
  const [collapsed, setCollapsed] = useState(true);
  const starshipDetails = useSelector((state) => state.starshipDetails);
  const dispatch = useDispatch();
  const { id } = route.params;

  const fetchDetails = () => {
    dispatch(getStarshipDetails(id));
  };

  const fetchAdditionalData = (action, dataArray) => {
    dispatch(action(dataArray));
    setCollapsed(!collapsed);
  };

  useEffect(fetchDetails, []);

  return (
    <View>
      {starshipDetails.loading ? (
        <ActivityIndicator size="large" color="#477EFF"/>
      ) : (
        <Table starship={starshipDetails?.starship} collapsed={collapsed} fetchAdditionalData={fetchAdditionalData} />
      )}
    </View>
  );
};

export default StarshipDetails;
