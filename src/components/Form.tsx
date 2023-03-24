import React from 'react';
import { ICard } from '../data/data';
import CustomTextInput from './CustomTextInput';

interface IFormState {
  error: {
    [key: string]: string
  }
}

type IFormProps = {
  onSubmitCard: (card: ICard) => void
}

export default class FormCard extends React.Component<IFormProps, IFormState> {
  inputTitle: React.RefObject<HTMLInputElement>;
  inputDescription: React.RefObject<HTMLInputElement>;
  inputPrice: React.RefObject<HTMLInputElement>;
  inputCurrency: React.RefObject<HTMLInputElement>;
  inputCondition: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  inputFile: React.RefObject<HTMLInputElement>;

  constructor(props: IFormProps) {
    super(props);
    this.handlerSubmitForm = this.handlerSubmitForm.bind(this);
    this.state = {
      error: {
        title: '',
        price: '',
        description: '',
        image: '',
        condition: '',
        currency: '',
      },
    };
    this.inputTitle = React.createRef<HTMLInputElement>();
    this.inputDescription = React.createRef<HTMLInputElement>();
    this.inputPrice = React.createRef<HTMLInputElement>();
    this.inputCurrency = React.createRef<HTMLInputElement>();
    this.inputCondition = React.createRef<HTMLInputElement>();
    this.inputDate = React.createRef<HTMLInputElement>();
    this.inputFile = React.createRef<HTMLInputElement>();
  }

  async errorHandler(key: string, value: string) {
    this.setState((prev: IFormState) => {
      return {
        error: { ...prev.error, [key]: value },
      };
    });
  }

  async errorHandlerClear() {
    for (let key in this.state.error) {
      this.state.error[key] && this.errorHandler(key, '');
    }
  }

  async handlerSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await this.errorHandlerClear();

    // console.log(this.state.error);

    const valueTitle = this.inputTitle.current?.value || '';
    const valueDescription = this.inputDescription.current?.value || '';
    const valueDate = this.inputDate.current?.value || '';
    const valueFile = this.inputFile.current as { files: FileList };

    // console.log(valueFile.files[0]);

    if (valueTitle.length < 1) {
      await this.errorHandler('title', 'Length should\'t be 0');
    }

    if (valueDescription.length < 1) {
      await this.errorHandler('description', 'Length should\'t be 0');
    }

    if (!valueFile.files[0]) {
      await this.errorHandler('image', 'file is empty');
    } else if (!/^image/.test(valueFile.files[0].type)) {
      await this.errorHandler('image', `file type isn't image`);
    }

    if (Date.parse(valueDate) > Date.parse('2023-03-25')) {
      await this.errorHandler('date', 'incorrect date');
    }

    const isError = !(Object.values(this.state.error).every((e: string) => e === ''))

    if ( isError ) return;

    const newCard: ICard = {
      id: `${new Date().getTime()}`,
      title: valueTitle,
      description: valueDescription,
      imagePath: URL.createObjectURL(valueFile.files[0]),
    };

    this.props.onSubmitCard(
      newCard
    );

    // const target = event.target as typeof event.target & {
    //     title: { value: string };
    //     description: { value: string };
    //     date: { value: string };
    //     price: { value: number };
    //     currency: { value: string };
    //     file: {files: FileList}
    // };
  }

  render() {
    return (
      <form className="card-form" onSubmit={this.handlerSubmitForm}>

        <CustomTextInput key="1"
                         label="Title"
                         ref={this.inputTitle}
                         type="text"
                         error={this.state.error.title}/>

        <CustomTextInput key="2"
                         label="Description"
                         ref={this.inputDescription}
                         type="text"
                         error={this.state.error.description}/>

        <CustomTextInput key="3"
                         label="Date"
                         ref={this.inputDate}
                         type="date"
                         error={this.state.error.date}/>

        <CustomTextInput key="4"
                         label="Image"
                         ref={this.inputFile}
                         type="file"
                         error={this.state.error.image}/>

        <CustomTextInput key="5"
                         label="Condition"
                         ref={this.inputCondition}
                         type="checkbox"
                         error={this.state.error.condition}/>

        <div className="form-field">
          <div className="price-box">

            <div className="price-box-left">
              <CustomTextInput key="6" label="price" ref={this.inputPrice} type="number"
                               error={this.state.error.price}/>
            </div>
            <div className="price-box-right">
              <label htmlFor="currency">Currency:</label>
              <select id="currency" name="currency">
                <option value="euro">EURO</option>
                <option value="rub">RUB</option>
                <option value="urd">URD</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-field flex-row">
          <div className="flex-row">
            <input id="radio1" type="radio" name="state"/>
            <label htmlFor="radio1">б/у</label>
          </div>
          <div className="flex-row">
            <input id="radio2" type="radio" name="state"/>
            <label htmlFor="radio1">новый</label>
          </div>
        </div>
        <div className="form-field">
          <button type="submit">
            Отправить
          </button>
        </div>
      </form>
    );
  }
}
