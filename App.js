import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import store from './store/store';
import AppDrawerRoute from './routes/AppDrawerRoute';

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <AppDrawerRoute />
    </Provider>
  );
}
