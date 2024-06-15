import { FlatList, View, Text, Image, StyleSheet } from "react-native";

export default function JobsContainer({ data, styles, isHorizontal, title }) {
  return (
    <View style={styles.container}>
      <View style={defaultStyles.headerContainer}>
        <Text style={defaultStyles.titleWrapper}>{title}</Text>
        <Text style={defaultStyles.seeAllWrapper}>See all</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={[styles.cardWrapper, { backgroundColor: item.color }]}>
            <View style={styles.imageAndRoleContainer}>
              <View style={styles.imageContainer}>
                {" "}
                <Image style={styles.image} source={item.image} />{" "}
              </View>
              <View style={styles.roleAndOrganizationContainer}>
                <Text style={styles.role}>{item.role}</Text>
                <Text style={styles.organization}>{item.organization}</Text>
              </View>
            </View>
            <View style={styles.salaryAndLocationContainer}>
              <Text style={styles.salary}>{item.salary}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal={isHorizontal}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const defaultStyles = StyleSheet.create({
  headerContainer: {
    width: 310,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
    top: -10,
  },
  titleWrapper: {
    fontFamily: "Sans-serif",
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  seeAllWrapper: {
    width: 42,
    height: 21,
    fontFamily: "Sans-serif",
    fontWeight: 400,
    fontSize: 13,
    color: "#95969D",
  },
});
