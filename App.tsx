import React from 'react';
import {UtilityThemeProvider} from 'react-native-design-utility';
import {theme} from './src/constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigators/MainStackNavigator';

//Each list item should open a webview for the corresponding content on ign.com when tapped (except comments).
//install react-native-vector-icons
//install react-native-webview

const App = () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </UtilityThemeProvider>
  );
};

export default App;
