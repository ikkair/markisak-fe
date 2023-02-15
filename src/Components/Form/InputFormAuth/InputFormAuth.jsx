import React, { Children } from 'react';
import style from '../../Layout/AuthLayout/style.module.css';

const InputFormAuth = (props) => {
  const changeHandler = (e) => {
    props.onchange(e);
  };
  return (
    <>
      <div class="mb-3">
        <label for={name} class={`form-label ${style.formLabel}`}>
          {props.title}
        </label>
        <input type={props.type} class={`form-control ${style.formControl}`} id={name} name={props.name} placeholder={props.title} onChange={changeHandler} />
      </div>
    </>
  );
};

export default InputFormAuth;
