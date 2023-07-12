import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Redirect, useRouter} from "expo-router";
import React from "react";

export default function Page() {
  const router = useRouter();

  return (
    <Redirect href={'/chat'} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  button: {
    backgroundColor: "#E5E5E5",
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#38434D",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
