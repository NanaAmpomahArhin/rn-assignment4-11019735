import { View, Text, StyleSheet } from "react-native";

function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Eric Atsu</Text>
      <Text style={styles.userEmail}>eric@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 254,
    height: 55,
    left: 24,
  },
  userName: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 36,
    color: "#0D0D26",
  },
  userEmail: {
    font: "sans-serif",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 24,
    color: "#95969D",
  },
});

export default Profile;
