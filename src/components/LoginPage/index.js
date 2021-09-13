import React, {useState, useEffect} from 'react'
import {
    LoginContainer,
    LoginForm,
    LoginField,
    LoginInput,
    LoginButton,
    LoginH1,
    Btn,
    LoginA,
    LoginP,
    SocialIconLink,
    LoginIcon,
    InputIcon,
    LoginHr

} from './LoginElement'
import {
    FaFacebook, FaTwitter, FaLinkedin, FaUser, FaLock
} from 'react-icons/fa'
import validation from './validation';


const LoginPage = ({submitForm}) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

        const [errors, setErrors] = useState({

        });
        const [dataisCorrect, setDataIsCorrect] = useState(false);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);

    };

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataisCorrect) {
            submitForm(true);
        }
    },{errors});

    //false statement ... needs to be deleted from the code 
    // useState(() => {
    //     if(Object.keys(errors).lenth === 0 && dataisCorrect) {
    //         submitForm(false);
    //     }
    // })
            return (
                <div>
                    <LoginContainer>
                        <LoginForm>
                        <LoginH1>Login </LoginH1>
                        <LoginHr />
                            <LoginField>
                                <InputIcon>
                                <FaUser />
                                </InputIcon>
                                <LoginInput 
                                name="username" 
                                placeholder="Username" 
                                value ={values.username}
                                onChange={handleChange}
                                />
                                
                            </LoginField>
                            {errors.username && <p 
                            style={{
                                color:"red",
                            }}
                            className="error">{errors.username}</p>}
                            <LoginField>
                            <InputIcon>
                                <FaLock />
                                </InputIcon>
                                <LoginInput 
                                type="password"
                                name="password" 
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                />
                                
                            </LoginField>
                            {errors.password && <p 
                            style={{
                                color:"red",
                                marginBottom: "0.5rem",

                            }}
                            className="error">{errors.password}</p>}
                            <LoginA>forgot password?</LoginA>
                            <LoginButton >
                                <Btn onClick={handleFormSubmit}> LOGIN </Btn>
                            </LoginButton>
                        </LoginForm>
                        <LoginP>Or Sign in Using </LoginP>
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

export default LoginPage
