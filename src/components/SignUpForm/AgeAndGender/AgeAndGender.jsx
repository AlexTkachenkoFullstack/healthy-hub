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
  CustomRadioInput,
} from './AgeAndGender.styled';
import image from '../../../assets/images/elder-fitness.png';

import * as yup from 'yup';

const schema = yup.object().shape({
  genderGroup: yup.string().required('Goal is required is required'),
  age: yup.string().required('Age is required'),
});

const initialValues = {
  gender: '',
  age: '',
};

const AgeAndGender = ({ goNext, goBack, setAge, setGender }) => {
  const handleSubmit = (values, actions) => {
    const { age, gender } = values;
    setAge(age);
    setGender(gender);
    goNext();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <AgeAndGenderContainer>
        <Image src={image} alt="Elder fitness" />
        <Form>
          <AgeAndGenderHeader id="genderGroup">
            Select gender, Age
          </AgeAndGenderHeader>
          <Text>
            Choose a goal so that we can <br />
            help you effectively
          </Text>
          <ExtraContainer>
            <ChooseText>Gender</ChooseText>
            <LabelBlock role="group" aria-label="genderGroup">
              <Label>
                <Field type="radio" name="gender" value="male" as={CustomRadioInput} />
                Male
              </Label>
              <Label>
                <Field type="radio" name="gender" value="female" as={CustomRadioInput} />
                Female
              </Label>
            </LabelBlock>
            <ChooseText>Your age</ChooseText>
          </ExtraContainer>
          <InputBox>
            <label />
            <InputText
              type="text"
              id="age"
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

          <InputButton type="submit">Next</InputButton>

          <BackButton type="button" onClick={goBack}>
            Back
          </BackButton>
        </Form>
      </AgeAndGenderContainer>
    </Formik>
    // <>
    //   <h1>AgeAndGender</h1>
    //   <button onClick={goNext}>Next</button>
    //   <button onClick={goBack}>Back</button>
    // </>
  );
};

export default AgeAndGender;
