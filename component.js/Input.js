import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({
  label,
  keyboardType,
  onUpdateValue,
  value,
  secure,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  labelInvalid: {
    color: '#E21818',
  },
  label: {
    color: "black",
    marginBottom: 3,
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F4F9F9",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    color: "black",
  },
  inputInvalid: {
    backgroundColor: '#FCC8D1',
  }
});
