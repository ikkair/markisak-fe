import React from 'react'
import AuthLayout from '../../Components/Layout/AuthLayout/AuthLayout'
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth'
import style from '../../Components/Layout/AuthLayout/style.module.css'

const ResetPassword = () => {
  return (
    <AuthLayout> 
        <InputFormAuth
                title="Create New Password"
                name="createNewPassword"
                type="password"
        />
        <InputFormAuth
                title="Confirm New Password"
                name="confirmNewPassword"
                type="password"
        />
        <div className="form-check mb-3 customCheck">
          <input className="form-check-input" type="checkbox" value="" id={style.flexCheckDefault} />
          <label className={`form-check-label ${style.formLabel}`} for={style.flexCheckDefault}>
            I agree to terms & conditions
          </label>
        </div>
        <div class="d-grid mb-2 mt-3">
                <button class="btn btn-warning text-light" type="button">Reset Password</button>
        </div>
    </AuthLayout>
  )
}

export default ResetPassword