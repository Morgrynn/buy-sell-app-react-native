import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductNavigator from './navigation/ProductNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 18,
  },
});
