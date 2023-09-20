import React, { useState } from 'react';
import {
    ForgotContainer,
    ImageForgot,
    ForgotText,
    ForgotTextTitle,
    Text,
    FormForgot,
    TextField,
    ButtonFogot,
    TextBlock,
    TextSecond,
    TextSignUp,
} from './ForgotPasswordPage.styled';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsEmailValid(true);
    }

    const handleSendClick = (event) => {
        event.preventDefault(); 
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            setIsEmailValid(false);
            setErrorMessage('Please enter a valid email address!');
            return;
        }
        console.log('Send email on:', email)
    }

    return (<>
            <ForgotContainer>
                < ImageForgot />
            <ForgotText>
                
                    <ForgotTextTitle>Forgot your password</ForgotTextTitle>
                    <Text>We will send you an email with recovery instructions</Text>
                    <FormForgot>
                    <TextField
                        placeholder="E-mail"
                        label="email"
                        type='email'
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        />
                    {!isEmailValid && <div style={{ color: 'red' }}>{errorMessage}</div>}
                        <ButtonFogot  type='submit' onClick={handleSendClick}>Send</ButtonFogot>
                    </FormForgot>
                    <TextBlock>
                        <TextSecond>Do you already have an account?</TextSecond>
                        <TextSignUp to="/signin">Sign in</TextSignUp>
                    </TextBlock>
        
                </ForgotText>
                </ForgotContainer>
            </>
    )
}

export default ForgotPasswordPage