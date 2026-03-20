import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {
  const { username, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.name}>{username || 'User'}</Text>
      <Text style={styles.desc}>Welcome to your profile</Text>

      <Button title="Sign Out" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  header: {
    width: '100%',
    height: 120,
    backgroundColor: '#00bcd4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  name: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  desc: { color: 'gray', marginBottom: 20 },
});