import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Màn hình Quên mật khẩu</Text>
      <Text style={styles.subtext}>Đang phát triển...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
  },
});

export default ForgotPassword;