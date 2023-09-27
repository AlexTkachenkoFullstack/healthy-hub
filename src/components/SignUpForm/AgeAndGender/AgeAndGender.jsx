import { Formik, Form, ErrorMessage, Field } from 'formik';
import {
  Image,
  AgeAndGenderContainer,
  AgeAndGenderHeader,
  Text,
  ChooseText,
  LabelContainer,
  LabelBlock,
  InputBox,
  InputText,
  InputButton,
  BackButton,
  ExtraContainer,
  CustomRadioInput,
  ValidationError,
  IconTextPosition,
  InputContainer,
  RadioBoxContainer,
} from './AgeAndGender.styled';

import lowQualityImage from '../../../assets/images/elder-fitness.png';
import highQualityImage from '../../../assets/images/elder-fitness-2x.png';
import { genderAgeSchema } from '../validationLibs';
import { useEffect } from 'react';
import InputSuccessIcon from '../InputSuccessIcon';
import InputErrorIcon from '../InputErrorIcon';

const AgeAndGender = ({
  goNext,
  goBack,
  setAge,
  setGender,
  dataGender,
  dataAge,
}) => {
  useEffect(() => {
    const selectorString = 'input[type="radio"][value="' + dataGender + '"]';
    const userButton = document.querySelector(selectorString);
    const checkedButton = document.querySelector('[checked=true]');
    console.log(userButton);
    console.log(checkedButton);

    // if (!checkedButton) {
    //   return;
    // }
    // checkedButton.checked = true;
  }, [dataGender]);

  const initialValues = {
    gender: '',
    age: '',
  };

  const handleSubmit = (values, actions) => {
    const { age, gender } = values;
    setAge(age);
    setGender(gender.toLowerCase());
    goNext();
  };

  const isRetinaDisplay =
    window.matchMedia &&
    window.matchMedia(
      '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
    ).matches;

  const image = isRetinaDisplay ? highQualityImage : lowQualityImage;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validationSchema={genderAgeSchema}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <AgeAndGenderContainer>
          <Image src={image} alt="Elder fitness" />
          <Form autoComplete="off">
            <AgeAndGenderHeader id="genderGroup">
              Select gender, Age
            </AgeAndGenderHeader>
            <Text>
              Choose a goal so that we can <br />
              help you effectively
            </Text>

            <div role="group" aria-labelledby="yourGender">
              <label>
                <div>
                  <Field type="radio" name="gender" value="male" />
                  <div>Male</div>
                </div>
              </label>
              <label>
                <div>
                  <Field type="radio" name="gender" value="female" />
                  <div>Female</div>
                </div>
              </label>
            </div>
            
            <InputContainer>
              <InputBox
                style={{
                  borderColor:
                    errors.age && touched.age
                      ? 'var(--input-border-color-error)'
                      : '',
                }}>
              <label htmlFor="age">
              <InputText
                type="number"
                name="age"
                id="age"
                placeholder="Enter your age"
                onChange={e => {
                  e.preventDefault();
                  const { value } = e.target;
                  const regex =
                    /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
                  if (!value || regex.test(value.toString())) {
                    setFieldValue('age', value);
                  }
                }}
              /></label>
              <IconTextPosition
                style={{
                  display: values.age ? 'block' : 'none',
                }}
              >
                {errors.age && touched.age ? (
                  <InputErrorIcon />
                ) : (
                  <InputSuccessIcon />
                )}
              </IconTextPosition>
              </InputBox>
              <ErrorMessage name="age">
                {msg => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
              </InputContainer>


            {/* <ExtraContainer htmlFor="gender">
              <ChooseText>Gender</ChooseText>
              <LabelBlock role="group" aria-label="genderGroup">
                <RadioBoxContainer>
                  <label htmlFor="male">
                    <CustomRadioInput
                      type="radio"
                      name="gender"
                      value="male"
                      required
                      checked
                    />
                  </label>
                  Male
                </RadioBoxContainer>

                <RadioBoxContainer>
                  <label htmlFor="female">
                    <CustomRadioInput
                      type="radio"
                      name="gender"
                      value="female"
                    />
                  </label>
                  Female
                </RadioBoxContainer>
              </LabelBlock>
              <ChooseText>Your age</ChooseText>
            </ExtraContainer>
            

             */}

            <InputButton type="submit">Next</InputButton>

            <BackButton type="button" onClick={goBack}>
              Back
            </BackButton>
          </Form>
        </AgeAndGenderContainer>
      )}
    </Formik>
  );
};

export default AgeAndGender;
