import React from 'react';
import { ICard } from '../data/data';
import CustomInputElement from './CustomInputElement';
import CustomSelectElement from './CustomSelectElement';
import { STATE_GOOD } from '../constants/pages';

interface IFormState {
  error: {
    [key: string]: string;
  };
}

type IFormProps = {
  onSubmitCard: (card: ICard) => void;
};

export default class FormCard extends React.Component<IFormProps, IFormState> {
  inputTitle = React.createRef<HTMLInputElement>();
  inputDescription = React.createRef<HTMLInputElement>();
  inputPrice = React.createRef<HTMLInputElement>();
  inputCurrency = React.createRef<HTMLSelectElement>();
  inputCondition = React.createRef<HTMLInputElement>();
  inputState1 = React.createRef<HTMLInputElement>();
  inputState2 = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  inputFile = React.createRef<HTMLInputElement>();
  formRef = React.createRef<HTMLFormElement>();

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
        state: '',
      },
    };
  }

  async errorHandler(key: string, value: string) {
    this.setState((prev: IFormState) => {
      return {
        error: { ...prev.error, [key]: value },
      };
    });
  }

  async errorHandlerClear() {
    for (const key in this.state.error) {
      this.state.error[key] && (await this.errorHandler(key, ''));
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
    const valueCondition: boolean = this.inputCondition.current?.checked as boolean;
    const valuePrice = this.inputPrice.current?.value || '';
    const valueCurrency = this.inputCurrency.current?.value;
    const valueState1: boolean = this.inputState1.current?.checked as boolean;
    const valueState2: boolean = this.inputState2.current?.checked as boolean;

    if (!valueState1 && !valueState2) {
      await this.errorHandler('state', 'should be choose');
    }

    if (valuePrice.length < 1) {
      await this.errorHandler('price', "Length should't be 0");
    }

    if (valueTitle.length < 1) {
      await this.errorHandler('title', "Length should't be 0");
    }

    if (valueDescription.length < 1) {
      await this.errorHandler('description', "Length should't be 0");
    }

    if (!valueFile.files[0]) {
      await this.errorHandler('image', 'file is empty');
    } else if (!/^image/.test(valueFile.files[0].type)) {
      await this.errorHandler('image', `file type isn't image`);
    }

    if (Date.parse(valueDate) > Date.parse('2023-03-25')) {
      await this.errorHandler('date', 'incorrect date');
    }

    if (!valueCondition) {
      await this.errorHandler('condition', 'Вы должны согласиться');
    }

    const isError = !Object.values(this.state.error).every((e: string) => e === '');

    if (isError) return;

    const getStateGood = () => {
      return this.inputState1.current?.checked
        ? this.inputState1.current?.value
        : this.inputState2.current?.checked
        ? this.inputState2.current?.value
        : '';
    };

    const newCard: ICard = {
      id: `${new Date().getTime()}`,
      title: valueTitle,
      description: valueDescription,
      imagePath: URL.createObjectURL(valueFile.files[0]),
      price: Number(valuePrice),
      currency: valueCurrency,
      state: getStateGood(),
    };

    await this.props.onSubmitCard(newCard);
    this.formRef.current?.reset();
  }

  render() {
    return (
      <form
        ref={this.formRef}
        className="card-form"
        onSubmit={this.handlerSubmitForm}
        data-testid="form"
      >
        <CustomInputElement
          key="1"
          label="Title"
          ref={this.inputTitle}
          type="text"
          error={this.state.error.title}
        />

        <CustomInputElement
          key="2"
          label="Description"
          ref={this.inputDescription}
          type="text"
          error={this.state.error.description}
        />

        <CustomInputElement
          key="3"
          label="Date"
          ref={this.inputDate}
          type="date"
          error={this.state.error.date}
        />

        <CustomInputElement
          key="4"
          label="Image"
          ref={this.inputFile}
          type="file"
          error={this.state.error.image}
        />

        <div className="form-field">
          <div className="price-box">
            <div className="price-box-left">
              <CustomInputElement
                key="6"
                label="price"
                ref={this.inputPrice}
                type="number"
                error={this.state.error.price}
              />
            </div>
            <div className="price-box-right">
              <CustomSelectElement
                label="currency"
                type="select"
                ref={this.inputCurrency}
                error={this.state.error.currency}
              />
            </div>
          </div>
        </div>
        <div className="form-field flex-row">
          <div className="flex-row">
            <input
              id="radio1"
              type="radio"
              name="state"
              ref={this.inputState1}
              value={STATE_GOOD.OLD}
            />
            <label htmlFor="radio1">б/у</label>
          </div>
          <div className="flex-row">
            <input
              id="radio2"
              type="radio"
              name="state"
              ref={this.inputState2}
              value={STATE_GOOD.NEW}
            />
            <label htmlFor="radio1">новый</label>
          </div>
          <div className="validation">{this.state.error.state}</div>
        </div>

        <CustomInputElement
          key="5"
          label="Condition"
          ref={this.inputCondition}
          type="checkbox"
          error={this.state.error.condition}
        />

        <div className="form-field">
          <button type="submit">Отправить</button>
        </div>
      </form>
    );
  }
}
