import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import {ModalScreen} from '../commons/ModalScreen';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false, presentation: 'modal'}}>
      <MainStack.Screen name="Tabs" component={TabNavigator} />
      <MainStack.Screen name="Modal" component={ModalScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
