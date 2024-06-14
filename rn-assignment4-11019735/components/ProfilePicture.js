import { Image, StyleSheet } from "react-native";

export default function ProfilePicture() {
  return (
    <Image
      style={styles.image}
      source={require("../assets/ProfilePicture.png")}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
});
