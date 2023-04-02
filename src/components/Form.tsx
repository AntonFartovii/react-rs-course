import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from './CustomInput';
import { CURRENCY, STATE_GOOD } from '../constants/pages';
import { ICard } from '../data/data';

interface IFormProps {
  onSubmitCard: (card: ICard) => void;
}

interface IForm {
  title?: string;
  description?: string;
  date?: string;
  file?: string | FileList;
  price?: string | number;
  state?: string;
  currency?: string
}

const FormCard = ({ onSubmitCard }: IFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data: IForm) => {
    const newCard: ICard = {
      id: `${new Date().getTime()}`,
      title: data.title,
      description: data.description,
      imagePath: data.file ? URL.createObjectURL(data.file[0] as File) : '',
      price: data.price,
      state: data.state,
      currency: data.currency,
      date: data.date
    };
    onSubmitCard(newCard);
    reset();
  };

  return (
    <form className="card-form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <CustomInput
        name="title"
        type="text"
        refProp={register}
        error={errors?.title?.message?.toString()}
      />
      <CustomInput
        name="description"
        type="text"
        refProp={register}
        error={errors?.description?.message?.toString()}
      />
      <CustomInput
        name="date"
        type="date"
        refProp={register}
        error={errors?.date?.message?.toString()}
      />
      <CustomInput
        name="file"
        type="file"
        refProp={register}
        error={errors?.file?.message?.toString()}
      />
      <div className="form-field">
        <div className="row">
          <div className="column-left">
            <CustomInput
              name="price"
              type="number"
              refProp={register}
              error={errors?.price?.message?.toString()}
            />
          </div>
          <div className="column-right">
            <CustomInput
              name="currency"
              type="select"
              values={CURRENCY}
              refProp={register}
              error={errors?.currency?.message?.toString()}
            />
          </div>
        </div>
      </div>
      <div className="form-field">
        <CustomInput
          name="state"
          values={STATE_GOOD}
          type="radio"
          refProp={register}
          error={errors?.state?.message?.toString()}
        />
      </div>
      <CustomInput
        name="condition"
        type="checkbox"
        refProp={register}
        error={errors?.condition?.message?.toString()}
      />
      <div className="form-field">
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default FormCard;
