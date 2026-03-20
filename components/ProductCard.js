import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.img} />
      <Text>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: 120, marginRight: 10 },
  img: { width: 120, height: 80, borderRadius: 10 },
});
