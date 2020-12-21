import React from 'react';

import Icon from 'react-native-vector-icons/Octicons';
import styled from 'styled-components/native';

const BurgerIcon = styled(Icon)`
    padding-left: 20px;
    margin-right: 10px;
`;

const MenuIcon = ({ onPress }) => (
    <BurgerIcon name="three-bars" size={30} color="#fff" onPress={onPress} />
);

export default MenuIcon;
