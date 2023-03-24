import React, { ForwardedRef, forwardRef, LegacyRef, Ref, useImperativeHandle } from 'react';

interface ICustomTextInputProps {
  onChange?: () => void;
  label: string;
  error?: string
  type: string
}

interface IInputElements {
  [elem: string]: any
}

const CustomTextInput = forwardRef((props: ICustomTextInputProps, ref: ForwardedRef<HTMLInputElement>) => {

  const elements: IInputElements = {
    "text": <input id="my-input" type="text" ref={ref}/>,
    "textarea": (<input id="my-input" type="text" ref={ref}/>)
  }

  return (
    <div className="form-field">
      <label htmlFor="my-input">{props.label}</label>
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


// handlerSubmitForm(event: React.FormEvent<HTMLFormElement>) {
//   event.preventDefault();
//   const value = this.inputRef.current?.value || ''
//
//   if ( value.length < 1 ) {
//     this.setState({
//       error: {...this.state.error, title: "Length should't be 0"}
//     })
//   }

// render() {
//   return (
//     <form className="card-form" onSubmit={this.handlerSubmitForm}>
//
//       <CustomTextInput
//         label="Name"
//         ref={this.inputRef}
//         error={this.state.error.title}
//         type="text"
//       />
//
//       <input type="submit" value="Отправить"/>
//
//     </form>
//   )
// }
