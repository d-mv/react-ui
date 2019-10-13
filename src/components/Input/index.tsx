import React from 'react';
import { TextField } from '@material-ui/core';
import { classDeclaration } from '@babel/types';

interface InputProps {
  password?: boolean;
  label: string;
  value: string;
  placeholder: string;
}




export default function({ password, label, value, placeholder }: InputProps) {
  return (
    <TextField
      id='standard-with-placeholder'
      label={label}
      type={password ? 'password' : undefined}
      placeholder={placeholder}
      // className={classDeclaration}
      margin='normal'
      value={value}
    />
  );
}
