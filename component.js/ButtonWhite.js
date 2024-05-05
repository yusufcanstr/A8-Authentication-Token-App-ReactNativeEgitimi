import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function ButtonWhite({ children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FA7070",
    paddingHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
