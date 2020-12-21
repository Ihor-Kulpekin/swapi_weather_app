import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { getStarships } from '../actions/starshipsActions';
import ListStarships from '../components/ListStarships';

const WrapperStashipsScreen = styled.View`
  flex: 1;
  padding: 20px;
`;

const StarshipsScreen = () => {
  const starships = useSelector((state) => state.starships);
  const loading = useSelector((state) => state.starships.loading);
  const dispatch = useDispatch();

  const fetchStarships = () => {
    dispatch(getStarships(''));
  };

  useEffect(fetchStarships, []);

  return (
    <WrapperStashipsScreen>
      {loading ? (
        <ActivityIndicator size="large" color="#477EFF" />
      ) : (
        <ListStarships {...starships} />
      )}
    </WrapperStashipsScreen>
  );
};

export default StarshipsScreen;
