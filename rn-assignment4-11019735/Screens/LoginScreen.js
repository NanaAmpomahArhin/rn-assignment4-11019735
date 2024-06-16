import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import TextInputFunction from "../components/TextInputs";
import ButtonComponent from "../components/ButtonComponent";
import IconComponent from "../components/IconComponent";

export default function LoginScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.appName}>Jobizz</Text>
        <Text style={styles.greetings}>Welcome Back 👋 </Text>
        <Text style={styles.loginPrompt}>Let's log in. Apply to jobs!</Text>
        <TextInputFunction placeholderText="Name" />
        <TextInputFunction placeholderText="Email" />
        <ButtonComponent buttonType="Log in" buttonColor="#356899" />
        <View style={styles.otherOptionsWrapper}>
          <Image
            style={styles.lineStyle}
            source={require("./../assets/Line 182.png")}
          />
          <Text style={styles.otherSignInOptions}>Or continue with</Text>
          <Image
            style={styles.lineStyle}
            source={require("./../assets/Line 182.png")}
          />
        </View>
        <IconComponent />
        <View style={styles.signUpContainer}>
          <Text style={styles.noAccount}>Haven't an account?</Text>
          <Text style={styles.register}>Register</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FAFAFD",
  },
  container: {
    flexDirection: "column",
    flex: 1,
    top: 80,
    left: 24,
  },
  appName: {
    fontFamily: "sans-serif",
    fontWeight: "600",
    fontSize: 22,
    color: "#356899",
    lineHeight: 33,
  },
  greetings: {
    width: 210,
    height: 34,
    fontFamily: "sans-serif",
    fontWeight: "600",
    color: "#0D0D26",
    fontSize: 24,
    lineHeight: 33.6,
  },
  loginPrompt: {
    width: 170,
    height: 22,
    opacity: 0.4,
    fontFamily: "sans-serif",
    fontWeight: "400",
    fontSize: 14,
    color: "#0D0D26",
    marginTop: 7,
    marginBottom: 35,
  },
  otherOptionsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 327,
    height: 16,
    left: 2,
    marginTop: 80,
  },
  lineStyle: {
    width: 98,
    height: 0.5,
    backgroundColor: "#AFB0B6",
  },
  otherSignInOptions: {
    fontFamily: "sans-serif",
    fontWeight: "400",
    fontSize: 13,
    color: "#AFB0B6",
  },
  signUpContainer: {
    flexDirection: "row",
    width: 183,
    height: 18,
    left: 90,
    top: 60,
  },
  noAccount: {
    fontFamily: "sans-serif",
    fontWeight: "400",
    fontSize: 14,
    color: "#BDBEC2",
    marginRight: 3,
  },
  register: {
    fontFamily: "sans-serif",
    fontWeight: "400",
    fontSize: 14,
    color: "#356899",
  },
});
