import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>User Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserScreen;