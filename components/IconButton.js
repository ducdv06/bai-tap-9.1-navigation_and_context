import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function IconButton({ title }) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
