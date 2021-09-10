import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ArticlesScreen} from '../components/Articles';
import {VideosScreen} from '../components/Videos';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../constants/theme';
import {Box} from 'react-native-design-utility';

const SCREEN_OPTIONS: any = {
  headerTitle: 'IGN',
  headerStyle: {backgroundColor: theme.color.ignRed},
  headerTitleStyle: {
    color: theme.color.white,
    fontWeight: 'bold',
    fontSize: 28,
    paddingBottom: 12,
  },
};

const OPTIONS: any = {
  tabBarIcon: () => <Box />,
  tabBarLabelStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabBarActiveTintColor: theme.color.ignRed,
  tabBarInactiveTintColor: theme.color.grey,
};

const ArticlesStack = createNativeStackNavigator();

const ArticlesStackScreen = () => (
  <ArticlesStack.Navigator screenOptions={{headerShown: false}}>
    <ArticlesStack.Screen name="Articles" component={ArticlesScreen} />
  </ArticlesStack.Navigator>
);

const VideosStack = createNativeStackNavigator();

const VideosStackScreen = () => (
  <VideosStack.Navigator screenOptions={{headerShown: false}}>
    <VideosStack.Screen name="Videos" component={VideosScreen} />
  </VideosStack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={SCREEN_OPTIONS}>
      <Tab.Screen
        name="ArticlesStack"
        component={ArticlesStackScreen}
        options={{
          title: 'Articles',
          ...OPTIONS,
        }}
      />
      <Tab.Screen
        name="VideosStack"
        component={VideosStackScreen}
        options={{
          title: 'Videos',
          ...OPTIONS,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
