import React, { Children } from 'react'
import style from '../../Layout/AuthLayout/style.module.css'

const InputFormAuth = (props) => {
    return (
        <>
            <div class="mb-3">
                <label for="exampleInputEmail1" class={`form-label ${style.formLabel}`}>{props.title}</label>
                <input type={props.type} class={`form-control ${style.formControl}`} id="exampleInputEmail1" aria-describedby="emailHelp" name={props.name} placeholder={props.title}/>
            </div>
        </>
    )
}

export default InputFormAuth