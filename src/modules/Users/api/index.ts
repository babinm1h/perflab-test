import { $apiInstance } from '@core/api';
import { IUser } from '../models/user.model';

export interface IUpdateUserArgs {
  id: number;
  name: string;
  email: string;
}

export class UsersApi {
  static async getUsers(params: { _sort: string }) {
    const { data } = await $apiInstance.get<IUser[]>(`users`, { params });
    return data;
  }

  static async createUser(user: IUser) {
    const { data } = await $apiInstance.post<IUser>(`users`, { ...user });
    return data;
  }

  static async deleteUser(id: number) {
    const { data } = await $apiInstance.delete(`users/${id}`);
    return data;
  }

  static async updateUser({ id, email, name }: IUpdateUserArgs) {
    const { data } = await $apiInstance.put<IUpdateUserArgs>(`users/${id}`, { email, name });
    return data;
  }
}
