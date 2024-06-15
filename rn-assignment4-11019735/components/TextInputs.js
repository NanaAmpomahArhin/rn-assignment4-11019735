import { TextInput, StyleSheet } from "react-native";

export default function TextInputFunction({ placeholderText }) {
  return (
    <TextInput placeholder={placeholderText} style={styles.textInputStyles} />
  );
}

const styles = StyleSheet.create({
  textInputStyles: {
    width: 327,
    height: 52,
    fontFamily: "sans-serif",
    fontSize: 14,
    borderColor: "#AFB0B6",
    fontWeight: 500,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    color: "#AFB0B6",
    marginBottom: 15,
  },
});
