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
} from './BodyParameters.styled';
import { bodyParamSchema } from '../validationLibs';

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
        {({ error, touched }) => (
          <Form>
            <BodyParametersHeader>Body parameters</BodyParametersHeader>
            <Text>Enter your parameters for correct performance tracking</Text>
            <ChooseText>Height</ChooseText>
            <InputBox>
              <label htmlFor="height" />
              <InputText
                name="height"
                type="text"
                id="height"
                placeholder="Enter your height"
                required
              />
            </InputBox>
            <ErrorMessage name="height" type="div" />

            <ChooseText>Weight</ChooseText>

            <InputBox>
              <label htmlFor="weight" />
              <InputText
                type="text"
                id="weight"
                name="weight"
                placeholder="Enter your weight"
                required
              />
            </InputBox>
            <ErrorMessage name="weight">{msg => <div>{msg}</div>}</ErrorMessage>
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
