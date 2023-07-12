//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {getUsers} from "../../src/services/userService";
import {User} from "../../src/context/auth";
import UserListItem from "../../src/components/UserListItem";

const NewChannel = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} />}
    />
  );
};

export default NewChannel;
