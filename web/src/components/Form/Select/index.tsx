import * as React from 'react';
import ReactSelect, { Props } from 'react-select';

type SelectProps = Props & {};

function Select(props: SelectProps, ref: any) {
  return (
    <ReactSelect
      className="my-react-select-container"
      classNamePrefix="my-react-select"
      ref={ref}
      {...props}
    />
  );
}

export default React.forwardRef(Select);
