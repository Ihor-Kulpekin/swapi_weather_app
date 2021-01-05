import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import withStack from '../hoc/withStack';
import WeatherScreen from '../screens/WeatherScreen';
import StarshipDetails from '../components/StarshipDetails';
import StarshipsScreen from '../screens/StarshipsScreen';

const Drawer = createDrawerNavigator();

const WeatherWithStack = withStack({
  Screens: {
    Component: WeatherScreen,
    headerTitle: 'weather',
    name: 'WeatherStack',
  }
});
const StarshipsWithStack = withStack([
    {
      Component: StarshipDetails,
      headerTitle: 'Starship Details',
      name: 'StarshipDetails',
      initialRouteName: 'Starships'
    },
    {
      Component: StarshipsScreen,
      headerTitle: 'Starships',
      name: 'Starships',
    }
  ]
);


export default function AppDrawerRoute() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Weather">
        <Drawer.Screen
          name="Weather"
          component={WeatherWithStack}
          options={{
            title: 'Home'
          }}
        />
        <Drawer.Screen
          name="Starships"
          component={StarshipsWithStack}
          options={{
            title: 'Starships'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
