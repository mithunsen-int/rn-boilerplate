import axiosInstance from '@services/network';
import { UsersListResponse } from '@typings/users';

export const fetchUsers = async () => {
  return await axiosInstance.get<UsersListResponse>('api/users?page=2');
};
