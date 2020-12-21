import React from 'react';
import styled from 'styled-components/native';
import ListItem from '../moleculs/ListItem';
import { FlatList } from 'react-native';

const WrapperListStarships = styled.View`
  flex: 1;
`;

const ListStarships = ({ starships }) => {
  return (
    <WrapperListStarships>
      <FlatList
        data={starships.results}
        renderItem={({ item }) => <ListItem key={item.name} starship={item} />}
        keyExtractor={(item) => item.name}
      />
    </WrapperListStarships>
  );
};

export default ListStarships;
