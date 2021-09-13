import React from 'react'
import LoginSuccess from './LoginSuccess';

const validation = (values) => {

    let errors={};
    if(!values.username) {
        errors.username="username is required."
    }
    if(!values.password) {
        errors.password = "password is required."
    } else if (values.password.length < 5){
        errors.password = "password must be more than five character"
    }
    else{
        <LoginSuccess />
    }
    return errors;
}

export default validation
