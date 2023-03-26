import React, { ForwardedRef, forwardRef } from 'react';

interface ICustomSelectProps {
  onChange?: () => void;
  label: string;
  error?: string;
  type: string;
}

const CustomSelectElement = forwardRef(
  (props: ICustomSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    class Select extends React.Component {
      label = props.label.toLowerCase();

      render(): React.ReactNode {
        return (
          <div className="form-field">
            <label htmlFor={this.label}>Currency:</label>
            <select id={this.label} name={this.label} ref={ref}>
              <option value="euro">EURO</option>
              <option value="rub">RUB</option>
              <option value="urd">USD</option>
            </select>
          </div>
        );
      }
    }
    return <Select />;
  }
);

export default CustomSelectElement;
