import React, { Children } from 'react'

const InputFormAuth = (props) => {
    return (
        <>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">{props.title}</label>
                <input type={props.type} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name={props.name}/>
            </div>
        </>
    )
}

export default InputFormAuth