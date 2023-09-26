import React, { useState} from 'react';
import Notification from '../../../src/components/Notification/Notification'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { Formik, ErrorMessage } from 'formik';
import InputSuccessIcon from '../../components/SignUpForm/InputSuccessIcon';
import InputErrorIcon from '../../components/SignUpForm/InputErrorIcon';
import { forgotSchema } from '../../components/SignInFormValidation/SignInFormValidation';
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
    IconTextPosition,
    ValidationError,
    InputBox,
} from './ForgotPasswordPage.styled';

const initialValues = {
    email: '',
};
const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationColor, setNotificationColor] = useState('');
    const navigate = useNavigate();
   


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsEmailValid(true);
    }

    const handleSendClick = async (event) => {
        event.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            setIsEmailValid(false);
            setErrorMessage('Please enter a valid email address!');
            return;
        }

        try {
            const response = await axios.post('https://backend-healthyhub.onrender.com/api/users/forgot-password', {
                email: email,
            });

            console.log('Response:', response.data);
            setNotificationColor('green'); 
            setNotificationMessage('New password instructions sent to your email.');
            setTimeout(() => {
                navigate('/signin');
            }, 2000);
        } catch (error) {
            console.error('Error sending request:', error);
            setNotificationColor('red');  
        setNotificationMessage('Password reset request failed. Please try again.');
        }
    }

    return (<>
            <ForgotContainer>
                < ImageForgot />
            <ForgotText>
                    <ForgotTextTitle>Forgot your password</ForgotTextTitle>
                <Text>We will send you an email with recovery instructions</Text>

                <Formik initialValues={initialValues} onSubmit={handleSendClick} validationSchema={forgotSchema}>
                    {({ errors, touched }) => (
                        <FormForgot onSubmit={handleSendClick}>
                             <InputBox htmlFor="email">   
                            <TextField
                                placeholder="E-mail"
                              
                                type='email'
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                             <IconTextPosition>
                                {errors.email && touched.email ? (
                                <InputErrorIcon />
                                ) : (
                                <InputSuccessIcon />
                                )}
                            </IconTextPosition>
                            </InputBox>
                             {!isEmailValid && <div style={{ color: 'red' }}>{errorMessage}</div>}
                            <ErrorMessage name="email">
                                    {msg => <ValidationError>{msg}</ValidationError>}
                                </ErrorMessage>
                           
                            <ButtonFogot type='submit' >Send</ButtonFogot>
                        </FormForgot>
                    )}
                </Formik>

                    <TextBlock>
                        <TextSecond>Do you already have an account?</TextSecond>
                        <TextSignUp to="/signin">Sign in</TextSignUp>
                    </TextBlock>
                </ForgotText>
        </ForgotContainer>
        {notificationMessage && <Notification message={notificationMessage} color={notificationColor} />} 
        </>
    )
}

export default ForgotPasswordPage