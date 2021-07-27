/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <Text style={styles.sectionTitle}>Build Uploaded from GITHUB Actions</Text>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    margin: 50,
    color: 'red',
  },
});

export default App;
