import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigation/ProductNavigator';
import { enableScreens } from 'react-native-screens';
enableScreens();

export default function App() {
  return (
    <View style={styles.container}>
      <DrawerNavigator />
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
