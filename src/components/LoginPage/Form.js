import React, {useState} from 'react'
import LoginPage from 'index';
import LoginSuccess from './LoginSuccess';


const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () =>{
        setFormIsSubmitted(true);
    };
    return (
        <div>
            {formIsSubmitted ? (
                <LoginSuccess />
            ) : (
                <LoginPage submitForm={submitForm} />
            )}
        </div>
    )
}

export default Form
