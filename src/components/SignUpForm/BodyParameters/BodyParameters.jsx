import { Formik, Form } from 'formik';
import image from '../../../assets/images/body-contouring.png';
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

import * as yup from 'yup';
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';

// const schema = yup.object().shape({
//   height: yup.string().required('Goal is required is required'),
//   weight: yup.string().required('Age is required'),
// });

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

  return (
    <BodyParametersContainer>
      <Image src={image} alt="Illustration Body parameters" />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <BodyParametersHeader>Body parameters</BodyParametersHeader>
          <Text>Enter your parameters for correct performance tracking</Text>
          <ChooseText>Height</ChooseText>
          <InputBox>
            <InputText name="height" placeholder="Enter your height" />
          </InputBox>
          <ChooseText>Weight</ChooseText>
          <InputBox>
            <InputText name="weight" placeholder="Enter your weight" />
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
