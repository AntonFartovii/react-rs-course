import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInputElement from './CustomInputElement';
import { STATE_GOOD } from '../constants/pages';

interface IForm {
  title?: string;
  description?: string;
  date?: string;
  file?: string | FileList;
}

const FormCard = () => {
  const {register, handleSubmit, reset, formState: { errors }} = useForm({
    mode: 'onSubmit', reValidateMode: 'onSubmit' })

  const onSubmit = (data: IForm) => {
    console.log(data);
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
          <div className="row">
            <div className="column-left">
              <input
                id="radio1"
                type="radio"
                value={STATE_GOOD.OLD}
                {
                  ...register('state', {
                    required: 'Choose please one option'
                  })
                }
              />
              <label htmlFor="radio1">б/у</label>
            </div>
            <div className="column-right">
              <input
                id="radio2"
                type="radio"
                value={STATE_GOOD.NEW}
                {
                  ...register('state', {
                    required: 'Choose please one option'
                  })
                }
              />
              <label htmlFor="radio1">новый</label>
            </div>
          </div>
          <div className="validation">{errors.state?.message?.toString()}</div>
        </div>

        <CustomInputElement name="condition" type="checkbox" refProp={register} error={errors?.condition?.message?.toString()}/>
        <div className="form-field">
          <button type="submit">Send</button>
        </div>
      </form>
    );
}

export default FormCard
