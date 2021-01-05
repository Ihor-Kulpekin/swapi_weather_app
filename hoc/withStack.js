import React from 'react';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { useScreenOptions } from '../utils/useScreenOptions';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const withStack = (Component) => {
  return () => {
    const navigation = useNavigation();
    const toggleDrawer = () => {
      navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName={Array.isArray(Component) ? Component[0].initialRouteName : null}>
          {
            !Array.isArray(Component) ?
              Object.values(Component).map((item) => {
                return (
                  <Stack.Screen key={item}
                                name={item.name}
                                component={item.Component}
                                options={useScreenOptions({
                                  headerTitle: item.headerTitle,
                                  toggleDrawer: toggleDrawer
                                })}
                  />
                );
              }) : (
                Component.map((item) => {
                  return (
                    <Stack.Screen key={item}
                                  name={item.name}
                                  component={item.Component}
                                  options={useScreenOptions({
                                    headerTitle: item.headerTitle,
                                    toggleDrawer: toggleDrawer
                                  })}
                    />
                  );
                })
              )
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
};

export default withStack;
