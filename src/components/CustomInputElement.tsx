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
    class Input extends React.Component {
      label = props.label.toLowerCase();
      elements: IInputElements = {
        text: <input id={this.label} type="text" ref={ref} />,
        radio: <input id={this.label} type="radio" ref={ref} />,
        number: <input id={this.label} type="number" ref={ref} />,
        textarea: <input id={this.label} type="text" ref={ref} />,

        date: (
          <input
            id={this.label}
            type="date"
            ref={ref}
            defaultValue={new Date().toISOString().substr(0, 10)}
          />
        ),

        file: (
          <>
            <input id={this.label} type="file" ref={ref} />
            <img src="" alt="" className="new-img" />
          </>
        ),
        checkbox: (
          <>
            I agree to the terms and conditions
            <input id={this.label} type="checkbox" ref={ref} />
          </>
        ),
      };

      render(): React.ReactNode {
        return (
          <div className="form-field">
            <label htmlFor="my-input">{this.label.toUpperCase()}</label>
            {this.elements[props.type] && this.elements[props.type]}
            <div className="validation">{props.error && props.error}</div>
          </div>
        );
      }
    }
    return <Input />;
  }
);

export default CustomInputElement;
