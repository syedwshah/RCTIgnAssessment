import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {Box} from 'react-native-design-utility';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import WebView from 'react-native-webview';
import {theme} from '../constants/theme';

export const ModalScreen = () => {
  const navigation = useNavigation();
  const routeParams = (useRoute().params ?? {}) as {
    uri: string;
  };

  return (
    <SafeAreaView style={s.safeArea}>
      <Box f={1}>
        <Box p="sm">
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon name="x" size={30} color={theme.color.ignRed} />
          </TouchableOpacity>
        </Box>
        <Box center>
          <WebView
            source={{uri: routeParams.uri}}
            startInLoadingState={true}
            renderLoading={() => (
              <ActivityIndicator color={theme.color.ignRed} />
            )}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
});
