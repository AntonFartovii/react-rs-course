import React, { ForwardedRef, forwardRef } from 'react';

export interface ICustomTextInputProps {
  onChange?: () => void;
  label: string;
  error?: string;
  type: string;
}

interface IInputElements {
  [elem: string]: JSX.Element;
}

const CustomInputElement = forwardRef(
  (props: ICustomTextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    // class Input extends React.Component {
    const label = props.label.toLowerCase();

    const elements: IInputElements = {
      text: <input id={label} type="text" ref={ref} data-testid={label} />,
      radio: <input id={label} type="radio" ref={ref} />,
      number: <input id={label} type="number" ref={ref} />,
      textarea: <input id={label} type="text" ref={ref} />,
      date: <input id={label} type="date" ref={ref} />,
      file: (
        <>
          <input id={label} type="file" ref={ref} />
          <img src="" alt="" className="new-img" />
        </>
      ),
      checkbox: (
        <>
          I agree to the terms and conditions
          <input id={label} type="checkbox" ref={ref} />
        </>
      ),
    };

    // render(): React.ReactNode {
    return (
      <div className="form-field">
        <label htmlFor={label}>{label.toUpperCase()}</label>
        {elements[props.type] && elements[props.type]}
        <div className="validation" data-testid={`val_${label}`}>
          {props.error && props.error}
        </div>
      </div>
    );
    // }
  }
  // return <Input />;
  // }
);

export default CustomInputElement;
