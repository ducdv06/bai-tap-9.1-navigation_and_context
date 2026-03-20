import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const categories = [
  { id: '1', name: 'Điện thoại', icon: '📱' },
  { id: '2', name: 'Laptop', icon: '💻' },
  { id: '3', name: 'Tablet', icon: '📲' },
  { id: '4', name: 'Phụ kiện', icon: '🎧' },
  { id: '5', name: 'Đồng hồ', icon: '⌚' },
];

const popularItems = [
  { id: '1', name: 'iPhone 14 Pro Max', price: '34.990.000đ' },
  { id: '2', name: 'Samsung Galaxy S23 Ultra', price: '29.990.000đ' },
  { id: '3', name: 'MacBook Pro M2', price: '45.990.000đ' },
  { id: '4', name: 'iPad Pro M2', price: '24.990.000đ' },
];

const saleOffItems = [
  { id: '1', name: 'Tai nghe Sony', price: '2.990.000đ', originalPrice: '4.990.000đ' },
  { id: '2', name: 'Sạc dự phòng Anker', price: '890.000đ', originalPrice: '1.490.000đ' },
  { id: '3', name: 'Ốp lưng iPhone', price: '290.000đ', originalPrice: '590.000đ' },
  { id: '4', name: 'Cáp sạc nhanh', price: '390.000đ', originalPrice: '690.000đ' },
];

const Home = () => {
  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );

  const renderProductItem = ({ item }) => (
    <ProductCard item={item} onPress={() => console.log('Pressed', item.id)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm sản phẩm..."
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Top Categories */}
        <View style={styles.section}>
          <Header title="Danh mục nổi bật" />
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </View>

        {/* Popular Items */}
        <View style={styles.section}>
          <Header title="Sản phẩm phổ biến" />
          <FlatList
            data={popularItems}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          />
        </View>

        {/* Sale-off Items */}
        <View style={styles.section}>
          <Header title="Sản phẩm giảm giá" />
          <FlatList
            data={saleOffItems}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  section: {
    marginTop: 8,
    backgroundColor: '#fff',
  },
  categoryList: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 4,
  },
  categoryName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
});

export default Home;