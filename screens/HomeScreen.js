import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const SAMPLE = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i + 1),
  title: `Product ${i + 1}`,
  price: `₹${(i + 1) * 250}`,
}));

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Community Marketplace" />
      <FlatList
        data={SAMPLE}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        numColumns={2}
        renderItem={({ item }) => <ProductCard {...item} />}
        ListFooterComponent={<View style={{ height: 32 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f7" },
  list: { paddingHorizontal: 12, paddingTop: 12 },
});
