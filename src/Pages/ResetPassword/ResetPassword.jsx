import React from 'react'
import AuthLayout from '../../Components/Layout/AuthLayout/AuthLayout'
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth'

const ResetPassword = () => {
  return (
    <AuthLayout> 
        <InputFormAuth
                title="Code 6 Digit"
                name="reset-password"
                type="text"
        />
        <div class="d-grid mb-2 mt-3">
                <button class="btn btn-warning text-light" type="button">Reset Password</button>
        </div>
    </AuthLayout>
  )
}

export default ResetPassword