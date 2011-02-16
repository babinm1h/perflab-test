import { useCallback, useState } from 'react';
import s from './UsersPage.module.scss';
import { Spinner } from '@/shared/components/Spinner';
import { UserItem } from '../../components/UserItem';
import { AddUserForm } from '../../components/AddUserForm';
import { useDeleteUser, useGetUsers, useUpdateUser } from '../../hooks/useUsers';
import { Button } from '@/shared/components/Button';
import { MutateOptions } from '@tanstack/react-query';

export const UsersPage = () => {
  const [sort, setSort] = useState('');

  const { data, isSuccess, isLoading } = useGetUsers(sort);
  const { mutate, isPending } = useDeleteUser();
  const { mutate: updateUserMutation } = useUpdateUser();

  const handleDetele = useCallback(
    (id: number) => {
      return () => mutate(id);
    },
    [mutate],
  );

  const handleUpdate = useCallback(
    (
      arg: { id: number; name: string; email: string },
      options?: MutateOptions<any, Error, { id: number; name: string; email: string }, unknown>,
    ) => {
      return () => updateUserMutation(arg, options);
    },
    [updateUserMutation],
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={s.wrap}>
      <div>
        <Button onClick={() => setSort('name')}>Sort by name</Button>
        <Button onClick={() => setSort('id')}>Sort by id</Button>
      </div>
      <AddUserForm />
      <div className={s.list}>
        {isSuccess &&
          data.map((u) => {
            return (
              <UserItem {...u} key={u.id} onDelete={handleDetele} isDeleting={isPending} onUpdate={handleUpdate} />
            );
          })}
      </div>
    </div>
  );
};
