import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, ErrorMessage } from 'formik';

import InputSuccessIcon from '../../components/SignUpForm/InputSuccessIcon';
import InputErrorIcon from '../../components/SignUpForm/InputErrorIcon';
import { signInSchema } from '../../components/SignInFormValidation/SignInFormValidation';
import {
    ImageSignIn,
    SignInText,
    TextTitle,
    Text,
    ButtonSignIn,
    FotmSignIn,
    TextSecond,
    TextSignUp,
    TextBlock,
    SignInContainer,
    TextFogot,
    IconTextPosition,
    InputBox,
    InputText,
    ValidationError,
} from './SignInPage.styled';
import {loginThunk} from '../../redux/auth/operations'

const initialValues = {
    email: '',
    password: '',
};

const SignInPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
    e.preventDefault();
    const formLogin = e.currentTarget;
    dispatch(loginThunk({ email: formLogin.elements.email.value, password: formLogin.elements.password.value, })
    );
    formLogin.reset();
}

    return (<>
        <SignInContainer>
            < ImageSignIn />
            <SignInText>
                <TextTitle>Sign in</TextTitle>
                <Text>You need to login to use the   service</Text>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signInSchema}>
                    {({ errors, touched }) => (
                        <FotmSignIn onSubmit={handleSubmit}>
                            <InputBox htmlFor="email">
                            <InputText
                                placeholder="E-mail"
                                label="email"
                                type='email'
                                name="email" />
                            <IconTextPosition>
                                {errors.email && touched.email ? (
                                <InputErrorIcon />
                                ) : (
                                <InputSuccessIcon />
                                )}
                            </IconTextPosition>
                            </InputBox>
                                <ErrorMessage name="email">
                                    {msg => <ValidationError>{msg}</ValidationError>}
                                </ErrorMessage>
                            <InputBox htmlFor="password">
                            <InputText
                                placeholder="Password"
                                label="password"
                                type='password'
                                name="password" />
                            <IconTextPosition>
                                {errors.password && touched.password ? (
                                <InputErrorIcon />
                                ) : (
                                <InputSuccessIcon />
                                )}
                            </IconTextPosition>
                            </InputBox>
                            <ErrorMessage name="password">
                                {msg => <ValidationError>{msg}</ValidationError>}
                            </ErrorMessage>
                            <ButtonSignIn type='submit'>Sign In</ButtonSignIn>
                        </FotmSignIn>
                    )}
                </Formik>
                <TextFogot to="/forgot-password">Forgot your password?</TextFogot>
                <TextBlock>
                    <TextSecond>If you don't have an account yet</TextSecond>
                    <TextSignUp to="/signup">Sign up</TextSignUp>
                </TextBlock>
            </SignInText>
        </SignInContainer>
            </>
    )
}

export default SignInPage