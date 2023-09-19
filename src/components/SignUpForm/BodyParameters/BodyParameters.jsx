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

const BodyParameters = ({ goNext, goBack, data }) => {
  const handleSubmit = (values, actions) => {
    goNext(values);
  };

  return (
    <BodyParametersContainer>
      <Image src={image} alt="Illustration Body parameters" />
      <Formik initialValues={data} onSubmit={handleSubmit}>
        <Form>
          <BodyParametersHeader>Body parameters</BodyParametersHeader>
          <Text>Enter your parameters for correct performance tracking</Text>
          <ChooseText>Height</ChooseText>
          <InputBox>
            <InputText name="Height" placeholder="Enter your height" />
          </InputBox>
          <ChooseText>Weight</ChooseText>
          <InputBox>
            <InputText name="Weight" placeholder="Enter your weight" />
          </InputBox>
          {/* <Field name="Weight" /> */}
          <p>
            <InputButton type="submit" onClick={goNext}>
              Next
            </InputButton>
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

  // return(<>
  //      <h1>BodyParameters</h1>
  //     <button onClick={goNext}>Next</button>
  //     <button onClick={goBack}>Back</button>
  // </>)
};

export default BodyParameters;
