import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Home from './pages/Home';

export default function RouterComponent() {
  return (
    <Router
      navigationBarStyle={{ 
        shadowOpacity: 0,
        borderBottomWidth: 1,
        elevation: 0,
      }}
      >
      <Stack key="root">
        <Scene key="mainPage" hideNavBar component={Home} initial />
      </Stack>
    </Router>
  );
}
