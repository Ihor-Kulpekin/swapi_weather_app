import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { getStarships } from '../actions/starshipsActions';
import ListStarships from '../components/ListStarships';
import Input from '../components/Input';

const WrapperStashipsScreen = styled.View`
  flex: 1;
  padding: 20px;
`;

const StarshipsScreen = () => {
  const [value, setValue] = useState('');
  const starships = useSelector((state) => state.starships);
  const loading = useSelector((state) => state.starships.loading);
  const dispatch = useDispatch();

  const fetchStarships = () => {
    dispatch(getStarships(value));
  };

  const handleChangeText = (value)=>{
    setValue(value);
  }

  useEffect(fetchStarships, [value]);

  return (
    <WrapperStashipsScreen>
      <Input handleChangeText={handleChangeText}/>
      {loading ? (
        <ActivityIndicator size="large" color="#477EFF" />
      ) : (
        <ListStarships {...starships} />
      )}
    </WrapperStashipsScreen>
  );
};

export default StarshipsScreen;
