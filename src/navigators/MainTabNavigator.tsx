import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../components/Home';
import {DetailsScreen} from '../components/Details';

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Details" component={DetailsScreen} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
