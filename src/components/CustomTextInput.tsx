// import React, { useRef } from 'react';
//
// export class CustomTextInput extends React.Component {
//
//   myInput: React.RefObject<HTMLInputElement>
//
//   constructor(props: any) {
//     super(props);
//     this.myInput = React.createRef()
//   }
//
//   render() {
//     return(
//       <div className="form-field">
//         <label htmlFor="title">Title:</label>
//         <input type="text" ref={this.myInput}/>
//       </div>
//     )
//   }
//
// }

import React, { ForwardedRef, forwardRef, Ref, useImperativeHandle } from 'react';

interface ICustomTextInputProps {
  label: string;
}

export interface ICustomTextInputMethods {
  focusTextInput: () => void;
}

const CustomTextInput = forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="form-field">
      <label htmlFor="my-input">Title:</label>
      <input id="my-input" type="text" ref={ref} />
      <div className="validatiob"></div>
    </div>
  );
});

export default CustomTextInput;
