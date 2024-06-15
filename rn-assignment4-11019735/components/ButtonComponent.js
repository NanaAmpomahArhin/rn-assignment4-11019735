import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonComponent({ buttonType, buttonColor }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]}>
      <Text style={styles.buttonText}>{capitalizeFirstLetter(buttonType)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 327,
    height: 56,
    left: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 19,
  },
  buttonText: {
    fontFamily: "sans-serif",
    fontWeight: "500",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
