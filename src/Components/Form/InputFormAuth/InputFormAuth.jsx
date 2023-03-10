import React, { Children } from 'react';
import style from '../../Layout/AuthLayout/style.module.css';

const InputFormAuth = (props) => {
  const changeHandler = (e) => {
    props.onchange(e);
  };
  return (
    <>
      <div className="mb-3">
        <label for={name} className={`form-label ${style.formLabel}`}>
          {props.title}
        </label>
        <div className={style.controlStyle}>
        <input type={props.type} value={props.value} className={`form-control ${style.formControl}`} id={name} name={props.name} placeholder={props.title} onChange={changeHandler} />
        </div>
      </div>
    </>
  );
};

export default InputFormAuth;
