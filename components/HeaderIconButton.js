import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import IconButton from './IconButton';

const HeaderIconButton = ({ name, onPress }) => {
  return <IconButton name={name} style={styles.container} onPress={onPress} />;
};

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});

export default HeaderIconButton;
