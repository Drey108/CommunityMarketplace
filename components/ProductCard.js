import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ title, price }) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imgText}>Image</Text>
      </View>
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // elevation (Android)
    elevation: 3,
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: "#eef0f3",
    alignItems: "center",
    justifyContent: "center",
  },
  imgText: { color: "#9aa0a6" },
  info: { padding: 10 },
  title: { fontSize: 14, fontWeight: "600", marginBottom: 6 },
  price: { fontSize: 13, fontWeight: "700" },
});
