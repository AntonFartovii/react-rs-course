import React, { ForwardedRef, forwardRef } from 'react';

export interface ICustomTextInputProps {
  onChange?: () => void;
  label: string;
  error?: string
  type: string
}

interface IInputElements {
  [elem: string]: any
}

const CustomTextInput = forwardRef(
    (props: ICustomTextInputProps, ref: ForwardedRef<HTMLInputElement>) => {

  const label = props.label.toLowerCase()

  const elements: IInputElements = {

    "text":     <input id={label} type="text" ref={ref}/>,
    "number":   <input id={label} type="number" ref={ref}/>,
    "textarea": <input id={label} type="text" ref={ref}/>,

    "date":     <input id={label} type="date" ref={ref}
                       defaultValue={new Date().toISOString().substr(0, 10)}/>,

    "file":     <>
                  <input id={label} type="file" ref={ref}/>
                  <img src="" alt="" className="new-img"/>
                </>,
    "checkbox": <>
                  I agree to the terms and conditions
                  <input id={label} type="checkbox" ref={ref}/>
                </>,

  }

  return (
    <div className="form-field">
      <label htmlFor="my-input">{label.toUpperCase()}</label>
      {
        elements[props.type] && elements[props.type]
      }
      <div className="validation">
        {
          props.error && props.error
        }
      </div>
    </div>
  );
});

export default CustomTextInput;
