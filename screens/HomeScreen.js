import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { COLORS } from "../components/theme";

const SAMPLE = Array.from({ length: 10 }).map((_, i) => ({
  id: String(i + 1),
  title: `Handmade Product ${i + 1}`,
  price: `₹${(i + 1) * 199}`,
}));

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Community Marketplace" />
      <FlatList
        data={SAMPLE}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.list}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => <ProductCard {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  list: { padding: 12, paddingTop: 8, paddingBottom: 40 },
});
