import { Image, StyleSheet, View } from "react-native";

export default function ProfilePicture() {
  return (
    <View style={styles.profilePictureContainer}>
      <Image
        style={styles.image}
        source={require("../assets/ProfilePicture.png")}
      />
      <Image
        style={styles.ellipse}
        source={require("../assets/Ellipse 767.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profilePictureContainer: {
    width: 54,
    height: 54,
    left: 30,
    position: "relative",
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 27,
    left: 30,
  },
  ellipse: {
    backgroundColor: "white",
    width: 8,
    height: 8,
    position: "absolute",
    left: 69,
    top: 6,
  },
});
