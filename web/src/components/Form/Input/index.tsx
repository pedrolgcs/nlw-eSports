import * as React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

function Input({ ...props }: InputProps) {
  return (
    <input
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      {...props}
    />
  );
}

export default Input;
