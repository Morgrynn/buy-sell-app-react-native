import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const IconButton = ({ name, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Ionicons name={name} color={'purple'} size={28} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: 'purple',
  //     width: '100%',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     padding: 20,
  //     borderRadius: 8,
  //   },
  //   text: {
  //     color: 'white',
  //     fontWeight: '500',
  //     fontSize: 16,
  //   },
});

export default IconButton;
