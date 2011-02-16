import { Button } from '@/shared/components/Button';
import React, { useState } from 'react';
import { useCreateUser } from '../../hooks/useUsers';

export const AddUserForm = () => {
  const { mutate, isPending } = useCreateUser();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { email, name, username: name, id: Date.now() },
      {
        onSuccess: () => {
          setName('');
          setEmail('');
        },
      },
    );
  };

  return (
    <form onSubmit={onSubmit} style={{ opacity: isPending ? 0.3 : 1 }}>
      <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button type="submit">CREATE</Button>
    </form>
  );
};
