import { Formik, Form, Field } from 'formik';
import {
  Image,
  AgeAndGenderContainer,
  AgeAndGenderHeader,
  Text,
  ChooseText,
  Label,
  LabelBlock,
  InputBox,
  InputText,
  InputButton,
  BackButton,
  ExtraContainer,
} from './AgeAndGender.styled';
import image from '../../../assets/images/elder-fitness.png';

const AgeAndGender = ({ goNext, goBack }) => {
  return (
    <Formik>
      {() => (
        <AgeAndGenderContainer>
          <Image src={image} alt="Elder fitness" />
          <Form>
            <AgeAndGenderHeader id="gender-group">
              Select gender, Age
            </AgeAndGenderHeader>
            <Text>
              Choose a goal so that we can <br />
              help you effectively
            </Text>
            <ExtraContainer>
              <ChooseText>Gender</ChooseText>
              <LabelBlock role="group" aria-label="gender-group">
                <Label>
                  <Field type="radio" name="Select your gender" value="male" />
                  Male
                </Label>
                <Label>
                  <Field
                    type="radio"
                    name="Select your gender"
                    value="female"
                  />
                  Female
                </Label>
              </LabelBlock>
              <ChooseText>Your age</ChooseText>
            </ExtraContainer>
            <InputBox>
              <label  />
              <InputText
                type="text"
                name="age"
                placeholder="Enter your age"
                required
              />
            </InputBox>
            {/* <Field
                type="text"
                id="age"
                name="age"
                placeholder="Enter your age"
                style={{ color: 'rgba(0, 0, 0, 0.5)' }}
              /> */}

            
              <InputButton type="submit" onClick={goNext}>
                Next
              </InputButton>
            
            
              <BackButton type="button" onClick={goBack}>
                Back
              </BackButton>
           
          </Form>
        </AgeAndGenderContainer>
      )}
    </Formik>
    // <>
    //   <h1>AgeAndGender</h1>
    //   <button onClick={goNext}>Next</button>
    //   <button onClick={goBack}>Back</button>
    // </>
  );
};

export default AgeAndGender;
