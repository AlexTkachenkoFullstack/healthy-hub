import React from 'react'
import { useDispatch } from 'react-redux'
import {
    ImageSignIn,
    SignInText,
    TextTitle,
    Text,
    TextField,
    ButtonSignIn,
    FotmSignIn,
    TextSecond,
    TextSignUp,
    TextBlock,
    SignInContainer,
    TextFogot,
} from './SignInPage.styled';
import {loginThunk} from '../../redux/auth/operations'

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
                <FotmSignIn onSubmit={handleSubmit}>
                    <TextField placeholder="E-mail" label="email"   type='email' name="email" />
                    <TextField placeholder="Password"  label="password"  type='password'name="password" />
                    <ButtonSignIn  type='submit'>Sign In</ButtonSignIn>
                </FotmSignIn>
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