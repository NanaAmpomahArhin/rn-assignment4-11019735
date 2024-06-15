import { FlatList, View, Text, Image } from "react-native";

export default function JobsContainer({ data, styles }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
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
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
