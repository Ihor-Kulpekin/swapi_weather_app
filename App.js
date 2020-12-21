import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppDrawerRoute from './routes/AppDrawerRoute';

export default function App() {
  return (
    <Provider store={store}>
      <AppDrawerRoute />
    </Provider>
  );
}

console.log(App);
