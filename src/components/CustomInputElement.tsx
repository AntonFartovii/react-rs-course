import React, { ForwardedRef, forwardRef } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface ICustomTextInputProps {
  onChange?: () => void;
  label: string;
  error?: string;
  type: string;
  ref: any
  // ref: UseFormRegister<FieldValues>;
}

interface IInputElements {
  [elem: string]: JSX.Element;
}

const CustomInputElement = ({onChange, label, error, type, ref}: ICustomTextInputProps) => {
    label = label.toLowerCase();

    const elements: IInputElements = {
      text: <input id={label} type="text" {...ref}
                   data-testid={label} />,
      radio: <input id={label} type="radio" {...ref} />,
      number: <input id={label} type="number" {...ref} />,
      textarea: <input id={label} type="text" {...ref} />,
      date: <input id={label} type="date" {...ref} />,
      file: (
        <>
          <input id={label} type="file" {...ref} />
          <img src="" alt="" className="new-img" />
        </>
      ),
      checkbox: (
        <>
          I agree to the terms and conditions
          <input id={label} type="checkbox" {...ref} />
        </>
      ),
    };

    return (
      <div className="form-field">
        <label htmlFor={label}>{label.toUpperCase()}</label>
        {elements[type] && elements[type]}
        <div className="validation" data-testid={`val_${label}`}>
          {error && error}
        </div>
      </div>
    );
  }

export default CustomInputElement;
