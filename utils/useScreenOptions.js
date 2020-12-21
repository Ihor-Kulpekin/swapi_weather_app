import React from 'react';

import Burger from '../icons/Burger';
import ArrowLeft from '../icons/ArrowLeft';

export const useScreenOptions = (options) => {
  return {
    headerTitle: options.headerTitle,
    headerStyle: {
      backgroundColor: '#477EFF'
    },
    headerTitleStyle: {
      color: '#fff',
      textTransform: 'uppercase'
    },
    headerBackTitleVisible: false,
    headerBackImage: () => <ArrowLeft />,
    headerRight: () => <Burger onPress={options.toggleDrawer} />
  };
};
