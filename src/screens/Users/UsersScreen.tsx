import { DefaultScreenProps } from '@navigators/navigators';
import { fetchUsers } from '@services/apis/users';
import { Datum } from '@typings/api/users';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

type UsersScreenProps = DefaultScreenProps<'Users'>;

export const UsersScreen: React.FC<UsersScreenProps> = () => {
  const [users, setUsers] = useState<Datum[]>([]);

  const getUserList = async () => {
    const response = await fetchUsers();
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <View>
      <>
        <Text>User list Screen</Text>
      </>
    </View>
  );
};
