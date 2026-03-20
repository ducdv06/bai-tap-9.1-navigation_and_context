import React from 'react';
import { View, TextInput, FlatList } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const data = [
  { id: '1', name: 'Pizza', image: 'https://i.imgur.com/0umadnY.jpg' },
  { id: '2', name: 'Burger', image: 'https://i.imgur.com/UPrs1EW.jpg' },
  { id: '3', name: 'Steak', image: 'https://i.imgur.com/MABUbpD.jpg' },
];

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput placeholder="Search..." style={{ borderWidth: 1, padding: 10, borderRadius: 10 }} />

      <Header title="Top Categories" />
      <FlatList horizontal data={data} renderItem={({ item }) => <ProductCard item={item} />} />

      <Header title="Popular Items" />
      <FlatList horizontal data={data} renderItem={({ item }) => <ProductCard item={item} />} />

      <Header title="Sale-off Items" />
      <FlatList horizontal data={data} renderItem={({ item }) => <ProductCard item={item} />} />
    </View>
  );
}