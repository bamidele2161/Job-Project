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
            {!formIsSubmitted ? (
                <LoginPage submitForm={submitForm} />
            ) : (
                <LoginSuccess />
            )}
        </div>
    )
}

export default Form
