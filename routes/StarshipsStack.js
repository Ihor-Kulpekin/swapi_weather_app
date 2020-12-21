import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { useScreenOptions } from '../utils/useScreenOptions';
import StarshipsScreen from '../screens/StarshipsScreen';
import StarshipDetails from '../components/StarshipDetails';

const Stack = createStackNavigator();

const StarshipsStack = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Starships">
        <Stack.Screen
          name="StarshipDetails"
          component={StarshipDetails}
          options={useScreenOptions({
            headerTitle: 'Starship Details',
            toggleDrawer: toggleDrawer
          })}
        />
        <Stack.Screen
          name="Starships"
          component={StarshipsScreen}
          options={useScreenOptions({
            headerTitle: 'Starships',
            toggleDrawer: toggleDrawer
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StarshipsStack;
