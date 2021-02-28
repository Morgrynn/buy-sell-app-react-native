import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ loading }) => {
  if (!loading) {
    return <View />;
  }
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size='large' color={'black'} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Loading;
