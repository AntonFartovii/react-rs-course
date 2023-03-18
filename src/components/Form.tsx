import React from "react";
import {ICard} from "../data/data";
import { addFile, getDataFile } from '../core/utils';

interface IFormState {

}

type IFormProps = {
    onSubmitCard: (card: ICard) => void
}

export default class FormCard extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);
        this.handlerSubmitForm = this.handlerSubmitForm.bind(this)
    }

    handlerSubmitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();



      const target = event.target as typeof event.target & {
            title: { value: string };
            description: { value: string };
            date: { value: string };
            price: { value: number };
            currency: { value: string };
            file: {files: FileList}
        };


        let file = target.file.files[0];
        if (file) {
          localStorage.setItem('myImage', URL.createObjectURL(file))
        }

        const newCard: ICard = {
            id: `${new Date().getTime()}`,
            title: target.title.value,
            description: target.description.value,
            imagePath:  file
              ? URL.createObjectURL(file)
              : "./src/assets/images/P14_20TE_Front view_1.png"
        };
        this.props.onSubmitCard(
            newCard
        )
    }


    componentDidMount(): void {
      addFile()
    }

  render() {
       return (
           <form className="card-form" onSubmit={this.handlerSubmitForm}>
               <div className="form-field">
                   <label htmlFor="title">Title:</label>
                   <input id="title" name="title" type="text" required />
               </div>
               <div className="form-field">
                   <label htmlFor="description">Description:</label>
                   <input id="description" name="description" type="text" required/>
               </div>
               <div className="form-field">
                   <label htmlFor="date">Date:</label>
                   <input
                       defaultValue={new Date().toISOString().substr(0, 10)}
                      id="date" name="date" type="date" required />
               </div>
               <div className="form-field">
                   <div className="price-box">

                       <div className="price-box-left">
                           <label htmlFor="price">Price:</label>
                           <input id="price" name="price" type="number" required />
                       </div>
                       <div className="price-box-right">
                           <label htmlFor="currency">Currency:</label>
                           <select id="currency" name="currency" required>
                               <option value="euro">EURO</option>
                               <option value="rub">RUB</option>
                               <option value="urd">URD</option>
                           </select>
                       </div>
                   </div>
               </div>
               <div className="form-field">
                   <label htmlFor="file">File:</label>
                   <input id="file" name="file" type="file" />
               </div>
               <div className="form-field">
                   <img src="" alt=""/>
               </div>

               <div className="form-field">
                   <input id="checkbox" name="checkbox" type="checkbox" />
                   <label htmlFor="checkbox">I agree to the terms and conditions</label>
               </div>
               <div className="form-field">
                   <button type="submit">
                       Отправить
                   </button>
               </div>
           </form>
       )
    }

}

// Add functionality to your app:
//
//     Collect information through a form
// You can collect any type of information, but form has to include at least one control of the following types:
// text input
// date input
// dropdown/select
// checkbox
// switcher
// file upload (image)
