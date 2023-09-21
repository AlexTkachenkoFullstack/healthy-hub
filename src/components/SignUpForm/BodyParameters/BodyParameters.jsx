import { Formik, Form } from 'formik';
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

const initialValues = {
  height: '',
  weight: '',
};

const BodyParameters = ({ goNext, goBack, setWeight, setHeight }) => {
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <BodyParametersHeader>Body parameters</BodyParametersHeader>
          <Text>Enter your parameters for correct performance tracking</Text>
          <ChooseText>Height</ChooseText>
          <InputBox>
            <InputText name="height" placeholder="Enter your height" required />
          </InputBox>
          <ChooseText>Weight</ChooseText>
          <InputBox>
            <InputText name="weight" placeholder="Enter your weight" required />
          </InputBox>
          <p>
            <InputButton type="submit">Next</InputButton>
          </p>
          <p>
            <BackButton type="button" onClick={goBack}>
              Back
            </BackButton>
          </p>
        </Form>
      </Formik>
    </BodyParametersContainer>
  );
};

export default BodyParameters;
