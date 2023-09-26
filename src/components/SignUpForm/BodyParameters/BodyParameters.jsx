import { Formik, Form, ErrorMessage } from 'formik';
import lowQualityImage from '../../../assets/images/body-contouring.png';
import highQualityImage from '../../../assets/images/body-contouring-2x.png';

import {
  BodyParametersContainer,
  Image,
  BodyParametersHeader,
  Text,
  ChooseText,
  InputBox,
  InputText,
  InputButton,
  BackButton,
  ValidationError,
  IconTextPosition,
  InputContainer,
} from './BodyParameters.styled';
import { bodyParamSchema } from '../validationLibs';
import InputErrorIcon from '../InputErrorIcon';
import InputSuccessIcon from '../InputSuccessIcon';

const BodyParameters = ({
  goNext,
  goBack,
  setWeight,
  setHeight,
  dataHeight,
  dataWeight,
}) => {
  const initialValues = {
    height: dataHeight ?? '',
    weight: dataWeight ?? '',
  };

  const handleSubmit = values => {
    const { height, weight } = values;
    setHeight(height);
    setWeight(weight);
    goNext();
  };

  const isRetinaDisplay =
    window.matchMedia &&
    window.matchMedia(
      '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
    ).matches;

  const image = isRetinaDisplay ? highQualityImage : lowQualityImage;

  return (
    <BodyParametersContainer>
      <Image src={image} alt="Illustration Body parameters" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={bodyParamSchema}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form autoComplete="off">
            <BodyParametersHeader>Body parameters</BodyParametersHeader>
            <Text>Enter your parameters for correct performance tracking</Text>
            <ChooseText>Height</ChooseText>
            <InputContainer htmlFor="height">
              <InputBox
                style={{
                  borderColor:
                    errors.height && touched.height
                      ? 'var(--input-border-color-error)'
                      : '',
                }}
              >
                <InputText
                  name="height"
                  type="number"
                  id="height"
                  placeholder="Enter your height"
                  onChange={e => {
                    e.preventDefault();
                    const { value } = e.target;
                    const regex =
                      /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
                    if (!value || regex.test(value.toString())) {
                      setFieldValue('height', value);
                    }
                  }}
                />
                <IconTextPosition
                  style={{
                    display: values.height ? 'block' : 'none',
                  }}
                >
                  {errors.height && touched.height ? (
                    <InputErrorIcon />
                  ) : (
                    <InputSuccessIcon />
                  )}
                </IconTextPosition>
              </InputBox>
              <ErrorMessage name="height">
                {msg => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
            </InputContainer>

            <ChooseText>Weight</ChooseText>

            <InputContainer htmlFor="weight">
              <InputBox
                style={{
                  borderColor:
                    errors.weight && touched.weight
                      ? 'var(--input-border-color-error)'
                      : '',
                }}
              >
                <InputText
                  type="number"
                  id="weight"
                  name="weight"
                  placeholder="Enter your weight"
                  onChange={e => {
                    e.preventDefault();
                    const { value } = e.target;
                    const regex =
                      /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
                    if (!value || regex.test(value.toString())) {
                      setFieldValue('weight', value);
                    }
                  }}
                />
                <IconTextPosition
                  style={{
                    display: values.weight ? 'block' : 'none',
                  }}
                >
                  {errors.weight && touched.weight ? (
                    <InputErrorIcon />
                  ) : (
                    <InputSuccessIcon />
                  )}
                </IconTextPosition>
              </InputBox>
              <ErrorMessage name="weight">
                {msg => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
            </InputContainer>

            <p>
              <InputButton type="submit">Next</InputButton>
            </p>
            <p>
              <BackButton type="button" onClick={goBack}>
                Back
              </BackButton>
            </p>
          </Form>
        )}
      </Formik>
    </BodyParametersContainer>
  );
};

export default BodyParameters;
