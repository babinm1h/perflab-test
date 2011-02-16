import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UsersApi } from '../api';
import { IUser } from '../models/user.model';

export const useGetUsers = (sort: string) => {
  return useQuery({ queryKey: ['users', sort], queryFn: () => UsersApi.getUsers({ _sort: sort }), staleTime: 5000 });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UsersApi.createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UsersApi.deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UsersApi.updateUser,
    //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),

    onSuccess({ email, name }, variables) {
      queryClient.setQueryData(['users', ''], (oldUsers: IUser[]) => {
        console.log({ oldUsers });
        const userToUpdate = oldUsers?.find((u) => u.id === variables.id);

        if (!userToUpdate) {
          return oldUsers;
        }

        userToUpdate.email = email;
        userToUpdate.name = name;
        return oldUsers;
      });
    },
  });
};
