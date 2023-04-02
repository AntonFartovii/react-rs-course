import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInputElement from './CustomInputElement';
import { STATE_GOOD } from '../constants/pages';
import { ICard } from '../data/data';

interface IFormProps {
  onSubmitCard: (card: ICard) => void;
};

interface IForm {
  title?: string;
  description?: string;
  date?: string;
  file?: string | FileList;
  price?: string | number;
  state?: string;
}

const FormCard = ({onSubmitCard}: IFormProps) => {
  const {register, handleSubmit, reset, formState: { errors }} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  })

  const onSubmit = (data: IForm) => {
    console.log(data);

    const newCard: ICard = {
      id: `${new Date().getTime()}`,
      title: data.title,
      description: data.description,
      imagePath: data.file ? URL.createObjectURL(data.file[0] as File) : '',
      price: data.price,
      state: data.state,
    };
    console.log(newCard);
    onSubmitCard(newCard);

    reset()
  }

    return (
      <form className="card-form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <CustomInputElement name="title"       type="text" refProp={register} error={errors?.title?.message?.toString()}/>
        <CustomInputElement name="description" type="text" refProp={register} error={errors?.description?.message?.toString()}/>
        <CustomInputElement name="date"        type="date" refProp={register} error={errors?.date?.message?.toString()}/>
        <CustomInputElement name="file"        type="file" refProp={register} error={errors?.file?.message?.toString()}/>
        <div className="form-field">
          <div className="row">
            <div className="column-left">
              <CustomInputElement name="price" type="number" refProp={register} error={errors?.price?.message?.toString()}/>
            </div>
            <div className="column-right">
              {/*<CustomInputElement name="currency" type="select" refProp={register} error={errors?.currency?.message?.toString()}/>*/}
            </div>
          </div>
        </div>
        <div className="form-field">

          <CustomInputElement name="state" values={STATE_GOOD} type="radio" refProp={register} error={errors?.state?.message?.toString()}/>
        </div>

        <CustomInputElement name="condition" type="checkbox" refProp={register} error={errors?.condition?.message?.toString()}/>
        <div className="form-field">
          <button type="submit">Send</button>
        </div>
      </form>
    );
}

export default FormCard
