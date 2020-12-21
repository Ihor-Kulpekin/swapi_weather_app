import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import withStack from '../hoc/withStack';
import WeatherScreen from '../screens/WeatherScreen';
import StarshipsStack from './StarshipsStack';

const Drawer = createDrawerNavigator();

export default function AppDrawerRoute() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Weather">
        <Drawer.Screen
          name="Weather"
          component={({ navigation }) =>
            withStack({
              component: WeatherScreen,
              headerTittle: 'weather',
              name: 'WeatherStack',
              navigation: navigation
            })
          }
          options={{
            title: 'Home'
          }}
        />
        <Drawer.Screen
          name="Starships"
          component={({ navigation }) => <StarshipsStack navigation={navigation} />}
          options={{
            title: 'Starships'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
