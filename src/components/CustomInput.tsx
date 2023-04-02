import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface ICustomTextInputProps {
  onChange?: () => void;
  name: string;
  error?: string;
  type: string;
  refProp: UseFormRegister<FieldValues>;
  values?: string[];
}

interface IInputElements {
  [elem: string]: JSX.Element;
}

const CustomInput = ({ name, error, type, refProp, values }: ICustomTextInputProps) => {
  name = name.toLowerCase();

  const elements: IInputElements = {
    text: (
      <input
        key={name}
        id={name}
        type="text"
        data-testid={name}
        {...refProp(name, {
          required: 'Field is empty',
          minLength: 0,
          validate: (value) => true,
        })}
      />
    ),
    radio: (
      <div className="row">
        {values?.map((radio) => (
          <div key={radio}>
            <input
              id={radio}
              type="radio"
              value={radio}
              {...refProp('state', {
                required: 'Choose please one option',
                validate: (value) => true,
              })}
            />
            <label htmlFor="radio1">{radio}</label>
          </div>
        ))}
      </div>
    ),
    number: (
      <input
        id={name}
        type="number"
        {...refProp(name, {
          required: 'Field is empty',
          minLength: 0,
        })}
      />
    ),
    date: (
      <input
        id={name}
        type="date"
        {...refProp(name, {
          required: 'Date in not chosen',
          validate: (value) => {
            const date = new Date().toDateString();
            return Date.parse(value) <= Date.parse(date) || `Must be <= ${date}`;
          },
        })}
      />
    ),
    file: (
      <input
        id={name}
        type="file"
        {...refProp(name, {
          required: 'There is not file',
          // validate: value => true
          validate: (value) => {
            if (!/^image/.test(value[0].type)) {
              return 'This file is not image type';
            }
          },
        })}
      />
    ),
    checkbox: (
      <>
        <input
          id={name}
          type="checkbox"
          value="agree"
          {...refProp(name, {
            required: 'You must to agree',
            validate: (value) => true,
          })}
        />
        I agree to the terms and conditions
      </>
    ),
    select: (
      <div className="form-field">
        <select
          id={name}
          defaultValue=""
          {...refProp(name, {
            required: 'Field is empty',
            minLength: 0,
            validate: (value) => true,
          })}
        >
          <option></option>
          <option disabled hidden value=""></option>
          {values?.map((value) => (
            <option key={value} value={value.toLowerCase()}>
              {value.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
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
};

export default CustomInput;
