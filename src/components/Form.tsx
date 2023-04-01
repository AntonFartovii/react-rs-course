import React from 'react';
import { useForm } from 'react-hook-form';


const FormCard = () => {
  const {register, handleSubmit} = useForm()

  const onSubmit = (data: any) => {
    console.log(data);
  }

    return (
      <form
        className="card-form"
        onSubmit={handleSubmit(onSubmit)}
        data-testid="form"
      >
        <input type="text" {...register('title')}/>

        <div className="form-field">
          <button type="submit">Send</button>
        </div>
      </form>
    );
}

export default FormCard
