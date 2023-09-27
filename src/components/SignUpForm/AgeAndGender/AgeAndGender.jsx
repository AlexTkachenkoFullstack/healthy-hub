import { Formik, Form, ErrorMessage } from 'formik';
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
    const checkedButton = document.querySelector(selectorString);
    if (!checkedButton) {
      return;
    }
    checkedButton.checked = true;
  }, [dataGender]);

  const initialValues = {
    gender: dataGender,
    age: dataAge,
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
      validationSchema={genderAgeSchema}
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
            <ExtraContainer htmlFor="gender">
              <ChooseText>Gender</ChooseText>
              <LabelBlock role="group" aria-label="genderGroup">
                <LabelContainer>
                  <CustomRadioInput type="radio" name="gender" value="male" />
                  Male
                </LabelContainer>
                <LabelContainer>
                  <CustomRadioInput
                    type="radio"
                    name="gender"
                    value="female"
                  />
                  Female
                </LabelContainer>
              </LabelBlock>
              <ChooseText>Your age</ChooseText>
            </ExtraContainer>
            <InputContainer htmlFor="age">
              <InputBox
                style={{
                  borderColor:
                    errors.age && touched.age
                      ? 'var(--input-border-color-error)'
                      : '',
                }}
              >
                <InputText
                  type="number"
                  id="age"
                  name="age"
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
                />
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
