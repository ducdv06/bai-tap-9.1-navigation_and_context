import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CustomTextInput(props) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 12,
    marginVertical: 8,
  },
});