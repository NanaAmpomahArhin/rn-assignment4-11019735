import { View, TextInput, StyleSheet, Image } from "react-native";

export default function SearchContainer() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={require("../assets/searchIcon.png")}
          style={styles.searcIcon}
        />
        <TextInput
          placeholder="Search a job or position"
          style={styles.placeholderText}
        />
      </View>
      <View style={styles.filterIconContainer}>
        <Image
          source={require("../assets/filterIcon.png")}
          style={styles.searchFilterIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: 400,
    height: 60,
    top: 70,
    left: 70,
    position: "relative",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    width: 260,
    height: 48,
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    position: "absolute",
    alignItems: "center",
  },
  searcIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 20,
    opacity: 0.4,
  },
  placeholderText: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 22.5,
    color: "#95969D",
    position: "absolute",
    left: 50,
  },
  searchFilterIcon: {
    width: 26,
    height: 26,
    position: "absolute",
    left: 10,
    top: 10,
  },
  filterIconContainer: {
    flexDirection: "row",
    width: 48,
    height: 48,
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    left: 276,
    position: "relative",
  },
});
