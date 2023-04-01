import React, { ForwardedRef, forwardRef } from 'react';

interface ICustomSelectProps {
  onChange?: () => void;
  label: string;
  error?: string;
  type: string;
}

const CustomSelectElement = forwardRef(
  (props: ICustomSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
      const label = props.label.toLowerCase();

        return (
          <div className="form-field">
            <label htmlFor={label}>Currency:</label>
            <select id={label} name={label} ref={ref}>
              <option value="euro">EURO</option>
              <option value="rub">RUB</option>
              <option value="urd">USD</option>
            </select>
          </div>
        );
  }
);

export default CustomSelectElement;
