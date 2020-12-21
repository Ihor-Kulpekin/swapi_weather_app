import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import starshipPhoto from '../assets/starship.png';
import { useNavigation, StackActions } from '@react-navigation/native';

const WrapperCard = styled(Card)`
  margin-bottom: 20px;
  flex: 1;
`;

const StyledText = styled(Text)`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ListItem = ({ starship }) => {
  const navigation = useNavigation();
  const segments = starship.url.split('/');
  const id = Number(segments[segments.length - 2]);

  const goToDetails = () => {
    navigation.dispatch(StackActions.push('StarshipDetails', { id: id }));
  };

  return (
    <TouchableOpacity onPress={goToDetails}>
      <WrapperCard>
        <Card.Cover source={starshipPhoto} resizeMode="contain" />
        <Card.Content>
          <StyledText>{starship.name}</StyledText>
        </Card.Content>
      </WrapperCard>
    </TouchableOpacity>
  );
};

export default ListItem;
