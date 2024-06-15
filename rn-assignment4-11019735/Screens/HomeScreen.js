import { View, StyleSheet } from "react-native";
import ProfileContainer from "../components/ProfileContainer";
import SearchContainer from "../components/SearchContainer";
import JobsContainer from "../components/JobsContainer";
import { featuredJobs } from "../Data/FeaturedJobsData";
import { featuredJobsStyles } from "../Styles/FeaturedJobsStyles";
import { popularJobs } from "../Data/PopularJobsData";
import { popularJobsStyles } from "../Styles/PopularJobsStyles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProfileContainer />
      <SearchContainer />
      <JobsContainer
        data={featuredJobs}
        styles={featuredJobsStyles}
        isHorizontal={true}
        title="Featured Jobs"
      />
      <JobsContainer
        data={popularJobs}
        styles={popularJobsStyles}
        isHorizontal={false}
        title="Popular Jobs"
      />
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
