import { StyleSheet } from "react-native";

export const featuredJobsStyles = StyleSheet.create({
  container: {
    height: 400,
    top: 120,
    left: 70,
  },
  cardWrapper: {
    width: 280,
    height: 186,
    borderRadius: 24,
    backgroundColor: "#34A853",
    marginRight: 15,
    position: "relative",
    top: 0,
  },
  imageAndRoleContainer: {
    flexDirection: "row",
    width: 207,
    height: 47,
    position: "absolute",
    top: 15,
    left: 28,
  },
  imageContainer: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: "white",
    position: "relative",
    marginRight: 20,
  },
  image: {
    width: 22,
    height: 23.57,
    position: "absolute",
    top: 10,
    left: 10,
  },
  roleAndOrganizationContainer: {
    width: 145,
    height: 46,
    flexDirection: "column",
  },
  role: {
    fontFamiliy: "sans-serif",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 30.8,
    color: "white",
  },
  organization: {
    fontFamily: "sans-serif",
    fontWeight: "medium",
    fontSize: 14,
    color: "white",
    opacity: 0.75,
  },
  salaryAndLocationContainer: {
    flexDirection: "row",
    width: 236,
    height: 26,
    justifyContent: "space-between",
    position: "absolute",
    bottom: 15,
    left: 20,
  },
  salary: {
    font: "sans-serif",
    fontWeight: "500",
    fontSize: 15,
    color: "white",
  },
  location: {
    font: "sans-serif",
    fontWeight: "500",
    fontSize: 15,
    color: "white",
  },
});
