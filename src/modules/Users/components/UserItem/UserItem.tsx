import React, { useState } from 'react';
import { IUser } from '../../models/user.model';
import { Button } from '@/shared/components/Button';
import s from './UserItem.module.scss';
import { useBooleanState } from '@/shared/hooks';
import { MutateOptions } from '@tanstack/react-query';

interface IProps extends IUser {
  onDelete: (id: number) => VoidFunction;
  isDeleting: boolean;
  onUpdate: (
    arg: { id: number; name: string; email: string },
    options?: MutateOptions<any, Error, { id: number; name: string; email: string }, unknown>,
  ) => VoidFunction;
}

export const UserItem = ({ email, id, name, username, onDelete, isDeleting, onUpdate }: IProps) => {
  const { isTrue, toggleValue, setFalse } = useBooleanState();
  const [nameVal, setNameVal] = useState(name);
  const [emailVal, setEmailVal] = useState(email);

  return (
    <div
      style={{
        opacity: isDeleting ? 0.3 : 1,
      }}
      className={s.item}
    >
      {isTrue ? (
        <UserForm email={emailVal} name={nameVal} setEmailVal={setEmailVal} setNameVal={setNameVal} />
      ) : (
        <>
          <div>
            {id} - {name}
          </div>
          <div>
            {email} {username}
          </div>
        </>
      )}
      <div>
        <Button onClick={onDelete(id)}>Удалить</Button>
        {isTrue ? (
          <Button onClick={onUpdate({ email: emailVal, id, name: nameVal }, { onSuccess: setFalse })}>Сохранить</Button>
        ) : (
          <Button onClick={toggleValue}>Редактировать</Button>
        )}
      </div>
    </div>
  );
};

interface IProps2 {
  email: string;
  name: string;
  setNameVal: (v: string) => void;
  setEmailVal: (v: string) => void;
}

export const UserForm = ({ email, name, setEmailVal, setNameVal }: IProps2) => {
  return (
    <div>
      <div>
        <input type="text" placeholder="name" onChange={(e) => setNameVal(e.target.value)} value={name} />
      </div>
      <div>
        <input type="text" placeholder="email" onChange={(e) => setEmailVal(e.target.value)} value={email} />
      </div>
    </div>
  );
};
