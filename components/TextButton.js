import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TextButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'purple',
  },
  text: {
    color: 'purple',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default TextButton;
