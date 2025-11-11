import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, SIZES } from "./theme";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.searchRow}>
        <Ionicons name="search" size={18} />
        <TextInput placeholder="Search products" style={styles.input} editable={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
  },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 8, color: COLORS.text },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  input: { marginLeft: 8, fontSize: 14, color: COLORS.mute, flex: 1 },
});
