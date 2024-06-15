import { View, StyleSheet } from "react-native";
import ProfileContainer from "../components/ProfileContainer";
import SearchContainer from "../components/SearchContainer";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProfileContainer />
      <SearchContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAFAFD",
  },
});
