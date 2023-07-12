//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useRouter} from "expo-router";

const ChatScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text>
        byrookas 🚀
      </Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  }
});
