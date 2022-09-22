import * as React from 'react';

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {};

function TextField(props: TextFieldProps, ref: React.Ref<HTMLInputElement>) {
  return (
    <input
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      ref={ref}
      {...props}
    />
  );
}

export default React.forwardRef(TextField);
