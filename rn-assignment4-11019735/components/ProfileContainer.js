import { StyleSheet, View } from "react-native";
import Profile from "./Profile";
import ProfilePicture from "./ProfilePicture";

export default function ProfileContainer() {
  return (
    <View style={styles.container}>
      <Profile />
      <ProfilePicture />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 20,
    width: 350,
    height: 70,
    flexDirection: "row",

    left: 50,
  },
});
