import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StarshipsStack from './StarshipsStack';
import WeatherStack from './WeatherStack';

const Drawer = createDrawerNavigator();

export default function AppDrawerRoute() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Weather">
        <Drawer.Screen
          name="Weather"
          component={WeatherStack}
          options={{
            title: 'Home'
          }}
        />
        <Drawer.Screen
          name="Starships"
          component={StarshipsStack}
          options={{
            title: 'Starships'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
