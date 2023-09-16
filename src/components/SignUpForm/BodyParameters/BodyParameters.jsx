import { Formik, Form, Field } from 'formik';

const BodyParameters = ({ goNext, goBack }) => {
  return (
    <Formik>
      {() => (
        <Form>
          <p>Body parameters</p>
          <p>Height</p>
          <Field name="Height" />
          <p>Weight</p>
          <Field name="Weight" />
          <p>
            <button type="submit" onClick={goNext}>
              Next
            </button>
          </p>
          <p>
            <button type="button" onClick={goBack}>
              Back
            </button>
          </p>
        </Form>
      )}
    </Formik>
  );

  // return(<>
  //      <h1>BodyParameters</h1>
  //     <button onClick={goNext}>Next</button>
  //     <button onClick={goBack}>Back</button>
  // </>)
};

export default BodyParameters;
