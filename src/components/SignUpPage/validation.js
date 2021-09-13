import React from 'react'

const validation = (values) => {
    let errors={};

    if(!values.firstname){
        errors.firstname = "First Name is required"
    }
    if(!values.lastname) {
        errors.lastname = "Last Name is required"
    }
    if(!values.username) {
        errors.username = "Username is required"
    }

    if(!values.email) {
        errors.email = "Email is required"
    } 
    else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid"
    }

    if(!values.password) {
        errors.password = "Password is required"
    } 
    else if (values.password.length < 5) {
        errors.password ="Password is less than five characters"
    }
    else{
        alert("account created successfully");
    }
    return errors;
}

export default validation
