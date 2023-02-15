import React from 'react';
import style from './style.module.css';

const InputFormAddRecipe = ({ title, type, name, onchange }) => {
  const handlerChange = (e) => {
    onchange(e);
  };

  function choiceType(type) {
    switch (type) {
      case 'textarea':
        return (
          <div className={`item rounded ${style.inputBackground} ${style.textareaSize} mx-auto d-flex flex-column p-3 px-5 gap-3`} id="thumbnail">
            <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">{title}</span>
            <textarea name={name} className="form-control bg-transparent border-0 h-100" placeholder="Click Here!" onChange={handlerChange}></textarea>
          </div>
        );
      case 'text':
        return (
          <div className={`item rounded ${style.inputBackground} mx-auto d-flex p-3 px-5 gap-3`} id="thumbnail">
            <span className="text-secondary mt-2 text-nowrap text-dark fw-semibold">{title}</span>

            <input type={type} name={name} className="form-control bg-transparent border-0 border-bottom rounded-0 outline-none" onChange={handlerChange} />
          </div>
        );
    }
  }

  return choiceType(type);
};

export default InputFormAddRecipe;
