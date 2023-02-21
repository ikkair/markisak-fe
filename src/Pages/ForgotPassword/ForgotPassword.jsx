import React from 'react'
import AuthLayout from '../../Components/Layout/AuthLayout/AuthLayout'
import InputFormAuth from '../../Components/Form/InputFormAuth/InputFormAuth'

const ForgotPassword = () => {
    return (
        <AuthLayout
            title="Forgot Password?"
            description="We just need your registered e-mail address
            to send your password resend"
        >
            <InputFormAuth
                title="Email"
                name="email"
                type="text"
            />
            <div class="d-grid mb-2 mt-3 text-light">
                <button class="btn btn-warning text-light" type="button">Send E-mail</button>
            </div>
        </AuthLayout>
    )
}

export default ForgotPassword