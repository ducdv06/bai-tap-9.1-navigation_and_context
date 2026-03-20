import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import { AuthContext } from '../context/AuthContext';

export default function SignIn() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput
        placeholder="Username"
        value={name}
        onChangeText={setName}
      />

      <CustomTextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Sign In" onPress={() => login(name)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
