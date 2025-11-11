import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS } from "./theme";
import { Ionicons } from "@expo/vector-icons";

export default function ProductCard({ title, price }) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.badge}><Text style={styles.badgeText}>New</Text></View>
        <TouchableOpacity style={styles.fav}><Ionicons name="heart-outline" size={18} /></TouchableOpacity>
      </View>

      <View style={styles.imageWrap}>
        <Image source={require("../assets/placeholder.png")} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>{title}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>{price}</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius,
    overflow: "hidden",
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  topRow: { position: "absolute", zIndex: 2, right: 8, left: 8, top: 8, flexDirection: "row", justifyContent: "space-between" },
  badge: { backgroundColor: COLORS.accent, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 20 },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "700" },
  fav: { backgroundColor: "rgba(255,255,255,0.7)", padding: 6, borderRadius: 18 },
  imageWrap: { height: 140, alignItems: "center", justifyContent: "center", backgroundColor: "#eef2f5" },
  image: { width: "86%", height: "86%", borderRadius: 8 },
  info: { padding: 12 },
  title: { fontSize: FONTS.title, fontWeight: "600", color: COLORS.text, marginBottom: 6 },
  bottomRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  price: { fontSize: FONTS.price, fontWeight: "800", color: COLORS.price },
  btn: { backgroundColor: COLORS.accent, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  btnText: { color: "#fff", fontWeight: "700" },
});
