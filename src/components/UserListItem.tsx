import {View, Text, Pressable, TouchableOpacity, StyleSheet} from 'react-native';
import { User, useAuth } from '../context/auth';
import { useChatContext } from 'stream-chat-expo';
import { useRouter } from 'expo-router';

const UserListItem = ({ user }: { user: User }) => {
  const { client } = useChatContext();
  const { user: me } = useAuth();
  const router = useRouter();

  const startChannel = async () => {
    const channel = client.channel('messaging', {
      members: [user.id.toString(), me.id.toString()],
    });
    await channel.watch();

    router.push(`/chat/channel/${channel.id}`);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={startChannel}
      style={styles.container}
    >
      <Text style={styles.text}>{user.name}</Text>
    </TouchableOpacity>
  );
};

export default UserListItem;

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 14,
    backgroundColor: 'white',
    margin: 5,
    marginVertical: 3,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  }
})
