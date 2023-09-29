import React, { useState } from 'react';
import Notification from '../../../src/components/Notification/Notification';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    ForgotContainer,
    ImageContainerLog,
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

import ForgotImageDesctop from '../../assets/images/sport-and-fitness-tracker.png';
import ForgotImageDesctop2k from '../../assets/images/sport-and-fitness-tracker-2x.png';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationColor, setNotificationColor] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = event => {
      setEmail(event.target.value);
      setIsEmailValid(true);
    };


  const handleSendClick = async event => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setIsEmailValid(false);
      setErrorMessage('Please enter a valid email address!');
      return;
    }

    try {
      const response = await axios.post(
        'https://backend-healthyhub.onrender.com/api/users/forgot-password',
        {
          email: email,
        }
      );

      console.log('Response:', response.data);
      setNotificationColor('green');
      setNotificationMessage('New password instructions sent to your email.');
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    } catch (error) {
      console.error('Error sending request:', error);
      setNotificationColor('red');
      setNotificationMessage(
        'Password reset request failed. Please try again.'
      );
    }
  };

    return (<>
            <ForgotContainer>
                <ImageContainerLog
          srcSet={`${ForgotImageDesctop} 1x, ${ForgotImageDesctop2k} 2x`}
          src={ForgotImageDesctop}
          alt="Welcome page photo Photo"
        />
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
        {notificationMessage && <Notification message={notificationMessage} color={notificationColor} />} 
        </>
    )
}


export default ForgotPasswordPage;
