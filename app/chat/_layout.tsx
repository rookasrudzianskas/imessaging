//@ts-nocheck
import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stack, useRouter} from "expo-router";
import { StreamChat } from 'stream-chat';
import {Chat, OverlayProvider} from "stream-chat-expo";
import {useAuth} from "../../src/context/auth";
import { Entypo } from '@expo/vector-icons';
import {TouchableOpacity} from "react-native";

const API_KEY = 'ktv3jrkywj6j';
const client = StreamChat.getInstance(API_KEY);

const ChatLayout = () => {
  const router = useRouter();
  const {user} = useAuth();
  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: user.id.toString(),
          name: user.name,
          image: 'https://yt3.googleusercontent.com/IQ4OqurVrPmACaf3h5fgTcRInn6QoHz0xN4O5qzhuhY7UKgpDg2A4mGyhWW5vcaGSiVbf_FLdQ=s900-c-k-c0x00ffffff-no-rj',
        },
        user.streamToken
      );

      const channel = client.channel('livestream', 'public', {
        name: 'Public',
        // image: 'https://i.imgur.com/fR9Jz14.png',
      });
      await channel.create();
    }
    connectUser();

    return () => {
      client.disconnectUser();
    };
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen
            name={'index'}
            options={{
              title: 'Messages',
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerRight: () => (
                <TouchableOpacity onPress={() => router.push('/chat/newChannel')}>
                  <Entypo name="chat" size={18} color="royalblue" />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </Chat>
    </OverlayProvider>
  );
};

export default ChatLayout;
