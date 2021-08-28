import React from 'react'
import { useState } from 'react/cjs/react.development'
import LoginPage from './index';
import loginSuccess from './loginSuccess';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () =>{
        setFormIsSubmitted(true);
    };
    return (
        <div>
            {!formIsSubmitted ? (
                <LoginPage submitForm={submitForm} />
            ) : (
                <loginSuccess />
            )}
        </div>
    )
}

export default Form
