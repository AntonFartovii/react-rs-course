import React, { ForwardedRef, forwardRef } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { logDOM } from '@testing-library/dom';
import { STATE_GOOD } from '../constants/pages';

export interface ICustomTextInputProps {
  onChange?: () => void;
  name: string;
  error?: string;
  type: string;
  refProp: UseFormRegister<FieldValues>;
  values?: string[]
}

interface IInputElements {
  [elem: string]: JSX.Element;
}

const CustomInputElement = (
    {name, error, type, refProp, values}: ICustomTextInputProps) => {
    name = name.toLowerCase();

    const elements: IInputElements = {
      text: <input
                id={name}
                type="text"
                data-testid={name}
                {...refProp(name, {
                  required: 'Field is empty',
                  minLength: 0,
                  // validate: value => {return ''}
                })}
      />,
      radio: <div className="row">
                {values?.map((radio) =>
                    <div key={radio}>
                      <input
                        id={radio}
                        type="radio"
                        value={radio}
                        {
                          ...refProp('state', {
                            required: 'Choose please one option',
                            // validate: value => {return ''}
                          })
                        }
                      />
                      <label htmlFor="radio1">{radio}</label>
                    </div>
                )}
              </div>,
      number: <input
                id={name}
                type="number"
                {...refProp(name, {
                  required: 'Field is empty',
                  minLength: 0,
                })} />,
      date: <input
                id={name}
                type="date"
                {...refProp(name, {
                  required: 'Date in not chosen',
                  // validate: value => {
                  //   const date = new Date().toDateString()
                  //   return Date.parse(value) <= Date.parse( date ) || `Must be <= ${date}`
                  // }
                })} />,
      file: <input
                id={name}
                type="file"
                {...refProp(name, {
                  required: 'There is not file',
                  // validate: (value) => {
                  //   if (!/^image/.test(value[0].type)) {
                  //     return 'This file is not image type';
                  //   }
                  // }
                })} />,
      checkbox: (
                <>
                  <input
                    id={name}
                    type="checkbox"
                    value="agree"
                    {...refProp(name,{
                      required: 'You must to agree'
                    })} />
                  I agree to the terms and conditions
                </>
      ),
    };

    return (
      <div className="form-field">
        <label htmlFor={name}>{name.toUpperCase()}</label>
        {elements[type] && elements[type]}
        <div className="validation" data-testid={`val_${name}`}>
          {error && error}
        </div>
      </div>
    );
  }

export default CustomInputElement;
