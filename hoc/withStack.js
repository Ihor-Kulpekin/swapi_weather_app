import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { useScreenOptions } from '../utils/useScreenOptions';

const Stack = createStackNavigator();

const withStack = ({ navigation, component, headerTittle, name }) => {
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name={name}
          component={component}
          options={useScreenOptions({
            headerTitle: headerTittle,
            toggleDrawer: toggleDrawer
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withStack;
