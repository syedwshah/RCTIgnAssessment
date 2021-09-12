import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box} from 'react-native-design-utility';

import {ArticlesScreen} from '../components/articles/ArticlesScreen';
import {VideosScreen} from '../components/videos/VideosScreen';
import {theme} from '../constants/theme';

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
    <Tab.Navigator
      screenOptions={{
        headerTitle: 'IGN',
        headerStyle: {backgroundColor: theme.color.ignRed},
        headerTitleStyle: {
          color: theme.color.white,
          fontWeight: 'bold',
          fontSize: 28,
          paddingBottom: 12,
        },
      }}>
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
