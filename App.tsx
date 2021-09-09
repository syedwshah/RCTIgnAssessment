import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.safeArea} />;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
