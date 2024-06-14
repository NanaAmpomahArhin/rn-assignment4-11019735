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
    Top: 64,
    Left: 24,
  },
  userName: {
    font: "Poppins",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 36,
  },
  userEmail: {
    font: "Poppins",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24,
  },
});

export default Profile;
