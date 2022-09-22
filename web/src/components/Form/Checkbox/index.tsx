import * as React from 'react';
import * as ReactCheckbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

type CheckboxProps = ReactCheckbox.CheckboxProps & {};

function Checkbox(props: CheckboxProps, ref: React.Ref<HTMLButtonElement>) {
  return (
    <ReactCheckbox.Root
      className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center"
      ref={ref}
      {...props}
    >
      <ReactCheckbox.Indicator>
        <Check size={16} className="text-emerald-400" />
      </ReactCheckbox.Indicator>
    </ReactCheckbox.Root>
  );
}

export default React.forwardRef(Checkbox);
