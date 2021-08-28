import React, {useState}from 'react'
import {
    LoginContainer,
    LoginH1,
    LoginForm,
    LoginField,
    LoginInput,
    LoginButton,
    Btn,
    LoginP,
    SocialIconLink,
    LoginIcon,
    InputIcon,
    LoginHr

} from './SignupElement';
import {
    FaFacebook, FaTwitter, FaLinkedin, FaUser, FaLock, FaEnvelope
} from 'react-icons/fa';

import validation from './validation';

const SignupPage = ({title}) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
    });

    const [errors, setErrors] = useState({

    })
    const handleChange = (event) => {
        setValues({ 
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    };

    return (
        <div>
            <LoginContainer>
                <LoginForm>
                <LoginH1>Create Account</LoginH1>
                <LoginHr />
                    
                    <LoginField>
                        <InputIcon>
                            <FaUser />
                        </InputIcon>
                        <LoginInput 
                        placeholder="First Name" 
                        name="firstname" 
                        value={values.firstname}
                        onChange={handleChange} 
                        />
                    </LoginField>
                    {errors.firstname && <p 
                            style={{
                                color:"red",
                                width: "158px",
                            }}
                            className="error">{errors.firstname}</p>}
                    
                    
                    <LoginField>
                        <InputIcon>
                            <FaUser />
                        </InputIcon>
                        <LoginInput 
                        placeholder="Last Name" 
                        name="lastname" 
                        value={values.lastname}
                        onChange={handleChange} 
                        />
                    </LoginField>
                    {errors.lastname && <p 
                            style={{
                                color:"red",
                                width: "158px",
                            }}
                            className="error">{errors.lastname}</p>}
                    
                    
                    <LoginField>
                        <InputIcon>
                            <FaUser />
                        </InputIcon>
                        <LoginInput 
                        placeholder="Username" 
                        name="username" 
                        value={values.username}
                        onChange={handleChange} 
                        />
                    </LoginField>
                    {errors.username && <p 
                            style={{
                                color:"red",
                                width: "158px",
                            }}
                            className="error">{errors.username}</p>}
                    
                    <LoginField>
                    <InputIcon>
                            <FaEnvelope />
                        </InputIcon>
                        <LoginInput 
                        placeholder="Email" 
                        name="email" 
                        value={values.email}
                        onChange={handleChange} 
                        />
                    </LoginField>
                    {errors.email && <p 
                            style={{
                                color:"red",
                                width: "120px",
                            }}
                            className="error">{errors.email}</p>}
                    
                    
                    <LoginField>
                        <InputIcon>
                            <FaLock />
                        </InputIcon>
                        <LoginInput 
                        placeholder="Password"
                        type="password" 
                        name="password" 
                        value={values.password}
                        onChange={handleChange} 
                        />
                    </LoginField>
                    {errors.password && <p 
                            style={{
                                color:"red", 
                                width: "158px",
                            }}
                            className="error">{errors.password}</p>}
                    <LoginButton onClick={handleFormSubmit}>
                        <Btn> SIGN UP </Btn>
                    </LoginButton>
                </LoginForm>
                <LoginP>Or Sign Up Using </LoginP>
                        <LoginIcon>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaLinkedin />
                            </SocialIconLink>
                    </LoginIcon>
            </LoginContainer>
        </div>
    )
}

export default SignupPage
