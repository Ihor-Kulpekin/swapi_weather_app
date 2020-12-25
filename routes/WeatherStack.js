import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { useScreenOptions } from '../utils/useScreenOptions';
import WeatherScreen from '../screens/WeatherScreen';

const Stack = createStackNavigator();

const WeatherStack = () => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
      navigation.dispatch(DrawerActions.toggleDrawer())
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="WeatherStack"
          component={WeatherScreen}
          options={useScreenOptions({
            headerTitle: 'weather',
            toggleDrawer: toggleDrawer
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WeatherStack;
