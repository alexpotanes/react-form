import React, { useCallback, useState } from 'react';
import { Input } from '../elements/input';
import { Button } from "../elements/button";

import './style.css';

export const MyForm = () => {
  const [name, changeName] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const onSubmitForm = useCallback(
    () => {
      console.log(`name: ${name}, email: ${email}, password: ${password}`)
    }, [name, email, password]
  );

  return (
    <form className="MyForm">
      <Input
        value={name}
        placeholder="Имя"
        onChange={changeName}
      />
      <Input
        type="email"
        value={email}
        placeholder="Email"
        onChange={changeEmail}
      />
      <Input
        type="password"
        value={password}
        placeholder="Пароль"
        onChange={changePassword}
      />
      <Button onClick={onSubmitForm}>Отправить</Button>
    </form>
  );
}
