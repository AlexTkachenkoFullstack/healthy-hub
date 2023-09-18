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
    return (<>
                <ForgotContainer>
            < ImageForgot />
            <ForgotText>
                <ForgotTextTitle>Forgot your password</ForgotTextTitle>
                <Text>We will send you an email with recovery instructions</Text>
                <FormForgot>
                    <TextField placeholder="E-mail" label="email" type='email' name="email" />
                    <ButtonFogot  type='submit'>Sign In</ButtonFogot>
                </FormForgot>
                <TextBlock>
                    <TextSecond>If you don't have an account yet</TextSecond>
                    <TextSignUp to="/signup">Sign up</TextSignUp>
                </TextBlock>
            </ForgotText>
                </ForgotContainer>
            </>
    )
}

export default ForgotPasswordPage