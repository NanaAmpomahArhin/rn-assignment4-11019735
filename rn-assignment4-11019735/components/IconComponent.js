import { FlatList, Image, StyleSheet, View } from "react-native";
import { iconData } from "../Data/IconData";

export default function IconComponent() {
  return (
    <View style={styles.allIconContainer}>
      <FlatList
        data={iconData}
        renderItem={({ item }) => (
          <View style={styles.iconContainer}>
            <Image style={styles.imageStyles} source={item.image} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  allIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: 327,
    height: 56,
    top: 30,
    left: 68,
  },
  iconContainer: {
    width: 56,
    height: 56,
    marginRight: 20,
    borderRadius: 28,
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  imageStyles: {
    width: 26,
    height: 26,
  },
});
