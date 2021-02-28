import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Input = ({ style, ...props }) => {
  return <TextInput {...props} style={[styles.text, style]} />;
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    fontSize: 20,
  },
});

export default Input;
