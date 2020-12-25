import React from 'react';
import styled from 'styled-components/native';
import ListItem from '../moleculs/ListItem';
import { FlatList } from 'react-native';
import NoStarship from '../moleculs/NoStarship';

const WrapperListStarships = styled.View`
  flex: 1;
`;

const ListStarships = ({ starships }) => {
  return (
    <WrapperListStarships>
      {
        starships.results.length > 0 ? (
          <FlatList
            data={starships.results}
            renderItem={({ item }) => <ListItem key={item.name} starship={item}/>}
            keyExtractor={(item) => item.name}
          />
        ) : <NoStarship/>
      }
    </WrapperListStarships>
  );
};

export default ListStarships;
