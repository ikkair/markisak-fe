import React, { Children } from 'react';

const InputFormAuth = (props) => {
  const changeHandler = (e) => {
    props.onchange(e);
  };
  return (
    <>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          {props.title}
        </label>
        <input type={props.type} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name={props.name} onChange={changeHandler} />
      </div>
    </>
  );
};

export default InputFormAuth;
